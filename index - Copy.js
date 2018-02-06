const Discord = require("discord.js");

const token = "NDA2OTY0NTc3ODQ3NDc2MjI0.DVGM7Q.6ymx72CYl-YvCr2JfdQSbo8haQs"; 
const prefix = "-";

var bot = new Discord.Client();

bot.on("ready", function () {
   console.log("Ready");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix)) return;
    if(message.author === bot.user) return;

    if(message.content === (prefix+ "ping")) {
       message.reply(`pong \`${Date.now() - message.createdTimestamp} ms\``);    
    } else

    if(message.content === (prefix + "hello")) {
        message.reply("Oh hai Mark!");     
    } else 
    
    if(message.content.startsWith(prefix + "Ash")) {
       message.channel.send("Bullet");
    } else

    if(message.content === (prefix + "lisa")) {
       message.channel.send("You'\re tearing me apart Lisa!");
    }

       
});

bot.login(token);