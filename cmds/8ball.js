const Discord = require('discord.js')
const fs = require('fs')

var fortunes = [
  ":8ball: | Yas !",
  ":8ball: | Hmmm let me think..",
  ":8ball: | Maybe",
  ":8ball: | possibly",
  ":8ball: | Nope !",
  ":8ball: | Never ~"
];

module.exports.run = async (bot, message, args) => {
 if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.sendMessage(":8ball: How to use, type: #8ball and your question after")
         break;
}
module.exports.help = {
    name: "8ball"
};
