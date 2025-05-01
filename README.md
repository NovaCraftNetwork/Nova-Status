# 🌌 Nova Status Bot

**Nova Status** is a highly configurable and easy-to-use Discord bot that allows you to display the status of your Minecraft server directly on Discord.

## ⚙️ Setup Instructions

Follow these simple steps to get your bot up and running:

1. **Fork or Download the Repository**  
To get started, either **fork** this repository to your GitHub account or **download** it as a ZIP file.

2. **Configure the `config.json` File**  
Open the `config.json` file and replace the placeholder values with your own details. Here’s an example configuration:

    ```json
    {
      "token": "YOUR_DISCORD_BOT_TOKEN",
      "channelId": "YOUR_DISCORD_CHANNEL_ID",
      "serverIp": "YOUR_MINECRAFT_SERVER_IP"
    }
    ```

    - **token**: Your Discord bot’s token. You can generate this by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
    - **channelId**: The ID of the Discord channel where you want the server status to appear. To get the channel ID, enable "Developer Mode" in Discord settings and right-click the channel to copy its ID.
    - **serverIp**: The IP address of your Minecraft server.

    **Note**: If you're using a free hosting provider or testing locally, your bot’s node could be temporarily blocked due to too many requests or frequent restarts (typically 15-30 minutes). If this happens, try to wait or reduce the frequency of requests to avoid triggering rate limits.

3. **Install Dependencies**  
Open your terminal or command prompt, navigate to the project folder, and run:

    ```bash
    npm install
    ```

    This will install all the necessary dependencies for your bot to function properly.

4. **Run the Bot**  
Start the bot by running the following command:

    ```bash
    node index.js
    ```

    If everything is set up correctly, your bot should now be live and displaying your Minecraft server status in the specified Discord channel!

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

3. **[Silly Dev](https://sillydev.co.uk/)** (Reccomended)
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
