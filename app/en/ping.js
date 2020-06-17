const Discord = require("discord.js")
exports.run = (client, message, args) => {
      let ping = Math.floor(message.client.ping);
const pong = new Discord.RichEmbed()
.setDescription("Verificando el ping...")
.setColor("RANDOM");
      message.channel.send(pong)
.then(async m => {
setTimeout(() => {
const embed = new Discord.RichEmbed()
.setTitle("PING")
.setDescription(":incoming_envelope:  Ping mensajes : `"+ping+" ms.`\n :satellite_orbital: Ping DiscordAPI : `"+ping+" ms`")
.setFooter("Gamer Master - Ping")
.setColor("RANDOM");
m.edit(embed)
}, 4000);
      });  
}