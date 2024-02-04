const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "creators",
    react: "❣",
    desc: "Check bot online or no.",
    category: "owner",
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
  {buttonId: prefix + 'vajira' , buttonText: {displayText: 'ᴠᴀᴊɪʀᴀ ɪɴꜰᴏ'}, type: 1},
  {buttonId: prefix + 'timasha' , buttonText: {displayText: 'ᴛɪᴍᴀꜱʜᴀ ɪɴꜰᴏ'}, type: 1},
  {buttonId: prefix + 'danidu' , buttonText: {displayText: 'ᴅᴀɴɪᴅᴜ ɪɴꜰᴏ'}, type: 1},
  {buttonId: prefix + 'savidu' , buttonText: {displayText: 'ꜱᴀᴠɪᴅᴜ ɪɴꜰᴏ'}, type: 1}
]
const buttonMessage = {
    image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
    caption: `${monspace}👋 Hello There...I'm online now${monspace}

*👾 Im QUEEN-IZUMI-MD whatsapp bot*
    
📲 *Version:* ${require("../package.json").version}
⏱️ *Runtime:* ${runtime(process.uptime())}
🚉 *Platform:* ${hostname}
    
*🌻 Have A Nice Day 🌻*`,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = [
    {buttonId: prefix + 'vajira' , buttonText: {displayText: 'ᴠᴀᴊɪʀᴀ ɪɴꜰᴏ'}, type: 1},
    {buttonId: prefix + 'timasha' , buttonText: {displayText: 'ᴛɪᴍᴀꜱʜᴀ ɪɴꜰᴏ'}, type: 1},
    {buttonId: prefix + 'danidu' , buttonText: {displayText: 'ᴅᴀɴɪᴅᴜ ɪɴꜰᴏ'}, type: 1},
    {buttonId: prefix + 'savidu' , buttonText: {displayText: 'ꜱᴀᴠɪᴅᴜ ɪɴꜰᴏ'}, type: 1}
  ]
  const buttonMessage = {
      image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "vajira",
    react: "❣",
    desc: "Check bot online or no.",
    category: "",
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
const buttons = []
const buttonMessage = {
    image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
    caption: `${monspace}👋 Hello There...I'm online now${monspace}

*👾 Im Vajira Rathnayaka*
    
📍 *ᴍʏ ᴀɢᴇ* : 20+
📍 * ᴍʏ ɴᴜᴍʙᴇʀ* : https://wa.me/94766943622
📍 *ʏᴏᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ* : https://youtube.com/@gamingewingyt6216
      ⌛ *ꜱʜᴀʀᴇ...*
      ⌛ *ᴄᴏᴍᴍᴇɴᴛ...*
      ⌛ *ꜱᴜʙꜱᴄʀɪʙᴇ...*
      ⌛ *ʟɪᴋᴇ ᴠɪᴅᴇᴏꜱ...*
📍 *ꜰᴀᴄᴇʙᴏᴏᴋ ᴘʀᴏꜰɪʟᴇ* : https://www.facebook.com/WMRTECH?mibextid=ZbWKwL
    
*🌻 Have A Nice Day 🌻*`,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = []
  const buttonMessage = {
      image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "timasha",
    react: "❣",
    desc: "Check bot online or no.",
    category: "",
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
const buttons = []
const buttonMessage = {
    image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
    caption: `${monspace}👋 Hello There...I'm online now${monspace}

*👾 Im timasha*

📍 *ᴍʏ ᴀɢᴇ* : 19+
📍 * ᴍʏ ɴᴜᴍʙᴇʀ* : https://wa.me/+94715264791
📍 *ʏᴏᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ* : 
      ⌛ *ꜱʜᴀʀᴇ...*
      ⌛ *ᴄᴏᴍᴍᴇɴᴛ...*
      ⌛ *ꜱᴜʙꜱᴄʀɪʙᴇ...*
      ⌛ *ʟɪᴋᴇ ᴠɪᴅᴇᴏꜱ...*
📍 *ꜰᴀᴄᴇʙᴏᴏᴋ ᴘʀᴏꜰɪʟᴇ* : 
    
*🌻 Have A Nice Day 🌻*`,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = []
  const buttonMessage = {
      image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "danidu",
    react: "❣",
    desc: "Check bot online or no.",
    category: "",
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
const buttons = []
const buttonMessage = {
    image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
    caption: `${monspace}👋 Hello There...I'm online now${monspace}

*👾 Im Danidu nirmal*

📍 *ᴍʏ ᴀɢᴇ* : 16+
📍 * ᴍʏ ɴᴜᴍʙᴇʀ* : https://wa.me/94715322008
📍 *ʏᴏᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ* : https://youtube.com/@Troll_Hunter_08?si=cmKVCg-UmWKGGh2W
      ⌛ *ꜱʜᴀʀᴇ...*
      ⌛ *ᴄᴏᴍᴍᴇɴᴛ...*
      ⌛ *ꜱᴜʙꜱᴄʀɪʙᴇ...*
      ⌛ *ʟɪᴋᴇ ᴠɪᴅᴇᴏꜱ...*
📍 *ꜰᴀᴄᴇʙᴏᴏᴋ ᴘʀᴏꜰɪʟᴇ* : https://www.facebook.com/profile.php?id=61552371908269&mibextid=LQQJ4d
    
*🌻 Have A Nice Day 🌻*`,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = []
  const buttonMessage = {
      image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//---------------------------------------------------------------------------

cmd({
    pattern: "savidu",
    react: "❣",
    desc: "Check bot online or no.",
    category: "",
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
const buttons = []
const buttonMessage = {
    image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
    caption: `${monspace}👋 Hello There...I'm online now${monspace}

*👾 Im Savidu niroshan*

📍 *ᴍʏ ᴀɢᴇ* : 20+
📍 * ᴍʏ ɴᴜᴍʙᴇʀ* : https://wa.me/94740808886
📍 *ʏᴏᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ* : https://youtube.com/@savinduniroshan6871?si=RNqP7bb87KCqScDa
      ⌛ *ꜱʜᴀʀᴇ...*
      ⌛ *ᴄᴏᴍᴍᴇɴᴛ...*
      ⌛ *ꜱᴜʙꜱᴄʀɪʙᴇ...*
      ⌛ *ʟɪᴋᴇ ᴠɪᴅᴇᴏꜱ...*
📍 *ꜰᴀᴄᴇʙᴏᴏᴋ ᴘʀᴏꜰɪʟᴇ* : https://www.facebook.com/profile.php?id=61552371908269&mibextid=LQQJ4d
    
*🌻 Have A Nice Day 🌻*`,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = []
  const buttonMessage = {
      image: {url: `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg`},
      buttons: buttons,
      headerType: 4
  }
  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})
