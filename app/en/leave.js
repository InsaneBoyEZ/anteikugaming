const Discord = require("discord.js")
exports.run = (client, message, args) => {   
let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
            const embed = new Discord.RichEmbed()
          .setColor('0368f4')
          .setDescription("Dejando el canal de voz.")//
        message.channel.send(embed).then(() => {
       // message.channel.send('')
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }   
}