const Discord = require("discord.js")
exports.run = async (client, message, args) => {
 const texto = args.join(" ").split(" / ");
 const [title, description, footer] = texto;
 
if(!title && !description && !footer) return message.channel.send("Modo de Uso: .say TITLE / DESCRIPTION / FOOTER")
  
  
if(title && !description) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setColor("0368f4")
  
  message.channel.send(embed)
}
  
  if(description && !footer) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(description)
  .setColor("0368f4")
  
  message.channel.send(embed)
  }
  
  if(footer) {
  
  const embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(description)
  .setFooter(footer)
  .setColor("0368f4")
  
  message.channel.send(embed)
    
  }
}