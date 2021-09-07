const { Client, Intents } = require("discord.js");
const botconfig = require("./botconfig.json");

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {

   console.log(`${client.user.username} is online.`);
   client.user.setActivity("gotopia.hvgame.eu", { type: "PLAYING" });
});

client.on("messageCreate", message => {

   if(message.author.bot) return;

   var prefix = botconfig.prefix;

   var messageArray = message.content.split(" ");

   var command = messageArray[0];

 });

client.login(process.env.token);