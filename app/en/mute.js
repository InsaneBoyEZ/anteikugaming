const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('MUTE_MEMBERS')) return message.channel.send("Necesitas permiso para usar este comando.")
   
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("No encuentro a ese usuario.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('Especifica una razón por la que muteas al usuario.')
    let muterole = message.guild.roles.find(b => b.name ===  "Muteado");
    if(args[0] == "help"){
      message.reply("Usalo así: mute <usuario> <razón>");
      return;
    }
  
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muteado",
                color: "0x090808",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('Usuario', `<@${user.id}>`)
            .addField('Razón', `${reason}`)
            .addField('Moderador', `${mod}`)
            .setColor('#D9D900')
        message.channel.send(muteembed)
}