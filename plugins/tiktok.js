const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { Tiktok } = require('../lib/tiktok')
function regtik(url) {
return url.includes('tiktok.com')
}

var desc =''
if(config.LANG === 'SI') desc = "Tiktok වෙතින් වීඩියෝ බාගත කරයි."
else desc = "Download videos from Facebook."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර Tiktok video url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me tiktok video url..*"


cmd({
    pattern: "tiktok",
    alias: ["ttdl"],
    react: '🏷️',
    desc: desc,
    category: "download",
    use: '.tiktok <Tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!regtik(q)) return await  reply(urlneed)
var l = ''
let tiktok = await fetchJson('https://api.sdbots.tech/tiktok?url=' + q)
if(tiktok.msg == 'OK') {
let data = tiktok
l = {
title: data.result.desc,
nowm: data.result.withoutWaterMarkVideo,
watermark: data.result.waterMarkVideo,
audio: data.result.music,
thumbnail: data.result.cover,
author: data.result.author
}
}
else {
let data = await Tiktok(q)
l = data
}


let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

*TIKTOK DOWNLOADER*

*📃 Title:* ${l.title}
*✍🏼 Author:* ${l.author}`

let sections = [
       {
	title: "",
	rows: [
    {title: "1", rowId: `${prefix}dvideo ${l.nowm}`, description: 'video without Watermark'},
    {title: "2", rowId: `${prefix}dvideo ${l.watermark}`, description: 'Video with Watermark'},
    {title: "3", rowId: `${prefix}dau ${l.audio}`, description: 'Download audio'},
	]
    } 
]
const listMessage = {
  image: { url: l.thumbnail },
  caption: dat,
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

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
  pattern: "dau",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: { url: q }, mimetype: 'audio/mpeg', fileName: 'TikTok Audio' + '.mp3',caption: config.FOOTER }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
