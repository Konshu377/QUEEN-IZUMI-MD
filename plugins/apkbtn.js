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
    pattern: "apk",
    react: '🖼️',
    desc: desc2,
    category: "download",
    use: '.img2 car',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]
 `

	 const sections = [
    {
	title: "",
	rows: [
	    
	    {title: "1", rowId: prefix + 'apk1 ' + q , description: '📥 Download your apk'},
            {title: "2", rowId: prefix + 'apkinfo ' + q , description: '📃 See apk info'} , 

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
    pattern: "apkinfo",
    use: '.song lelena',
    react: "🎧",
    desc: descs,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `┌───[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytdocs ' + q , description: 'Down song document'},
	    {title: "2", rowId: prefix + 'ytmp3 ' + q , description: 'Down song audio'} ,
            {title: "3", rowId: prefix + 'ytinfo ' + q , description: 'To see song info'} ,
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

`
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytdocs ' + q , description: 'Down song document'},
	    {title: "2", rowId: prefix + 'ytmp3 ' + q , description: 'Down song audio'} ,
            {title: "3", rowId: prefix + 'ytinfo ' + q , description: 'To see song info'} ,

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
const cap = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *APK I FORMATION*

*📚 Name :* ${data.name}
├──────────────────        
*📦 Developer :* ${data.package}
├──────────────────        
*⬆️ Last update :* ${data.lastup}
├──────────────────        
*📥 Size :* ${data.size}`

const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'ytdocs ' + anu.url , description: 'Down song document'},
	    {title: "2", rowId: prefix + 'ytmp3 ' + anu.url , description: 'Down song audio'} ,
            {title: "3", rowId: prefix + 'ytinfo ' + anu.url , description: 'To see song info'} ,

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
