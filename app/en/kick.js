const Discord = require("discord.js")
exports.run = async (client, message, args) => {
let user = message.mentions.members.first();
let razon = args.slice(1).join(' ');

    let p = new Discord.RichEmbed()
  p.setColor("0xf70cf9")
  p.setDescription("No tienes Permisos para usar este comando.")
  
      let m = new Discord.RichEmbed()
  m.setColor("0xf70cf9")
  m.setDescription('Debes mencionar a alguien.')
  
      let r = new Discord.RichEmbed()
  r.setColor("0xf70cf9")
  r.setDescription('Escriba un razón, `.kick @username [razón]`')
  
        let k = new Discord.RichEmbed()
  k.setColor("0xf70cf9")
  k.setDescription('No puedo kickear al usuario mencionado.')
  
  
var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send(p);
if (message.mentions.users.size < 1) return message.reply(m).catch(console.error);

if (!razon) return message.channel.send(r);
if (!message.guild.member(user).kickable) return message.reply(k);
     
message.guild.member(user).kick(razon);
  
 let embed = new Discord.RichEmbed()
  embed.setColor("0xf70cf9")
  embed.setDescription(user.user + "🛑 ha sido expulsado por "+message.author)
  embed.addField("🗒 Razón:", razon)
  
  message.channel.send(embed)
}
 
