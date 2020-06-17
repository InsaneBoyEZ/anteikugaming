const express = require('express');
const app = express();

app.use(express.static('private'));

app.get('/', function(request, response) {
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
// Comienza el Code
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = process.env.PREFIX; 

//Evento message

client.on('message', (message) => {
  if (!message.guild) return;
  if (message.member.bot) return;   
  if (!message.content.startsWith(prefix)) return;  
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase(); 
  try {
    
    let comando = require("./en/" + command + ".js");
    if (!comando) return;
    comando.run(client, message, args);
  } catch (err) {
   
  } finally {
  };
});

//Evento READY
client.on('ready', () => {
setInterval(function() {

    var estados = ["Anteiku Gaming BOT", "Dev and Owner パウフ ","Owner Hide on Yatra"]


    let estado = estados[Math.floor(estados.length * Math.random())];


    client.user.setPresence({
      status: "online",
        game: {
        name: estado,
        type: "STREAMING",
        url: "https://www.twitch.tv/AnteikuGamingBOT"
      }
    })

// Estos números son los milisegundos de los que les hable más arriba

  })}, 2000);

client.login(process.env.TOKEN)
