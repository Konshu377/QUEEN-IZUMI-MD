const { cmd, commands } = require('../command');
let { img2url } = require('@blackamda/telegram-image-url');
const { getRandom, fetchJson } = require('../lib/functions');
const fs = require('fs');
const config = require('../config')

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති low quality රූපයක් quality රූපයක් බවට පරිවර්තනය කරයි..'
else desct = "It converts given low quality image to quality image.."
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
else imgmsg = "*Reply to a photo !*"
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"


cmd({
    pattern: "enhance",
    react: "↗️",
    alias: ["imgenhance","quality","qualityimage","tohd"],
    desc: desct,
    category: "convert",
    use: '.enhance <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
const fileType = require("file-type");
  var nameJpg = getRandom('');
  let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
  let type = await fileType.fromBuffer(buff);
  await fs.promises.writeFile("./" + type.ext, buff);
  img2url("./" + type.ext).then(async url => {
      await conn.sendMessage(from, { image: await getBuffer('https://vihangayt.me/tools/enhance?url='+url), caption: config.FOOTER }, { quoted: mek })
});
    } else return reply(imgmsg)
} catch (e) {
  reply(cantf);
  l(e);
}
})
