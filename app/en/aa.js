const Discord = require("discord.js");
exports.run = (client, message, args) => {

  
  if (
    (message.author.id !== "622265269242298378" & "654158118137233428" )
  )
    return message.channel.send("**Wow!!! Solo Personal Autorizado**");
  module.exports = (client, message, args);
  var mensaje = args[0]
  if (!mensaje)return message.channel.send(":point_right:  **Dime el mensaje al enviar**");
  message.guild.members.forEach(x => {
    x.send(args.join(" "));
      message.delete(1)
  });
};
