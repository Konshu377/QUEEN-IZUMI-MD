const config = require('../config')
const { cmd, commands } = require('../command')
var os = require('os')

cmd({
    pattern: "test",
    react: "👨‍💻",
    alias: [] ,
    desc: "",
    category: "main",
    use: '',
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
	    {title: "2", rowId: prefix + 'ping' , description: 'QUEEN-IZUMI-MD SPEED'} ,

	]
    } 
]
const listMessage = {
  caption: `test`,
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
