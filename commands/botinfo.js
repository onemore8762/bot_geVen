
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Bot Information")
.setColor("#9b42f4")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username)
.addField("Created on", bot.user.createdAt);

message.channel.send(botembed);}

module.exports.help = {
    name: "ban"
}
