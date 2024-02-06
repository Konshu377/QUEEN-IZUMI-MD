const config = require('../config')
const { cmd, commands } = require('../command')
const fs = require('fs');
const fileType = require("file-type");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ස්ටිකරයකට mention දෙන්න !*'
else imgmsg = "*Reply to a sticker !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි."
else descg = "It converts your replied sticker to img."

cmd({
    pattern: "toimg",
    react: "🔮",
    alias: ["s","stic"],
    desc: descg,
    category: "convert",
    use: '.sticker <Reply to image>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    const isQuotedVideo = m.quoted ? ((m.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'videoMessage') : false)) : false
    const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false
if ( isQuotedSticker ) { 

var nameJpg = getRandom('');
let buff = isQuotedSticker ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
let type = await fileType.fromBuffer(buff);
await fs.promises.writeFile("./" + type.ext, buff);  
await conn.sendMessage(from, { image: fs.readFileSync("./" + type.ext), caption: config.FOOTER }, { quoted: mek })

}else return await  reply(imgmsg)
} catch (e) {
reply('*Error !!*')
l(e)
}
})