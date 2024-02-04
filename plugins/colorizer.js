const { cmd, commands } = require('../command');
let { img2url } = require('@blackamda/telegram-image-url');
const { getRandom, fetchJson } = require('../lib/functions');
const fs = require('fs');
const config = require('../config')

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති black and white රූපයක් colour රූපයක් බවට පරිවර්තනය කරයි..'
else desct = "It converts given black and white image to colour image.."
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
else imgmsg = "*Reply to a photo !*"
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"


cmd({
    pattern: "colorize",
    react: "🎨",
    alias: ["colorizer","tocolour","colourize"],
    desc: desct,
    category: "convert",
    use: '.colorize <reply black & white image>',
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
    try{
      await conn.sendMessage(from, { image: await getBuffer('https://vihangayt.me/tools/colorize?url='+url), caption: config.FOOTER }, { quoted: mek })
    } catch (e) {
      let apilist = await fetchJson('https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json')
      let list = apilist.users
      let apikey = list[Math.floor(Math.random() * list.length)]
      await conn.sendMessage(from, { image: { url: apilist.xz +'api/colorizer?url='+url+'&apikey=' + apikey }, caption: config.FOOTER }, { quoted: mek })
    }
});
    } else return reply(imgmsg)
} catch (e) {
  reply(cantf);
  l(e);
}
})
