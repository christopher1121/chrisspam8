const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By iRealKsA");


client.on("ready", () => {
let channel =     client.channels.get("636258798100807710")
setInterval(function() {
channel.send(`غغَسسسيل أموال من قِبل السَيد المُخضضرم كريسستوفير, `);
channel.send(`لاَسسيآدهه، بِحضضور القييآدهه .. غَسسيل أموالل لعع. المُوطههبل كريسستوفير :) `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
