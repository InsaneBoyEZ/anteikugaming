const Discord = require("discord.js")
exports.run = async (client, message, args) => {
   
  let p = new Discord.RichEmbed()
  p.setColor("0xf70cf9")
  p.setDescription("No tienes Permisos para usar este comando.")
  
    let m = new Discord.RichEmbed()
  m.setColor("0xf70cf9")
  m.setDescription('Debes mencionar a alguien.')
  
    let r = new Discord.RichEmbed()
  r.setColor("0xf70cf9")
  r.setDescription('Escriba un razón, `.ban @username [razón]`')
  
      let b = new Discord.RichEmbed()
  b.setColor("0xf70cf9")
  b.setDescription('No puedo banear al usuario mencionado.')
  
let user = message.mentions.members.first();
let razon = args.slice(1).join(' ');
        
var perms = message.member.hasPermission("BAN_MEMBERS");
if(!perms) return message.channel.send(p);
        
if (message.mentions.users.size < 1) return message.reply(m).catch(console.error);
if(!razon) return message.channel.send(r);
if (!message.guild.member(user).bannable) return message.reply(b);
        
    
message.guild.member(user).ban(razon);
  
   let embed = new Discord.RichEmbed()
  embed.setColor("0xf70cf9")
  embed.setDescription(user.user + "🛑 ha sido baneado por "+message.author)
  embed.addField("🗒 Razón:", razon)
  
message.channel.send(embed)
}