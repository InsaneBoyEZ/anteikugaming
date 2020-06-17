const Discord = require("discord.js")
exports.run = (client, message, args) => {
	const helpembed = new Discord.RichEmbed()
    .setAuthor("✅ Comandos del bot ✅")
    .setColor('0368f4')
    .setDescription("-=>==()==<=--=>==()==<=--=>==(=)==<=--=>==()==\n")
    .addField(":bust_in_silhouette: | `.Avatar` ","Muestra tu avatar o el de otro usuario.")
    .addField(":bust_in_silhouette: | `.User`","Muestra la informacion de un Usuario")
    .addField(":satellite_orbital: | `.Ping`","Muestra el Ping del Bot")
    .addField(":gem: | `.Server`","Muestra los datos del servidor.")
    .addField(":radio: | `.Radio` and `.Leave`","El bot se une a tu canal de voz y coloca radio Electronica, Leave para que abandone el canal ")
    .addField(":tools: Administracion","Solo STAFF")
    .addField(":bar_chart: | `.Encuesta`","Realiza una votacion/Encuesta.")
    .addField(":wastebasket: | `.Clear`","Limpia el chat")
    .addField(":x: | `.Kick`","Expulsa a un miembro del servidor.")
    .addField(":no_entry: | `.Ban`","Banea a un miembro del servidor.")
    .addField(":pen_ballpoint: | `.Say`"," El bot dice el texto que pidas")
    .addField(":heavy_multiplication_x: | `.Warn`","Warnea/Advierte a un miembro")
    .addField(":robot: | `.Bot`","Muestra mi Informacion")
  
    message.member.send(helpembed);
    message.channel.send("| Comandos enviandos al privado | ");
  }