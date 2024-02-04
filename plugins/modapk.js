const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const cheerio = require('cheerio');

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "එය androidapksfree වෙතින් mod apps බාගත කරයි."
else urlneed = "It downloads mod apps from androidapksfree."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

cmd({
    pattern: "modapk",
    react: "📱",
    alias: ["androidapksfree","mod"],
    desc: urlneed,
    category: "download",
    use: '.modapk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const era = await axios.get(`https://androidapksfree.com/?s=${q}`, {
    withCredentials: true
  })

var sedarch = []
const $gs = cheerio.load(era.data)
$gs('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.boxed-content > div.devapk-apps-list > section').each(function(a, b) {
const link = $gs(b).find('h1 > a').attr('href')
const title = $gs(b).find('h1').text()
const update = $gs(b).find('div.date-on-tax').text().replaceAll('\n','')
sedarch.push({ link, title , update })
})
const data = sedarch
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
title: data[i].title,
rowId: prefix + 'dapk2 ' + data[i].link + '+' + data[i].title
});
}
const sections = [{
title: "_[Result from androidapksfree.]_",
rows: srh
}]
const listMessage = {
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *MOD APK DOWNLOADER*

*📱 Enterd Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from androidapksfree. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
await conn.listMessage(from, listMessage,mek)
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dapk2",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
let [link,title] = q.split('+')
const era = await axios.get(link + `download/`, {
    withCredentials: true
})
const $g = cheerio.load(era.data)
const linkdl = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').attr('href')
const icon = $g('div.app-icon-new > img').attr('src')
const size = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').text().split('(')[1].replaceAll(')','')
let listdata = `*📚 Name :* ${title}
*📥 Size :* ${size}`
await conn.sendMessage(from, { image: { url: icon }, caption: listdata }, { quoted: mek })
if (size.includes('GB')) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
if (size.includes('MB') && size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : linkdl  } , mimetype : 'application/vnd.android.package-archive' , fileName : title + '.' + 'apk',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})
