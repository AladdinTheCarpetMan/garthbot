    const Discord = require("discord.js");

var bot = new Discord.Client();

const config = require("./config.json");

const token = config.token

const prefix = config.prefix

bot.on("ready", async () => {
   console.log("Ready");

bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
}).catch(err => {
    console.log(err.stack); 
});

await bot.on("guildDelete" , guild=>{
   console.log(`I have left ${guild.name} at ${new Date()}`);
});

await bot.on("guildCreate" , guild => {
	console.log(`I have joined ${guild.name} at ${new Date()}`);
    guild.channels.find("name", "general").send(`I have joined ${guild.name} at ${new Date()}`);
});

await bot.generateInvite("[ADMINISTRATOR]");
console.log("Here's an invite for ya!");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    if(message.content.startsWith(prefix + "ping")) {
       message.reply(`pong \`${Date.now() - message.createdTimestamp} ms\``);    
    } else

    if(message.content.startsWith(prefix + "hello")) {
        message.reply("Oh hai Mark!");     
    } else 
    
    if(message.content.startsWith(prefix + "Ash")) {
       message.channel.send("Bullet");
    } else

    if(message.content.startsWith(prefix + "lisa")) {
        message.channel.send("You're tearing me apart Lisa!");
     } else

     if(message.content.startsWith(prefix + "guilt")) {
        message.channel.send("https://goo.gl/tLQYX8");
     } else

     if(message.content.startsWith(prefix + "frens")) {
        message.channel.send("https://goo.gl/wFXhzW");
     } else

     if(message.content.startsWith(prefix + "sanic")) {
        message.reply("Go, go, go, go, go, go, go, go, go, go. Gotta go fester, fester, fester, fester, fester! Movin' at speed of sound (make tracks). Quickest hedgehag around. Got ourselves a situation, stuck in a new location. Without any explanation... no time for relaxation! Don't blink, don't think... just go-go-go-go-g-g-g-g-go-go! Sanic, he's on the run! Sanic, he's number one. Sanic, he's comin' next! So watch out... For Sanic X! So... (Sanic) nic... (Sanic) X. Gotta go fester! Gotta go fest! Gotta go fester, fester, fester, fester. Sanic X!");
     } else

     if(message.content.startsWith(prefix + "Nsync")) {
         message.reply("Baby bye :wave: , bye :wave: , bye :wave: !");
     }
    
});

bot.login(token);