const config = require('../config')
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core');
const api = require("caliph-api");
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
function ytreg(url) {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    return ytIdRegex.test(url);
}
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, getsize} = require('../lib/functions')
const dl2 = require('inrl-dl')
var descv =''
if(config.LANG === 'SI') descv = "Youtube වෙතින් videos බාගත කරයි."
else descv = "Download videos from Youtube."

var descs =''
if(config.LANG === 'SI') descs = "Youtube වෙතින් songs බාගත කරයි."
else descs = "Download songs from Youtube."

var descyt =''
if(config.LANG === 'SI') descyt = "Youtube වෙතින් video සහ songs බාගත කරයි."
else descyt = "Download videos and songs from Youtube."

var descsh =''
if(config.LANG === 'SI') descsh = "Youtube search බාගත කරයි."
else descsh = "Search and get details from youtube."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me youtube url..*"

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

var sizetoo =''
if(config.LANG === 'SI') sizetoo = "_This file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*"
else sizetoo =  "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*"


cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts lelena',
    react: "🔎",
    desc: descsh,
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '*Error !!*' }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
})

//---------------------------------------------------------------------------


cmd({
    pattern: "yt",
    alias: ["play"],
    use: '.yt lelena',
    react: "📽️",
    desc: descyt,
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'SONG' , description: 'selectaud'},
	    {title: "2", rowId: prefix + 'VIDEO' , description: 'selectvid'} ,

	]
    } 
]
const listMessage = {
  caption: `🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚

   *YT DOWNLOADER*

╏🎀 *Title:* ${anu.title}
⦁
╏🌐 *Duration:* ${anu.timestamp}
⦁
╏👀 *Viewers:* ${anu.views}
⦁
╏⬆️ *Uploaded:* ${anu.ago}
⦁
╏👽 *Author:* ${anu.author.name}
⦁
╏📡 *Url* : ${anu.url}`,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'SONG' , description: 'selectaud'},
	    {title: "2", rowId: prefix + 'VIDEO' , description: 'selectvid'} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//---------------------------------------------------------------------------


cmd({
    pattern: "video",
    alias: ["ytvideo"],
    use: '.video lelena',
    react: "📽️",
    desc: descv,
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + '240p' , description: '240p Quality Song'},
	    {title: "2", rowId: prefix + '360p' , description: '360p Quality Song'} ,
            {title: "3", rowId: prefix + '480p' , description: '480p Quality Song'},
	    {title: "4", rowId: prefix + '720p' , description: '720p Quality Song'} ,
            {title: "5", rowId: prefix + '1080p' , description: '1080p Quality Song'},
	    {title: "6", rowId: prefix + '1440p' , description: '1440p Quality Song'} ,
            {title: "7", rowId: prefix + '2160p' , description: '2160p Quality Song'},
	    {title: "8", rowId: prefix + 'ytdocv' , description: 'Document type Song'} ,

	]
    } 
]
const listMessage = {
  caption: `🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚

   *YT DOWNLOADER*

╏🎀 *Title:* ${anu.title}
⦁
╏🌐 *Duration:* ${anu.timestamp}
⦁
╏👀 *Viewers:* ${anu.views}
⦁
╏⬆️ *Uploaded:* ${anu.ago}
⦁
╏👽 *Author:* ${anu.author.name}
⦁
╏📡 *Url* : ${anu.url}`,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + '240p' , description: '240p Quality Song'},
	    {title: "2", rowId: prefix + '360p' , description: '360p Quality Song'} ,
            {title: "3", rowId: prefix + '480p' , description: '480p Quality Song'},
	    {title: "4", rowId: prefix + '720p' , description: '720p Quality Song'} ,
            {title: "5", rowId: prefix + '1080p' , description: '1080p Quality Song'},
	    {title: "6", rowId: prefix + '1440p' , description: '1440p Quality Song'} ,
            {title: "7", rowId: prefix + '2160p' , description: '2160p Quality Song'},
	    {title: "8", rowId: prefix + 'ytdocv' , description: 'Document type Song'} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})



//---------------------------------------------------------------------------

cmd({
    pattern: "song",
    alias: ["ytsong"],
    use: '.song lelena',
    react: "🎧",
    desc: descs,
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytmp3' , description: 'Audio type Song'},
	    {title: "2", rowId: prefix + 'ytdocs' , description: 'Document type Song'} ,
            {title: "3", rowId: prefix + 'ytinfo' , description: 'To see Song info'} ,

	]
    } 
]
const listMessage = {
  caption: `🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚

   *YT DOWNLOADER*

╏🎀 *Title:* ${anu.title}
⦁
╏🌐 *Duration:* ${anu.timestamp}
⦁
╏👀 *Viewers:* ${anu.views}
⦁
╏⬆️ *Uploaded:* ${anu.ago}
⦁
╏👽 *Author:* ${anu.author.name}
⦁
╏📡 *Url* : ${anu.url}`,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytmp3' , description: 'Audio type Song'},
	    {title: "2", rowId: prefix + 'ytdocs' , description: 'Document type Song'} ,
            {title: "3", rowId: prefix + 'ytinfo' , description: 'To see Song info'} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})



//---------------------------------------------------------------------------

cmd({
  alias: ["selectaud"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

  *SELECT SONG TYPE*`
const buttons = [
  {buttonId: prefix + 'ytdocs ' + q, buttonText: {displayText: 'Document type Song'}, type: 1},
  {buttonId: prefix + 'ytmp3 ' + q, buttonText: {displayText: 'Audio type Song'}, type: 1},
  {buttonId: prefix + 'ytinfo ' + q, buttonText: {displayText: 'To see Song info'}, type: 1}
]
  const buttonMessage = {
      caption: dat,
      footer: config.FOOTER,
      buttons: buttons,
      headerType: 1
  }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  alias: ["selectvid"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

  *SELECT VIDEO QUALITY*`
const buttons = [
  {buttonId: prefix + '240p ' + q, buttonText: {displayText: '240p Quality Video'}, type: 1},
  {buttonId: prefix + '360p ' + q, buttonText: {displayText: '360p Quality Video'}, type: 1},
  {buttonId: prefix + '480p ' + q, buttonText: {displayText: '480p Quality Video'}, type: 1},
  {buttonId: prefix + '720p ' + q, buttonText: {displayText: '720p Quality Video'}, type: 1},
  {buttonId: prefix + '1080p ' + q, buttonText: {displayText: '1080p Quality Video'}, type: 1},
  {buttonId: prefix + '1440p ' + q, buttonText: {displayText: '1440p Quality Video'}, type: 1},
  {buttonId: prefix + '2160p ' + q, buttonText: {displayText: '2160p Quality Video'}, type: 1},
  {buttonId: prefix + 'ytdocv ' + q, buttonText: {displayText: 'Document type Video'}, type: 1}
]
  const buttonMessage = {
      caption: dat,
      footer: config.FOOTER,
      buttons: buttons,
      headerType: 1
  }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//===================================================================================================

cmd({
  pattern: "240p",
  use: '.240p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['240p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['240p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "360p",
  use: '.360p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['360p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['360p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "480p",
  use: '.480p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['480p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['480p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "720p",
    use: '.720p <video url>',
    react: "📽️",
    desc: "Download yt videos.",
    category: "",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['720p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['720p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "1080p",
  use: '.1080p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['1080p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['1080p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "1440p",
  use: '.1440p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['1440p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['1440p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "2160p",
  use: '.2160p <video url>',
  react: "📽️",
  desc: "Download yt videos.",
  category: "",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['2160p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['2160p'].download() },caption: config.FOOTER}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "ytmp3",
  use: '.ytmp3 <yt url>',
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
let sendaE =  await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName:  `${titleYt}.mp3` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo)
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "ytmp4",
  use: '.ytmp3 <yt url>',
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
let sendaE =  await conn.sendMessage(from, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName:  `${titleYt}.mp3` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo)
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "ytdocs",
  use: '.ytdoc <yt url>',
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
  let senda =  await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName: titleYt + '.mp3',caption: config.FOOTER  }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: '🎼', key: senda.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo);
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
  pattern: "ytdocv",
  use: '.ytdoc <yt url>',
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp4");
const stream = ytdl(q, {
      filter: (info) => info.itag == 22 || info.itag == 18,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
  let senda =  await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'document/mp4', fileName: titleYt + '.mp4',caption: config.FOOTER  }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: '🎼', key: senda.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo);
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
reply(N_FOUND)
l(e)
}
})

//---------------------------------------------------------------------------

