const Eris = require("eris");
// Replace BOT_TOKEN with your bot account's token
var bot = new Eris.CommandClient("MjQ5MDA1NzIwODc4NTc5NzEy.CxDoQw.yNscP7ESf2MPcuVPaI0PdQit0n4", {}, {
/*var bot = new Eris.CommandClient("MjQ4ODU4OTk5ODk2ODAxMjgx.CxAGbw.0Sdl5rT-sbHeYk0KQTow44vi22E", {}, {*/
    defaultHelpCommand: Boolean(false),
    description: "A Kawaii Bot",
    owner: "SniparsZach",
    prefix: "--",
});

/*I had to restate prefix because the echo command finds the prefix but not any of the o*/
var prefix = "--";

/*Set the game status*/
var game = {
    name: "--help for more!"
  };

/*Onload commands*/
bot.on("ready", () => {
    console.log("[Status] Bot Online");
    bot.editStatus(null, game);
});


/*bot.editStatus(null, {name: "--help for more!"})*/

/*Help Command*/
bot.on("messageCreate", (msg) => {
    if(msg.content === (prefix + "help")){
        console.log("[Command] Help");
        bot.createMessage(msg.channel.id, "```Markdown\n#Help is on the way!```\nhttp://i.imgur.com/6SPd52A.gif");
        bot.createMessage(msg.channel.id, "```Markdown\n#Prefix for requesting commands is '--'\n\n[ping // pong] - Check if I am running\n[echo] - Echoooooo\n[mom?] - Who's my mom?\n[math?] - Can I do math?\n[who made you?] - Who coded me?\n[food?] - Do you want food?\n[love?] - Who do I love...?\n[stressed?] - Is Smol_Banana stressed?\n\n#Note\nI am case sensitive!\nMade with Eris```");
    }
})


/*Main Commands*/
bot.on("messageCreate", (msg) => {
   if(msg.content === prefix + "mom?"){
       console.log("[Command] Mom?")
       if(msg.author.id == "235979265168900100") {
         console.log(">> [Comm] Mom requested")
         bot.createMessage(msg.channel.id, "<@235979265168900100>\n Hi mommy! ≧◡≦\nhttp://i.imgur.com/GCyB9b4.png")
       }
       else{
         console.log(">> [Comm] Some normie requested")
         bot.createMessage(msg.channel.id, (msg.author.id + ", " + "you aren't my mom!\n<@235979265168900100> is mommy!\nhttp://i.imgur.com/XLEPlph.gif"))
       }
   }
   else if(msg.content === prefix + "math?") {
     console.log("[Command] Math?")
       if(msg.author.id == "235979265168900100"){
         console.log(">> [Comm] Mom requested!");
         bot.createMessage(msg.channel.id, "http://i.imgur.com/E5Uh687.gif")
         bot.createMessage(msg.channel.id, "<@235979265168900100>\nMom... I don't know math...")
       }
       else{
         bot.createMessage(msg.channel.id, "http://i.imgur.com/v4H4lOh.gif");
         bot.createMessage(msg.channel.id, "But... but... I don't know math....");
       }
   }
   else if(msg.content === prefix + "who made you?") {
     console.log("[Command] Who made you?");
     if(msg.author.id == "190156160379256833"){
       console.log(">> [Comm] Creator requested")
       bot.createMessage(msg.channel.id, "You did bitch! <@190156160379256833>\nStop showing off!");
     }
     else{
       console.log(">> [Comm] Not the creator")
       bot.createMessage(msg.channel.id, "http://i.imgur.com/s4V10Kn.jpg");
       bot.createMessage(msg.channel.id, "This bitch <@190156160379256833> made me.");
     }
   }
   else if(msg.content === prefix + "food?") {
     console.log("[Command] Food?");
     if(msg.author.id == "235979265168900100"){
       console.log(">> [Comm] Mom requested!");
       bot.createMessage(msg.channel.id, "http://i.imgur.com/yS34FeA.gif");
       bot.createMessage(msg.channel.id, ("Here's your food mom! <@235979265168900100>"));
     }
     else{
       console.log(">> [Comm] Normy requested");
       bot.createMessage(msg.channel.id, "http://i.imgur.com/yS34FeA.gif");
       bot.createMessage(msg.channel.id, (msg.author.mention + " " + "heres your food..."));
     }
   }
   else if(msg.content === prefix + "love?") {
      console.log("[Command] Love?")
      if(msg.author.id == "235979265168900100" || msg.author.id == "190156160379256833") {
        console.log(">> [Comm] Message triggered by registered user")
        bot.createMessage(msg.channel.id, "http://i.imgur.com/yx8cg7v.gif");
        bot.createMessage(msg.channel.id, (msg.author.mention + " " + "I love you!"));
      }
      else {
        console.log(">> [Comm] Message triggered by unregistered user")
        bot.createMessage(msg.channel.id, "http://i.imgur.com/bolFNFU.gif");
        bot.createMessage(msg.channel.id, (msg.author.mention + " " + "not you, I love <@235979265168900100> and <@190156160379256833>."))
      }
   }
   else if(msg.content === prefix + "stressed?") {
     console.log("[Command] Stressed?")
     if(msg.author.id == "235979265168900100"){
       console.log(">> [Comm] Mom requested")
       bot.createMessage(msg.channel.id, "http://i.imgur.com/OjhX6Rk.gif")
       bot.createMessage(msg.channel.id, "<@235979265168900100> AHHHHHHHHHHHHHHHHH")
     }
     else{
       console.log(">> [Comm] Normie requested")
       bot.createMessage(msg.channel.id, "http://i.imgur.com/OjhX6Rk.gif")
       bot.createMessage(msg.channel.id, "YES!")
     }
   }
});

/*Ping Pong*/
bot.on("messageCreate", (msg) => {
    if (msg.content === prefix + "ping") {
        console.log("[Command] Ping")
        bot.createMessage(msg.channel.id,"Pong!");
    }
    else if (msg.content === prefix + "pong") {
        console.log("[Command] Pong")
        bot.createMessage(msg.channel.id, "Ping!")
    }
})

/*Echo*/
bot.registerCommand("echo", (msg, args) => { // Make an echo command
    if(args.length === 0) { // If the user just typed "!echo", say "Invalid input"
        console.log("[Command] Echo - Invalid Input");
        return "Invalid input";
    }
    var text = args.join(" "); // Make a string of the text after the command label
    console.log("[Command] Echo - Valid Input");
    console.log(">> [Comm] Input:" + " " + text);
    return text; // Return the generated string
});

bot.connect();
