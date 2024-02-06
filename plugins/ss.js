const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
 async function sswebA(url = '', full = false, type = 'desktop') {
	type = type.toLowerCase()
	if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
	let form = new URLSearchParams()
	form.append('url', url)
	form.append('device', type)
	if (!!full) form.append('full', 'on')
	form.append('cacheLimit', 0)
	let res = await axios({
		url: 'https://www.screenshotmachine.com/capture.php',
		method: 'post',
		data: form
	})
	let cookies = res.headers['set-cookie']
	let buffer = await axios({
		url: 'https://www.screenshotmachine.com/' + res.data.link,
		headers: {
			'cookie': cookies.join('')
		},
		responseType: 'arraybuffer' 
	})
	return Buffer.from(buffer.data)
}

var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*කරුණාකර මට url එකක් දෙන්න !*'
else imgmsg = "*Please give me a url !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else descg = "It gives desktop size screenshot of given url."
var descp = ''
if(config.LANG === 'SI') descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else descp = "It gives phone size screenshot of given url."
var desct = ''
if(config.LANG === 'SI') desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි."
else desct = "It gives tablet size screenshot of given url."
var cant = ''
if(config.LANG === 'SI') cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*"
else cant = "*I can't get a screenshot. Try again later.*"

cmd({
    pattern: "ss",
    react: "📸",
    alias: ["screenshot","ssweb","ssdesktop"],
    desc: descg,
    category: "download",
    use: '.ss <url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'desktop')
fs.writeFileSync(name + '.jpg', data);
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *📸 SCREENSHOT GETTER*`
const buttons = [
{buttonId: prefix + 'ssd ' + name + '.jpg', buttonText: {displayText: 'DOCUMENT'}, type: 1},
{buttonId: prefix + 'ssi ' + name + '.jpg', buttonText: {displayText: 'IMAGE'}, type: 1}
]
    const buttonMessage = {
        caption: dat,
        footer: config.FOOTER,
        buttons: buttons,
        headerType: 1
    }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(cant)
l(e)
}
})

cmd({
    pattern: "ssphone",
    react: "📸",
    desc: descp,
    category: "download",
    use: '.ss <url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'phone')
fs.writeFileSync(name + '.jpg', data);
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *📸 SCREENSHOT GETTER*`
const buttons = [
{buttonId: prefix + 'ssd ' + name + '.jpg', buttonText: {displayText: 'DOCUMENT'}, type: 1},
{buttonId: prefix + 'ssi ' + name + '.jpg', buttonText: {displayText: 'IMAGE'}, type: 1}
]
    const buttonMessage = {
        caption: dat,
        footer: config.FOOTER,
        buttons: buttons,
        headerType: 1
    }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(cant)
l(e)
}
})

cmd({
    pattern: "sstab",
    react: "📸",
    desc: desct,
    category: "download",
    use: '.ss <url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let name = getRandom('')
let data = await sswebA(q,true,'tablet')
fs.writeFileSync(name + '.jpg', data);
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *📸 SCREENSHOT GETTER*`
const buttons = [
{buttonId: prefix + 'ssd ' + name + '.jpg', buttonText: {displayText: 'DOCUMENT'}, type: 1},
{buttonId: prefix + 'ssi ' + name + '.jpg', buttonText: {displayText: 'IMAGE'}, type: 1}
]
    const buttonMessage = {
        caption: dat,
        footer: config.FOOTER,
        buttons: buttons,
        headerType: 1
    }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(cant)
l(e)
}
})

cmd({
  pattern: "ssi",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { image: fs.readFileSync(q), caption: config.FOOTER }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "ssd",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: fs.readFileSync(q), mimetype: 'image/jpeg', fileName: 'screenshot' + '.jpg',caption: config.FOOTER  }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
