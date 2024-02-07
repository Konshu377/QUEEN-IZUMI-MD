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
	    {title: "1", rowId: prefix + 'apk1 ' + q , description: 'ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ ᴀᴘᴋ'},
	    {title: "2", rowId: prefix + 'dapk ' + q , description: 'ꜱɪᴍɪʟᴇʀ ᴛᴏ ᴛʜᴀᴛ ᴀᴘᴋ'} ,
	    {title: "3", rowId: prefix + 'apkinfo ' + q , description: 'ᴀᴘᴋ ɪɴꜰᴏᴍᴀᴛɪᴏɴ'},
        
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
