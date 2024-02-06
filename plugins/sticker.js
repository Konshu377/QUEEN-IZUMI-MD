const config = require('../config')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ඡායාරූපයකට mention දෙන්න!*'
else imgmsg = "*Reply to a photo !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි."
else descg = "It converts your replied photo to sticker."
cmd({
    pattern: "sticker",
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
     if ((m.type === 'imageMessage') || isQuotedImage) {
      var nameJpg = getRandom('')
      isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let sticker = new Sticker(nameJpg + '.jpg', {
      pack: pushname, // The pack name
      author: '', // The author name
      type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
      categories: ["🤩", "🎉"], // The sticker category
      id: "12345", // The sticker id
      quality: 75, // The quality of the output file
      background: "transparent", // The sticker background color (only for full stickers)
  });
  const buffer = await sticker.toBuffer();
  return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
}  else if ( isQuotedSticker ) { 

    var nameWebp = getRandom('')
    await m.quoted.download(nameWebp)
  let sticker = new Sticker(nameWebp + '.webp', {
    pack: pushname, // The pack name
    author: '', // The author name
    type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
    categories: ["🤩", "🎉"], // The sticker category
    id: "12345", // The sticker id
    quality: 75, // The quality of the output file
    background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
}else return await  reply(imgmsg)
} catch (e) {
reply('*Error !!*')
l(e)
}
})