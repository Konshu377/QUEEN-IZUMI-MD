const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")

var tesadtag =''
if(config.LANG === 'SI') tesadtag = '*මට settings update කිරීමට text එකක් දෙන්න. !*'
else tesadtag = '*Give me text to update settings !*'

var desc1 = ''
if(config.LANG === 'SI') desc1 = "එය groups settings fetures යාවත්කාලීන කරයි."
else desc1 = "It updates groups setting fetures."

var desc2 = ''
if(config.LANG === 'SI') desc2 ="එය bot\'s settings යාවත්කාලීන කරයි."
else desc2 = "It updates එය bot\'s  setting."

var desc3 = ''
if(config.LANG === 'SI') desc3 = "එය bot\'s configs යාවත්කාලීන කරයි."
else desc3 = "It updates එය bot\'s  configs."

var ONLGROUP = ''
if(config.LANG === 'SI') ONLGROUP = "*මෙය group එකක් නොවේ !*"
else ONLGROUP = "*This is not a group !*"

var ADMIN = ''
if(config.LANG === 'SI') ADMIN = "*ඔබ admin නොවේ !*"
else ADMIN = "*You are not an admin !*"

var ADMINim = ''
if(config.LANG === 'SI') ADMINim = "*මම admin නොවේ !*"
else ADMINim = "*Im not an admin !*"

var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"

var alredy = ''
if(config.LANG === 'SI') alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*"
else alredy = "*This setting alredy updated !*"

cmd({
    pattern: "group",
    react: "🛡️",
    alias: ["groupset",'groupsettings'],
    desc: desc1,
    category: "owner",
    use: '.group',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return await reply(ONLGROUP)
if (!isAdmins) return await reply(ADMIN)
if (!isBotAdmins) return await reply(ADMINim)

const sections = [{
title: "Anti Link",
rows: [{
description: 'ON 📲',
rowId: '.antilink on',
title : "1"   
},
{
description: 'OFF 📴',
rowId: '.antilink off',
title : "2"   
}
]},
{
title: "Anti Bad Words",
rows: [{
description: 'ON 📲',
rowId: '.antibad on',
title : "3"   
},
{
description: 'OFF 📴',
rowId: '.antibad off',
title : "4"   
}
]},
{
title: "Anti Bots",
rows: [{
description: 'ON 📲',
rowId: '.antibot on',
title : "5"   
},
{
description: 'OFF 📴',
rowId: '.antibot off',
title : "6"   
}
]},
]
const listMessage = {
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

     *GROUP SETTINGS*

_Select setting what you want to On or Off.._`,
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage,{ quoted : mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "settings",
    react: "🛡️",
    alias: ["setting",'botsetting'],
    desc: desc2,
    category: "owner",
    use: '.settings',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
const sections = [{
title: "Only Group",
rows: [{
description: 'ON 📲',
rowId: '.antibad on',
title : "1"   
},
{
description: 'OFF 📴',
rowId: '.Only Group',
title : "2"   
}
]},
{
title: "Language",
rows: [{
description: 'English 🇺🇸',
rowId: '.lang EN',
title : "3"   
},
{
description: 'Sinhala 🇱🇰',
rowId: '.lang SI',
title : "4"   
}
]}
]
const listMessage = {
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

     *BOT\'S SETTINGS*

_Select setting what you want to On or Off.._`,
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage,{ quoted : mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "apply",
    react: "🛠️",
    alias: ["set",'input'],
    desc: desc3,
    category: "owner",
    use: '.apply <data>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
if(!q) return await reply(tesadtag)
const sections = [{
title: "Max Upload Size",
rows: [{
description: 'DEFAULT 🎲',
rowId: '.uploadsz 100',
title: "1"
},
{
description: 'NEW 🌱',
rowId: '.uploadsz ' + q,
title: "2"
}
]},
{
title: "Alive Massage",
rows: [{
description: 'DEFAULT 🎲',
rowId: '.alivemg default',
title: "3"
},
{
description: 'NEW 🌱',
rowId: '.alivemg ' + q,
title: "4"
}
]},
{
title: "Footer Text / Caption",
rows: [{
description: 'DEFAULT 🎲',
rowId: '.footertxt ©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
title: "5"
},
{
description: 'NEW 🌱',
rowId: '.footertxt ' + q,
title: "6"
}
]},
{
title: "Logo",
rows: [{
description: 'DEFAULT 🎲',
rowId: '.setlogo https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
title: "7"
},
{
description: 'NEW 🌱',
rowId: '.setlogo ' + q,
title: "8"
}
]},
]
const listMessage = {
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

     *BOT\'S CONFIG*

_Select setting what you want to Update.._`,
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.replyList(from, listMessage,{ quoted : mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})


//============================================================================================================


cmd({
    pattern: "antilink",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return await reply(ONLGROUP)
if (!isAdmins) return await reply(ADMIN)
if (!isBotAdmins) return await reply(ADMINim)

const isAnti = async(teks) => {
let getdata = await get(teks)
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}

if(q === "on"){
if(await isAnti("ANTI_LINK")) return await reply(alredy)
let olddata = await get("ANTI_LINK")
olddata.push(from)
await input("ANTI_LINK", olddata)
await reply("*Anti link updated: " + q + "*")
} else {
if(!await isAnti("ANTI_LINK")) return await reply(alredy)
const array = await get("ANTI_LINK")
const itemToRemove = from
const indexToRemove = array.indexOf(itemToRemove);
if (indexToRemove !== -1) {
  array.splice(indexToRemove, 1);
}
await input("ANTI_LINK", array)
await reply("*Anti link updated: " + q + "*")
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antibot",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return await reply(ONLGROUP)
if (!isAdmins) return await reply(ADMIN)
if (!isBotAdmins) return await reply(ADMINim)

const isAnti = async(teks) => {
let getdata = await get(teks)
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}

if(q === "on"){
if(await isAnti("ANTI_BOT")) return await reply(alredy)
let olddata = await get("ANTI_BOT")
olddata.push(from)
await input("ANTI_BOT", olddata)
await reply("*Anti bots updated: " + q + "*")
} else {
if(!await isAnti("ANTI_BOT")) return await reply(alredy)
const array = await get("ANTI_BOT")
const itemToRemove = from
const indexToRemove = array.indexOf(itemToRemove);
if (indexToRemove !== -1) {
  array.splice(indexToRemove, 1);
}
await input("ANTI_BOT", array)
await reply("*Anti bots updated: " + q + "*")
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antibad",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return await reply(ONLGROUP)
if (!isAdmins) return await reply(ADMIN)
if (!isBotAdmins) return await reply(ADMINim)
const isAnti = async(teks) => {
let getdata = await get(teks)
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}

if(q === "on"){
if(await isAnti("ANTI_BAD")) return await reply(alredy)
let olddata = await get("ANTI_BAD")
olddata.push(from)
await input("ANTI_BAD", olddata)
await reply("*Anti bad words updated: " + q + "*")
} else {
if(!await isAnti("ANTI_BAD")) return await reply(alredy)
const array = await get("ANTI_BAD")
const itemToRemove = from
const indexToRemove = array.indexOf(itemToRemove);
if (indexToRemove !== -1) {
  array.splice(indexToRemove, 1);
}
await input("ANTI_BAD", array)
await reply("*Anti bad words updated: " + q + "*")
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "onlygroup",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)

const isAnti = async(teks) => {
let getdata = await get(teks)
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}


if(q === "on"){
let gett = await get("ONLY_GROUP")
if(gett === true) return await reply(alredy)
await input("ONLY_GROUP", true)
await reply("*Only group updated: " + q + "*")
} else{
let gett = await get("ONLY_GROUP")
if(gett === false) return await reply(alredy)
await input("ONLY_GROUP", false)
await reply("*Only group updated: " + q + "*")
}
} catch (e) {
reply('*Error !!*')
l(e)
}

})

cmd({
    pattern: "lang",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
let gett = await get("LANG")
if(gett === q) return await reply(alredy)
await input("LANG", q)

await reply("*Language updated: " + q + "*")

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "uploadsz",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
let gett = await get("MAX_SIZE")
if(gett === Number(q)) return await reply(alredy)
await input("MAX_SIZE", Number(q))

await reply("*Max upload size updated: " + q + "*")

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "alivemg",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
let gett = await get("ALIVE")
if(gett === q) return await reply(alredy)
await input("ALIVE", q)

await reply("*Alive massage updated:* " + q )

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "footertxt",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
let gett = await get("FOOTER")
if(gett === q) return await reply(alredy)
await input("FOOTER", q)

await reply("*Footer updated:* " + q)

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setlogo",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
let gett = await get("LOGO")
if(gett === q) return await reply(alredy)
await input("LOGO", q)

await reply("*Logo updated: " + q + "*")

} catch (e) {
reply('*Error !!*')
l(e)
}
})

var needus =''
if(config.LANG === 'SI') needus = 'එය දත්ත සමුදාය නැවත සකසයි.'
else needus = "It resets database." 
cmd({
    pattern: "resetdb",
    desc: needus,
    category: "owner",
    use: '.resetdb',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isMe) return await reply(BOTOW)
   await updfb()
return reply("Database reseted !!")
} catch (e) {
reply(cantf)
l(e)
}
})
