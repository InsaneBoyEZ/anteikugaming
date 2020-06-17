const Discord = require("discord.js")
const db = require("quick.db") 
exports.run = async (client, message, args) => {  


var user = message.mentions.users.first()//lee la mencion en el mensaje 
 
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes los permisos `ADMINISTRADOR`.")
   if(user == message.author) return message.channel.send(message.author + "  Por que te adviertes a ti mismo? O.o")
   if (!user) return message.channel.send(" Debes Mencionar a un usuario y mencionar la razon!")


  let razon= args.join(" ").slice(22)||"Razón no especificada."

  let warnembed = new Discord.RichEmbed()

   .setColor("RANDOM")
   .addField("Usuario Advertido", `${user.username}`)
   .addField("ID Advertido", `ID ${user.id}`)
   .addField("Razón", razon)
   .addField("Adminstrador", `${message.author}`)
   .addField("Canal", message.channel)
  
  message.channel.send(warnembed);
    
db.add(`count_${user.id}_${message.guild.id}`, 1) //añade un +1 a la base de datos(count_)

let warnsnumbers = db.fetch(`count_${user.id}_${message.guild.id}`)//extrae informacion de la base de datos (count_)

  db.push(`warns_${user.id}_${message.guild.id}`, warnsnumbers+"." + razon)//añade el numero del warn con (ola) y la razon con (razon)

  db.add(`warn_${user.id}_${message.guild.id}`, 1) //agrega a la base de datos (warn_) +1 en numero de advertencias

}