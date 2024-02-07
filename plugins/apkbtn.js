const config = require('../config')
const { cmd, commands } = require('../command')
var os = require('os')

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Bot link ලබා දෙයි.'
else tmsg = "It gives bot link."


cmd({
    pattern: "apk",
    use: '.apk whatsapp',
    react: "🎧",
    desc: descs,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `┌───[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

  *SELECT TYPE*`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'apk1 ' + q , description: 'ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ'},
            {title: "3", rowId: prefix + 'apkinfo ' + q , description: 'ꜱᴇᴇ ᴀᴘᴋ ɪɴꜰᴏ'} ,
	]
    } 
]
const listMessage = {
  text: dat,
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
}
if(ytreg(q)){let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

*SELECT SONG TYPE*`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'apk1 ' + q , description: 'ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ'},
            {title: "3", rowId: prefix + 'apkinfo ' + q , description: 'ꜱᴇᴇ ᴀᴘᴋ ɪɴꜰᴏ'} ,

	]
    } 
]
const listMessage = {
  text: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections }	

	     
return await conn.replyList(from, listMessage ,{ quoted : mek }) 

}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'apk1 ' + anu.url , description: 'ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ'},
            {title: "3", rowId: prefix + 'apkinfo ' + anu.url , description: 'ꜱᴇᴇ ᴀᴘᴋ ɪɴꜰᴏ'} ,

	]
    } 
]
const listMessage = {
  image: {url: anu.thumbnail},
  caption: cap,
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
