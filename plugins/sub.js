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
description: data[i].title,
title: i + 1,
rowId: prefix + 'dsub ' + data[i].link
});
}
const sections = [{
title: "_[Result from Baiscopelk.com]_",
rows: srh
}]
const listMessage = {
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *SI SUB DOWNLOADER*

*📜 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from Baiscopelk.com 📲',
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


cmd({
    pattern: "slsub",
    react: "📃",
    alias: ["srisub"],
    desc: "Search Sinhala Subtitles  from Web Site",
    category: "download",
    use: '.slsub',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to download Subtitles*")
const duka = await subsearch(q)
const latest = await subdl(duka.results[0].link)
const maru =`*QUEEN-IZUMI-MD SINHALA SUB DOWNLOADER*

📊 *Movie Title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${duka.results[0].link}

`
  await conn.sendMessage(from,{image:{url: latest.results.img },caption: maru + "*Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*" },{quoted:mek })
  await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "slsubsearch",
    react: "🔎",
    desc: "Search All Subtitles  from Web Site",
    category: "search",
    use: '.technewsall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to Search Subtitles*")
const vid = await subsearch(q)
    let yt = '\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.results ) {
        yt += `📃 *${i.no} - ${i.title}*\n🔗 _Link : ${i.link}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg" },caption: yt + "*Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "subdlfromlink",
    react: "📃",
    desc: "Download subtitles from Web Sites",
    category: "download",
    use: '.subdlfromlink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ Please enter movie Link to download Subtitles*")
if(!q.includes('baiscope')) return reply('🚫 *Please enter Valid Movie url*')
 const latest = await subdl(q)
const maru =`*QUEEN-IZUMI-MD SL SUBTITLES DOWNLOADER*

📊 *Movie title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${q}

*Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ & ᴛᴀᴍɪꜱʜᴀ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
   await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

