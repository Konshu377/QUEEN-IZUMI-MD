const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { iosNews } = require('ios-news')

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Tech news ලබා දෙයි.'
else tmsg = "It gives Tech news."


cmd({
    pattern: "technews",
    alias: ["tech","gadgets360"],
    react: "📡",
    desc: tmsg,
    category: "search",
    use: '.technews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = (await fetchJson('https://vihangayt.me/details/tnews')).data
let info = `*📃 Title :* ${data.title}
*⛓️ Link:* ${data.link}
*📚 Description:* ${data.desc}
`
return await conn.sendMessage(from, { image: { url: data.img} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
