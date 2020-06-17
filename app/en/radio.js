const Discord = require("discord.js")
exports.run = (client, message, args) => {   

   let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
        voiceChannel.join().then(conexion =>{
        conexion.playStream('http://138.201.248.93:80/trap');
      
   //Fallout radio       //  http://fallout.fm:8000/falloutfm6.ogg
      //Jazz    // http://streams.greenhost.nl:8080/jazz
    //latin      //  http://190.4.191.150:8000/stream.mp3
          //  http://138.201.248.93:80/trap
          //  	http://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_new_96.mp3
          //  
      //musiva vieja op    //  http://stream.sublimefm.nl/SublimeFM_mp3
          
          //
          //http://stream.electroradio.fm:80/192k/;
          const embed = new Discord.RichEmbed()
          .setColor('0368f4')
          .setDescription("Radio electro activado.")
        message.channel.send(embed)
        return;
      })
      .catch(console.error);
  }