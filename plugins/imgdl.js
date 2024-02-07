const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const gis = require('async-g-i-s');
const {unsplash, pixabay} = require("@sl-code-lords/image-library")

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

var desc =''
if(config.LANG === 'SI') desc = "ගූගල් හි අදාළ පින්තූර සෙවීම."
else desc = "Search for related pics on Google."

var desc2 =''
if(config.LANG === 'SI') desc2 = "unsplash.com හි අදාළ පින්තූර සෙවීම."
else desc2 = "Search for related pics on unsplash.com."

var desc3 =''
if(config.LANG === 'SI') desc3 = "pixabay.com හි අදාළ පින්තූර සෙවීම."
else desc3 = "Search for related pics on pixabay.com."

var desc4 =''
if(config.LANG === 'SI') desc4 = "bing හි අදාළ පින්තූර සෙවීම."
else desc4 = "Searche for related pics on bing."

var errt =''
if(config.LANG === 'SI') errt = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else errt = "*I couldn't find anything :(*"



cmd({
    pattern: "img",
    react: '🖼️',
    desc: desc2,
    category: "download",
    use: '.img2 car',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

  *SELECT SONG TYPE*`

	 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'img1 ' + q , description: 'Image list 1'},
	    {title: "2", rowId: prefix + 'img2 ' + q , description: 'Image list 2'} ,
	    {title: "3", rowId: prefix + 'img3 ' + q , description: 'Image list 3'},
            {title: "4", rowId: prefix + 'img4 ' + q , description: 'Image list 4'} , 

	]
    } 
]
	const listMessage = {
 text : dat ,
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
 
return await conn.replyList(from, listMessage ,{ quoted : mek }) 
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
    pattern: "img1",
    react: '🖼️',
    desc: desc2,
    category: "",
    use: '.img2 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
const results = await unsplash.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
srh.push({
description: 'Image number: ' + nombor++ ,
title: i + 1,
rowId: prefix + 'dimg ' + data.result[i]
});
}
const sections = [{
title: "Result from unsplash.com. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *IMG DOWNLOADER 02*

*🖼️ Image Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from unsplash.com. 📲',
buttonText: 'Select Image',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "img2",
    react: '🖼️',
    desc: desc3,
    category: "",
    use: '.img3 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
const results = await pixabay.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
srh.push({
description: 'Image number: ' + nombor++ ,
title: i + 1,
rowId: prefix + 'dimg ' + data.result[i]
});
}
const sections = [{
title: "Result from pixabay.com. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *IMG DOWNLOADER 03*

*🖼️ Image Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from pixabay.com. 📲',
buttonText: 'Select Image',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "img3",
    react: '🖼️',
    desc: desc4,
    category: "",
    use: '.img4 car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
const results = await fetchJson('https://api.akuari.my.id/search/bingimage?query=' + q)
let data = results.hasil
if (data.results.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
let nombor = 1
for (var i = 0; i < data.results.length; i++) {
srh.push({
description: data.results[i].title ,
title: i + 1,
rowId: prefix + 'dimg ' + data.results[i].direct
});
}
const sections = [{
title: "Result from bing 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *IMG DOWNLOADER 04*

*🖼️ Image Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from bing 📲',
buttonText: 'Select Image',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "img4",
    react: '🖼️',
    desc: desc,
    category: "download",
    use: '.img car',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
const results = await gis(q);
let data = results.slice(0, 100)
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
let nombor = 1
for (var i = 0; i < data.length; i++) {
srh.push({
description: 'Image number: ' + nombor++ ,
title: i + 1,
rowId: prefix + 'dimg ' + data[i].url
});
}
const sections = [{
title: "Result from google. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *IMG DOWNLOADER 01*

*🖼️ Image Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from google. 📲',
buttonText: 'Select Image',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "dimg",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
    await conn.sendMessage(from, { image: { url: q }, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})
