const Discord = require("discord.js")
exports.run = (client, message, args) => {
if(!message.guild.me.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("Perdon, pero no tengo permisos")
}

if(!message.member.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("Perdon, pero no tienes permisos")
}

if(!args) return message.channel.send('Escriba la cantidad de mensajes a eliminar');
let cantidadm = parseInt(args[0])

if(!cantidadm) return message.reply("Introduce un numero por favor") 

if(cantidadm > 98){
    message.channel.send("El maximo de mensajes que puedo borrar es 100, por lo tanto lo establecere automaticamente ahi")
    cantidadm = 98
}

var cantidadreal = cantidadm + 2
//ese + 2 que tiene la "cantidadm" es para borrar el comando y la primera respuesta del bot

message.channel.send(`Voy a borrar los ${cantidadreal} mensajes`)

message.channel.fetchMessages({limit: cantidadreal}).then((mensajes) => {
    var mensajes = mensajes.filter(m => !m.pinned && !m.system)


    setTimeout(() => {
        message.channel.bulkDelete(mensajes).then(() => {
            message.channel.send(`Listo, borre los ${cantidadreal} mensajes :ok_hand:`)
        }).catch(e => {
            switch(e.message){
                case("You can only bulk delete messages that are under 14 days old."):{
                    message.channel.send("Solo puedo borrar mensajes con menos de 2 semanas de antigüedad")
                }
                //aqui ire poniendo mas mensajes a medida que se me ocurran o vea en el canal de ayuda
                default:{
                    console.log("Ocurrio un error desconocido en el comando para borrar mensajes \n" + e)
                    message.channel.send("Err, no pude borrar los mensajes :exclamation:")
                }
            }
        })
    }, 3000)
})
}