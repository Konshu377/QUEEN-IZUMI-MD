const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {  
    igstalker,
    tikstalk
} = require('../lib/stalker')

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති tiktok username පිළිබඳ විස්තර සපයයි.'
else desct = "It gives details of given tiktok username."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට tiktok username ලබා දෙන්න !*'
else needus = "*Please give me a tiktok username !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*මට මෙම tiktok පරිශීලකයා tiktok හි සොයාගත නොහැක !*'
else cantf = "*I cant find this user on tiktok !*"

cmd({
    pattern: "stiktok",
    alias: ["tiktokstalk","stalktiktok","tikstalk"],
    react: '📱',
    desc: desct,
    category: "search",
    use: '.stiktok <tiktok username>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
const dataget = await tikstalk(args[0])
const cap = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

    *TIKTOK STALKER*

*🆔 Username:* ${dataget.username}

*👤 Name:* ${dataget.name}

*🐾 Bio:* ${dataget.bio}

*🚶🏽 Following:* ${dataget.following}

*👥 Followers:* ${dataget.followers}

*💌 Likes:* ${dataget.likes}

└───────────◉`
await conn.sendMessage(from, { image: { url: dataget.img }, caption: cap }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})
