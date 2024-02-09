const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const apkdl = require('../lib/apkdl')

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "එය playstore වෙතින් apps බාගත කරයි."
else urlneed = "It downloads apps from playstore."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

cmd({
    pattern: "apk1",
    react: "📱",
    alias: ["findapk","playstore"],
    desc: urlneed,
    category: "download",
    use: '.apk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const data = data2
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
description: data[i].name,
title: i + 1,
rowId: prefix + 'dapk ' + data[i].id
});
}
const sections = [{
title: "_[Result from playstore.]_",
rows: srh
}]
const listMessage = {
text: `┌───[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *APK DOWNLOADER*

*📱 Apk Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from playstore. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dapk",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `*📚 Name :* ${data.name}        
*📦 Developer :* ${data.package}        
*⬆️ Last update :* ${data.lastup}        
*📥 Size :* ${data.size}
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
if (data.size.includes('GB')) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
if (data.size.includes('MB') && data.size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "apkinfo",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `*📚 Name :* ${data.name}
├──────────────────        
*📦 Developer :* ${data.package}
├──────────────────        
*⬆️ Last update :* ${data.lastup}
├──────────────────        
*📥 Size :* ${data.size}
├──────────────────        
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*📃 ʜᴇʀᴇ ʏᴏᴜʀ ᴀᴘᴋ ɪɴꜰᴏ 📃*')
  l(e)
}
})
