const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');
var os = require('os')
var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Bot link ලබා දෙයි.'
else tmsg = "It gives bot link."


cmd({
    pattern: "sc",
    react: "👨‍💻",
    alias: ["script","repo"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
const buttons = [
  {buttonId: prefix + 'menu' , buttonText: {displayText: 'COMMANDS MENU'}, type: 1},
  {buttonId: prefix + 'ping' , buttonText: {displayText: 'QUEEN-IZUMI-MD SPEED'}, type: 1}
]
const buttonMessage = {
    image: {url: config.LOGO},
    caption: `*QUEEN IZUMI WHATSAPP USER BOT* 💫

                     *OUR MISSION*

🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot


🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier


💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.


⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.


👨‍💻 OWNER VAJIRA AND TIMASHA

🎡 *GITHUB:*  C O M I N G  S O O N

🪩 *OUR GROUP:* https://chat.whatsapp.com/D6w6Qy5yrhp7MmfNcprbO3

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 

*C O M I N G  S O O N*`,
    footer: config.FOOTER,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = [
    {buttonId: prefix + 'menu' , buttonText: {displayText: 'COMMANDS MENU'}, type: 1},
    {buttonId: prefix + 'ping' , buttonText: {displayText: 'BOT\'S SPEED'}, type: 1}
  ]
  const buttonMessage = {
      image: {url: config.LOGO},
      caption: config.ALIVE,
      footer: config.FOOTER,
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

