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
    pattern: "apk",
    react: "📦",
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
for (var i = 0; i < data.length; i++)
const sections = [
     {
title: "_[Result from playstore.]_",
rows: [
	    {title: "1", rowId: prefix + 'dapk ${q}', description: 'DOWN APK 📁'},
	    {title: "2", rowId: prefix + + 'apkdetail ${q}', description: 'APK DETAILS ℹ️'} ,

	]
  }
]
const listMessage = {
text: `*📦📥QUEEN-IZUMI PLAYSTORE DOWNLOADER*

*✏️ ʀᴇꜱᴜᴀʟᴛ:* ${q}
*📚 ᴀᴘᴘ ɴᴀᴍᴇ:* ${data.name}
*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ):* ${data.size}

_*◯──────────────────────────────────◯*_`,
image: { url: data.icon},
footer: config.FOOTER,
title: 'Result from playstore. 📲',
buttonText: '```reply below number you want to get,```',
sections,
contextInfo: {
				
				externalAdReply: { 
					title: '🥽 𝗜𝗭𝗨𝗠𝗜𝗕𝗢𝗧 𝗠𝗗 V1🧜',
					body: 'ǫᴜᴇᴇɴ ɪᴢᴜᴍɪ ᴡɪᴛʜ ʙᴇꜱᴛ ꜰᴇᴀᴛᴜʀᴇꜱ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/85fe740b2385a55178500.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage,mek)
}
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
if (data.size.includes('GB')) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
if (data.size.includes('MB') && data.size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '*•ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ ᴀᴘᴋ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ•*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})
cmd({
    pattern: "apkdetail",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '🔎', key: msg.key }})
var msg = mek
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: msg } ) 
const data2 = await apkdl.download(q)
const data = data2
let listdata = `*📦🔎QUEEN-IZUMI PLAYSTORE SEARCH*

*✏️ ʀᴇꜱᴜᴀʟᴛ:* ${q}
*📚 ᴀᴘᴘ ɴᴀᴍᴇ:* ${data.name}

*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ):* ${data.size}

*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ:* ${data.lastup}

*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ:* ${data.package}

_*◯──────────────────────────────────◯*_`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: msg })
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})