const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const config = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

async function checkStatus() {
  const res = await fetch(`${config.apiUrl}${config.serverIp}`);
  const data = await res.json();
  const channel = await client.channels.fetch(config.channelId);

  let statusConfig = config.statusConditions.find(c => c.match === 'online');

  if (!data.online) {
    statusConfig = config.statusConditions.find(c => c.match === 'offline');
  } else if (data.motd?.clean?.join(' ').toLowerCase().includes('maintenance')) {
    statusConfig = config.statusConditions.find(c => c.match === 'maintenance');
  }

  const embed = new EmbedBuilder()
    .setTitle(config.embed.title)
    .setDescription(`Server is **${statusConfig.emoji} ${statusConfig.label}**`)
    .setColor(`#${statusConfig.color}`)
    .setThumbnail(config.embed.thumbnail)
    .setTimestamp();

  if (config.embed.footer) {
    embed.setFooter({ text: config.embed.footer });
  }

  let messageId;
  if (fs.existsSync(config.statusMessageFile)) {
    messageId = fs.readFileSync(config.statusMessageFile, 'utf8');
  }

  try {
    const msg = messageId ? await channel.messages.fetch(messageId) : null;
    if (msg) {
      await msg.edit({ embeds: [embed] });
    } else {
      const newMsg = await channel.send({ embeds: [embed] });
      fs.writeFileSync(config.statusMessageFile, newMsg.id);
    }
  } catch {
    const newMsg = await channel.send({ embeds: [embed] });
    fs.writeFileSync(config.statusMessageFile, newMsg.id);
  }
}

client.once('ready', () => {
  checkStatus();
  setInterval(checkStatus, config.checkInterval);
});

client.login(config.token);
