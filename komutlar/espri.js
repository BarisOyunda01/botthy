const Discord = require('discord.js');

const cevaplar = [
    "Bir serviste gelinler diğer servistede kayınvalideler varmış. Kayınvalidelerin olduğu servis kaza yapmış, gelinlerin hepsi oynayıp dans ederken arkada bir gelin ağlıyormuş. Neden ağlıyorsun demiş bir gelin, kayınvalidem o serviste değildi o yüzden ağlıyorum demiş.",
    "Ben traktör sürerim, Leanardoda vinci",
	"Bir adamı hıçkırık tutmuş öksürük dövmüş",
	"Bir adam varmış ölmüş",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'espri', 
  description: 'Milkshake 8ball sorularınızı cevaplar',
  usage: 'espri'
};
