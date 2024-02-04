const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var {subsearch , subdl }  = require('@sl-code-lords/si-subdl')

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "එය Baiscopelk වෙතින් සිංහල උපසිරැසි බාගත කරයි."
else urlneed = "It downloads sinhala subtitle from Baiscopelk."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"


cmd({
    pattern: "sub",
    react: "🎞️",
    alias: ["subtitle","sinhalasub","sisub","sinhalasubtitle"],
    desc: urlneed,
    category: "download",
    use: '.sub spiderman',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await subsearch(q)
const data = data2.results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND}, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
title: data[i].title,
description: '',
rowId: prefix + 'dsub ' + data[i].link
});
}
const sections = [{
title: "_[Result from Baiscopelk.com]_",
rows: srh
}]
const listMessage = {
text: `┌───[🍭Zero-Two🍭]

   *SI SUB DOWNLOADER*

*📜 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from Baiscopelk.com 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.listMessage(from, listMessage,mek)
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dsub",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need sub link...*' }, { quoted: mek } ) 
const dataq = await subdl(q)
let data = dataq.results
let listdata = `*📚 Title :* ${data.title.trim()}
*💼 Creater :* ${data.creater}`
await conn.sendMessage(from, { image: { url: data.img }, caption: listdata }, { quoted: mek })
let sendapk = await conn.sendMessage(from , { document : { url : data.dl_link  } , mimetype : 'application/zip' , fileName : data.title.trim() + '.' + 'zip',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})