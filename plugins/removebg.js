const config = require('../config')
const { cmd, commands } = require('../command')
const got = require("got");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fs = require('fs');
let { unlink } = require("fs/promises");
const { promisify } = require("util");
const FormData = require("form-data");
const stream = require("stream");
const pipeline = promisify(stream.pipeline);
const fileType = require("file-type");
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
else imgmsg = "*Reply to a photo !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ඔබගේ mention දුන් ඡායාරූපය background remove කරයි."
else descg = "It remove background your replied photo."
var cant = ''
if(config.LANG === 'SI') cant = "මට මෙම රූපයේ පසුබිම ඉවත් කළ නොහැක."
else cant = "I can't remove background on this image."
cmd({
    pattern: "removebg",
    react: "🔮",
    alias: ["rmbg"],
    desc: descg,
    category: "convert",
    use: '.removebg <Reply to image>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    const isQuotedVideo = m.quoted ? ((m.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'videoMessage') : false)) : false
    const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false
  if ((m.type === 'imageMessage') || isQuotedImage) {
    var nameJpg = getRandom('');
    var namePng = getRandom('');
    let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let type = await fileType.fromBuffer(buff);
    await fs.promises.writeFile("./" + type.ext, buff);
    var form = new FormData();
    form.append("image_file", fs.createReadStream("./" + type.ext));
    form.append("size", "auto");

    var rbg = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
      body: form,
      headers: {
        "X-Api-Key": 'fLYByZwbPqdyqkdKK6zcBN9H',
      },
    });
await pipeline(rbg, fs.createWriteStream(namePng + ".png"));
let dat = `┌───[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *🌆 BACKGROUND REMOVER*

`
const sections = [
    {
	title: "",
	rows: [
    {title: "1", rowId: prefix + 'rbgi ' + namePng + ".png", description: 'ɪᴍᴀɢᴇ'},
    {title: "2", rowId: prefix + 'rebgs ' + namePng + ".png", description: 'ꜱᴛɪᴄᴋᴇʀ'},
    {title: "3", rowId: prefix + 'rbgd ' + namePng + ".png", description: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}
]
    }
    ]
    const listMessage = {
        caption: dat,
        footer: config.FOOTER,
        buttons: buttons,
        headerType: 1
    }
    await conn.replyList(from, listMessage,{quoted: mek})
}else return await  reply(imgmsg)
} catch (e) {
reply(cant)
l(e)
}
})

cmd({
  pattern: "rbgi",
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
  pattern: "rebgs",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
let sticker = new Sticker(q, {
  pack: pushname, // The pack name
  author: '', // The author name
  type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
  categories: ["🤩", "🎉"], // The sticker category
  id: "12345", // The sticker id
  quality: 75, // The quality of the output file
  background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
await conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "rbgd",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: fs.readFileSync(q), mimetype: 'image/x-png', fileName: 'Removebg' + '.png',caption: config.FOOTER  }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
