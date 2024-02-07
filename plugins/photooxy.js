const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var Photooxy = require('@sl-code-lords/photooxy')
var photooxy = new Photooxy()
const fileType = require("file-type");
const fs = require('fs');
var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර නමක් දෙන්න !```"
else imgmsg = "```Please give me a name !```"

var imgmsg2 =''
if(config.LANG === 'SI') imgmsg2 = "*උදා: .photooxy2 vihanga+ashinshana*"
else imgmsg2 = "*Ex: .photooxy2 vihanga+ashinshana*"

var desc =''
if(config.LANG === 'SI') desc = "එය වචන 1කින් photooxy logos නිර්මාණය කරයි.."
else desc = "It creates photooxy logos using 1 word.."

var desc2 =''
if(config.LANG === 'SI') desc2 = "එය වචන 2කින් photooxy logos නිර්මාණය කරයි.."
else desc2 = "It creates photooxy logos using 2 word.."

var imgmsgeew =''
if(config.LANG === 'SI') imgmsgeew = '*ඡායාරූපයකට mention දෙන්න !*'
else imgmsgeew = "*Reply to a photo !*"

var errt =''
if(config.LANG === 'SI') errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*"
else errt = "*I cant create this logo :(*"

cmd({
    pattern: "photooxy1",
    react: '💫',
    alias: ["logo3","photooxy"],
    desc: desc,
    category: "logo",
    use: '.photooxy1 vihanga yt',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
if(data[i].text === 1 && !data[i].images){
srh.push({
description: data[i].title,
title: i + 1,
rowId: prefix + 'dlogo3 ' + q + '+' + data[i].url
});
}
}
const sections = [{
title: "Result from photooxy. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *PHOTOOXY LOGO 01*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from photooxy. 📲',
buttonText: 'Select Logo 💫',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "photooxy2",
    react: '🎡',
    alias: ["logo4"],
    desc: desc2,
    category: "logo",
    use: '.photooxy2 vihanga+ashinshana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q.includes('+')) return await reply(imgmsg2)
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
if(data[i].text === 2 && !data[i].images){
srh.push({
description: data[i].title,
title: i + 1,
rowId: prefix + 'dlogo4 ' + q + '+' + data[i].url
});
}
}
const sections = [{
title: "Result from photooxy. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *PHOTOOXY LOGO 02*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from photooxy. 📲',
buttonText: 'Select Logo 🎡',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "photooxy3",
    react: '🎡',
    alias: ["logo5"],
    desc: desc2,
    category: "logo",
    use: '.photooxy3 <reply image',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
if ((m.type === 'imageMessage') || isQuotedImage) {
var namePng = getRandom('');
let buff = isQuotedImage ? await m.quoted.download(namePng) : await m.download(namePng)
let type = await fileType.fromBuffer(buff);
await fs.promises.writeFile("./" + type.ext, buff);
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
if(data[i].text === 0 && data[i].images.length === 1){
srh.push({
description: data[i].title,
title: i + 1,
rowId: prefix + 'dlogo5 ' + "./" + type.ext + '+' + data[i].url
});
}
}
const sections = [{
title: "Result from photooxy. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *PHOTOOXY LOGO 03*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from photooxy. 📲',
buttonText: 'Select Logo 🎡',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})
} else return await reply(imgmsgeew)
} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "dlogo3",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    var image1 = await photooxy.create({
        url : link,
        text : [`${name}`]
        })
      var img1_buf = await photooxy.image_to_buffer(image1.url)
    await conn.sendMessage(from, { image: img1_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo4",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,name2,link] = q.split('+')
    var image2 = await photooxy.create({
        url : link,
        text : [`${name}`,`${name2}`]
        })
      var img2_buf = await photooxy.image_to_buffer(image2.url)
    await conn.sendMessage(from, { image: img2_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo5",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    var image2 = await photooxy.create({
        url : link,
        images: [`${name}`]
        })
      var img2_buf = await photooxy.image_to_buffer(image2.url)
    await conn.sendMessage(from, { image: img2_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})
