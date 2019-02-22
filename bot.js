const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548433774376124428")
setInterval(function() {
channel.send(`Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, Lamine, `);
}, 30)
})

client.login(process.env.BOT_TOKEN);