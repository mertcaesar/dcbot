const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle("MURAT EREN YOUTUBE")
    .setThumbnail(
      "https://media.discordapp.net/attachments/773998338999058453/790319445381873684/standard.gif"
    )
    .setDescription(
      `



:earth_asia:  **Çeviri Komutları ! - Youtube Murat Eren**
:white_small_square:**!almanca** = türkçe almanca çeviri yapar
:white_small_square:**!ingilizce** = türkçe ingilizce çeviri yapar
:white_small_square:**!rusça** = türkçe rusça çeviri yapar
:white_small_square:**!fransızca** = türkçe almanca çeviri yapar
:white_small_square:**!yunanca** = türkçe yunanca çeviri yapar
:white_small_square:**!korece**=  türkçe korece çeviri yapar
:white_small_square:**!portekice** = türkçe portekizce çeviri yapar
:white_small_square:**!zulu** = türkçe zulu çeviri yapar
:white_small_square:**!arabic**=  türkçe arabic çeviri yapar
:white_small_square:**!tatar** = türkçe tatarca çeviri yapar

`
    )
    .addField(
      `» MURAT EREN YOUTUBE`,
      `**[Destek Sunucusu](https://discord.gg/GctysKUW)**`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  message.channel.send(mhelp).then;
  const sembed = new Discord.MessageEmbed();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
