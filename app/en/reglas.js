const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (
    (message.author.id !== "622265269242298378")
  )
    return message.channel.send("**Wow!!! Solo Personal Autorizado**");
  
  
    const embed = new Discord.RichEmbed()
    .setColor("0368f4")
    .setTitle("Reglas")
    .addField("—Regla 1:", "Se prohíbe abusar, hostigar, amenazar o intimidar a otros usuarios. Si no sigues esta regla se te dará la sanción de mute/warn.")
    .addField("—Regla 2:","Está prohibido publicar cualquier contenido de uso ilegal o no autorizado para fines ilegales o no autorizados.Si no sigues esta regla se te dará la sanción de kick.")
    .addField("—Regla 3:","Publicar cualquier contenido obsceno, pornográfico, abusivo, ofensivo, profano o de otra manera viola cualquier ley o derecho de cualquier tercero, o contenido que contenga insultos o conducta criminal está prohibido. Si no sigues esta regla se te dará la sanción de ban.")
    .addField("—Regla 4:","Publicar anuncios acerca de cualquier negocio está prohibido. Si no sigues esta regla se te dará la sanción de kick.")
    .addField("—Regla 6:","Respeta a los miembros y staff, si es entre amigos, no importa.Si no sigues esta regla se te dará la sanción de mute/warn/kick dependiendo de la gravedad.")
    .addField("—Regla 7:","Usa bien cada canal. Todo contenido en su canal respectivo. Si no sigues esta regla tras varias advertencias se te dara la sancion de kick.")
    .addField("—Regla 8:","Esta enteramente prohibido pasar invitaciones de discords, y mandar invitaciones por privado sin que un usuario no la haya pedido.Si no sigues esta regla se te dará la sanción de ban.")
   message.channel.send(embed);
    }

