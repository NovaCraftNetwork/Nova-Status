# 🌌 Nova Status Bot

**Nova Status** is a configurable Discord bot that displays the status of your Minecraft server directly in Discord.

## ⚙️ Setup Instructions

1. **Fork or Download the Repository**
   - **Fork** this repository or **download** it as a ZIP file.

2. **Configure the `config.json` File**
   Open the `config.json` file and update the placeholder values. Example:

    ```json
    {
      "token": "MTAwMzA0NjEwMDAwMDAwMzYxOQ.FAKE-TOKEN.abcd1234NOTAREALTOKEN5678",
      "channelId": "000000000000000000",
      "serverIp": "novacraft.playit.gg",
      "enableExpress": true,
      "port": 3000,
      "checkInterval": 300000,
      "statusMessageFile": "./message_id.txt",
      "statusConditions": [
        {
          "match": "maintenance",
          "emoji": "🟠",
          "label": "Maintenance",
          "color": "ffa500"
        },
        {
          "match": "offline",
          "emoji": "🔴",
          "label": "Offline",
          "color": "ff0000"
        },
        {
          "match": "online",
          "emoji": "🟣",
          "label": "Online",
          "color": "bc02cd"
        }
      ],
      "embed": {
        "title": "NovaCraft Status",
        "thumbnail": "https://i.imgur.com/3jLKrYx.png",
        "footer": "Last checked"
      }
    }
    ```

    - **`token`**: Your bot's token from the [Discord Developer Portal](https://discord.com/developers/applications).
    - **`channelId`**: The ID of the Discord channel where the status should appear.
    - **`serverIp`**: The IP address of your Minecraft server.
    - **`enableExpress`**: Set to `true` if you want to monitor your bot with [UptimeRobot](https://uptimerobot.com/).
    - **`port`**: Port number for the Express server (default is 3000).
    - **`checkInterval`**: How often (in milliseconds) to check the server status (default is 5 minutes).
  
3. **Install Dependencies**
   Run `npm install` to install the required dependencies.

4. **Run the Bot**
   Start the bot using `node index.js`.


## 🔧 Troubleshooting

- **Bot not posting status?**
    - Double-check your `config.json` for accuracy, especially the token, channel ID, and server IP.
    - Ensure your bot has permission to post in the designated channel.
    - **Temporary Block**: If your bot is temporarily blocked due to frequent requests or restarts, wait 15-30 minutes before trying again. Reducing the frequency of requests can help prevent this issue.

- **Getting errors on startup?**
    - Make sure all dependencies were installed correctly with `npm install`.
    - Verify that your version of Node.js is up-to-date (recommended version: v14 or higher).

## 💻 Hosting Recommendations

For hosting your bot, you have several options, both free and paid:

### Free Hosting

1. **[Repl.it](https://replit.com/)**  
   - Repl.it provides an easy-to-use, free platform to host your bot. It supports Node.js and offers cloud-based hosting with an integrated IDE.
   - **Limitations**: May go idle after some time if not active.

2. **[Pella](https://www.pella.app/)**  
   - Pella is a free, Discord bot-focused hosting platform designed to make deploying and managing bots simple. It offers a clean web interface and one-click deployment.
   - **Limitations**: May experience queue times during peak usage and limited runtime resources compared to paid options.

3. **[Silly Dev](https://sillydev.co.uk/)** (Recommended)
   - Silly Dev provides free and premium Discord bot hosting with a focus on performance and community. It offers features like auto-restart, uptime monitoring, and a user-friendly dashboard.
   - **Limitations**: Free tier may include resource caps and occasional downtime during maintenance or high traffic periods.

### Paid Hosting

1. **[DigitalOcean](https://www.digitalocean.com/)**  
   - DigitalOcean offers flexible and affordable cloud hosting starting at $5/month. Ideal for long-term projects with dedicated resources.
   - **Benefits**: Full control over your server and 24/7 uptime.

2. **[Amazon Web Services (AWS)](https://aws.amazon.com/)**  
   - AWS provides a wide range of cloud hosting services with a pay-as-you-go pricing model. You can use EC2 instances to host your bot.
   - **Benefits**: Highly scalable and reliable.

3. **[Vultr](https://www.vultr.com/)**  
   - Vultr offers high-performance cloud hosting with a variety of pricing plans starting at $5/month.
   - **Benefits**: Affordable pricing and fast deployment.

## 📝 License

This project is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

Enjoy using the **Nova Status** bot! 🎮✨
