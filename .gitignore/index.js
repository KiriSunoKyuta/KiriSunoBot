const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on("ready", async () => {
    console.log("Bot Online");
    bot.user.setStatus("online");
    setTimeout(() => {
        bot.user.setActivity("SyprineMaster", {type: 'WATCHING'} );
    }, 100)
});

bot.on("guildMemberAdd", member => {
    member.send(`Yoo, bienvenue sur le serveur ! Va lire le règlement dans #informations et clique sur la petite emote verte en dessous pour avoir accès au serveur ! 
Hâte de te voir parmi nous ${member}!`);
})



bot.login(process.env.TOKEN)
