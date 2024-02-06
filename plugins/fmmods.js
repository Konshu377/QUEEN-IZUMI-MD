const config = require('../config')
const fg = require('api-dylux');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const cheerio = require('cheerio')
const axios = require("axios")

cmd({
    pattern: "fmmods",
    alias: ["wamod","wamods","fmmod"],
    react: '📲',
    desc: "Download all fmmods.",
    category: "download",
    use: '.fmmods',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted,prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  let response = (await fetchJson('https://vihangayt.me/download/fmmods')).data
  var buttons = [
    {buttonId: prefix + 'dmod ' + response.com_whatsapp.link + '+' + response.com_whatsapp.name, buttonText: {displayText: response.com_whatsapp.name }, type: 1},
    {buttonId: prefix + 'dmod ' + response.com_fmwhatsapp.link + '+' + response.com_fmwhatsapp.name, buttonText: {displayText: response.com_fmwhatsapp.name }, type: 1},
    {buttonId: prefix + 'dmod ' + response.com_gbwhatsapp.link + '+' + response.com_gbwhatsapp.name, buttonText: {displayText: response.com_gbwhatsapp.name }, type: 1},
    {buttonId: prefix + 'dmod ' + response.com_yowhatsapp.link + '+' + response.com_yowhatsapp.name, buttonText: {displayText: response.com_yowhatsapp.name }, type: 1},
  ]

  const buttonMessage = {
      caption: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]
      
*Foud Whatsapp Mod Downloader 📲*
`,
      footer: config.FOOTER,
      buttons: buttons,
      headerType: 1
  }
  return await conn.buttonMessage(from, buttonMessage,mek)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
  pattern: "dmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  modname + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
