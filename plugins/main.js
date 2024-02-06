const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "alive",
    react: "👨‍💻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'QUEEN-IZUMI-MD SPEED'},

	]
    } 
]
const listMessage = {
  caption: `${monspace}👋 Hello ${pushname} I'm alive now${monspace}
    
*🚀Version:* ${require("../package.json").version}
*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🕒Runtime:* ${runtime(process.uptime())}
*📍Platform:* ${hostname}

🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻`,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🥽 𝗔𝗤𝗨𝗔𝗕𝗢𝗧 𝗠𝗗 V2💦',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/85fe740b2385a55178500.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'QUEEN-IZUMI-MD SPEED'} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🥽 𝗔𝗤𝗨𝗔𝗕𝗢𝗧 𝗠𝗗 V2💦',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/85fe740b2385a55178500.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To QUEEN-IZUMI-MD!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edite(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
  pattern: "menu",
  react: "👨‍💻",
  alias: ["panel","list","commands"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
const buttons = [
{buttonId: prefix + 'downmenu' , buttonText: {displayText: 'ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'searchmenu' , buttonText: {displayText: 'ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'convertmenu' , buttonText: {displayText: 'ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'logomenu' , buttonText: {displayText: 'ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'ownermenu' , buttonText: {displayText: 'ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'adminmenu' , buttonText: {displayText: 'ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1},
{buttonId: prefix + 'othermenu' , buttonText: {displayText: 'ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ'}, type: 1}
]
const buttonMessage = {
  image: {url: config.LOGO},
  caption: `${monspace}👋 Hello ${pushname}${monspace}

*👾 QUEEN-IZUMI-MD commands menu...*
  
 *🚀Version:* ${require("../package.json").version}
 *⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
 *🕒Runtime:* ${runtime(process.uptime())}
 *📍Platform:* ${hostname}`,
  footer: config.FOOTER,
  buttons: buttons,
  headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage, mek)
} catch (e) {
reply('*Error !!*')
l(e)
}
})
