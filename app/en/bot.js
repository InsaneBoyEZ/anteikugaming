const Discord = require("discord.js")
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
    .setDescription("Mi Informacion")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor(0xFF0000)
    .addField(":bust_in_silhouette: Dueños","**Hide on BeckyG, Hide On Yatra **")
    .addField(":bust_in_silhouette: Creadora","**ٴٴ#9688**")
    .addField(":gear: Version","1.0")
    .addField(":calendar: Fecha de Creacion","6/12/20")  
    message.channel.send(embed );
  }