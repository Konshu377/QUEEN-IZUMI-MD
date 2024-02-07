const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var TextPro = require('@sl-code-lords/text-pro-me')
var text_pro = new TextPro()

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර නමක් දෙන්න !```"
else imgmsg = "```Please give me a name !```"

var imgmsg2 =''
if(config.LANG === 'SI') imgmsg2 = "*උදා: .textpro2 vihanga+ashinshana*"
else imgmsg2 = "*Ex: .textpro2 vihanga+ashinshana*"

var desc =''
if(config.LANG === 'SI') desc = "එය වචන 1කින් textpro logos නිර්මාණය කරයි.."
else desc = "It creates textpro logos using 1 word.."

var desc2 =''
if(config.LANG === 'SI') desc2 = "එය වචන 2කින් textpro logos නිර්මාණය කරයි.."
else desc2 = "It creates textpro logos using 2 word.."

var errt =''
if(config.LANG === 'SI') errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*"
else errt = "*I cant create this logo :(*"

cmd({
    pattern: "textpro1",
    react: '🎡',
    alias: ["logo","textpro"],
    desc: desc,
    category: "logo",
    use: '.textpro1 vihanga yt',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
const results = await text_pro.get_url_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
if(!data[i].double_text && !data[i].need_image){
srh.push({
description: data[i].title,
title: i + 1,
rowId: prefix + 'dlogo ' + q + '+' + data[i].url
});
}
}
const sections = [{
title: "Result from textpro. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *TEXTPRO LOGO 01*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from textpro. 📲',
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
    pattern: "textpro2",
    react: '🎡',
    alias: ["logo2"],
    desc: desc2,
    category: "logo",
    use: '.textpro2 vihanga+ashinshana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q.includes('+')) return await reply(imgmsg2)
const results = await text_pro.get_url_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
if(data[i].double_text && !data[i].need_image){
srh.push({
description: data[i].title,
title: i + 1,
rowId: prefix + 'dlogo2 ' + q + '+' + data[i].url
});
}
}
const sections = [{
title: "Result from textpro. 📲",
rows: srh
}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *TEXTPRO LOGO 02*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from textpro. 📲',
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
    pattern: "dlogo",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    var image1 = await text_pro.one_text_create(
        link,
        name
        )
    var img1_buf = await text_pro.image_to_buffer(image1.url)
    await conn.sendMessage(from, { image: img1_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo2",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,name2,link] = q.split('+')
    var image2 = await text_pro.double_text_create(
        link,
        name,
        name2
        )
    var img2_buf = await text_pro.image_to_buffer(image2.url)
    await conn.sendMessage(from, { image: img2_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})
