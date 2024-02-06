const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { iosNews } = require('ios-news')

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය IOS news ලබා දෙයි.'
else tmsg = "It gives IOS news."


cmd({
    pattern: "ios",
    alias: ["apple","applenews"],
    react: "🍎",
    desc: tmsg,
    category: "search",
    use: '.ios',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = (await iosNews()).result[0]
let info = `*📃 Title :* ${data.title}
*🕒 Time:* ${data.time} 
*⛓️ Link:* ${data.link}
*📚 Description:* ${data.desc}
`
return await conn.sendMessage(from, { image: { url: data.img} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
