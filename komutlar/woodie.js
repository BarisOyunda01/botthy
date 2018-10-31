const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**MİLKSHAKE**")
        .setImage("https://media.istockphoto.com/vectors/strawberry-milkshake-with-whipped-cream-drink-in-a-glass-with-a-straw-vector-id903613332")
        .setThumbnail("https://media.istockphoto.com/vectors/strawberry-milkshake-with-whipped-cream-drink-in-a-glass-with-a-straw-vector-id903613332")
        .setColor(0x00AE86)
        .addField("Lakabı", "The milkshake!", true)
        .addField("Yetenekleri", `
        *Efsane bir görünüşü vardır!
   *Tadı çok güzeldir
   `, true)
   .addField("Motto", `İç beniiii`, true)
   .addField("selam", "haha naber")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'milkshake', 
  description: 'Milkshake hakkında bilgi verir',
  usage: 'milkshake'
};
