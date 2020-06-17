const Discord = require("discord.js")
exports.run = (client, message, args) => {
 if(message.author.id !== "622265269242298378" & message.author.id !== "531890793057878056" & message.author.id !== "551660609784250369") return message.channel.send("**Wow!!! Solo Personal Autorizado**");
const embed = new Discord.RichEmbed()
  .setColor("0xf70cf9") 
  .setTitle("!Iniciando reinicio del bot!")
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
  .setColor("0xf70cf9") 
  .setTitle("!El Bot fue reiniciado satifactoriamente!")
message.channel.send(embed2).then(() => {
setTimeout(() => {
process.exit();
}, 3000)
})
}