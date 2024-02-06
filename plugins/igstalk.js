const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {  
    igstalker,
    tikstalk
} = require('../lib/stalker')

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති instagram username පිළිබඳ විස්තර සපයයි.'
else desct = "It gives details of given instagram username."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට instagram username ලබා දෙන්න !*'
else needus = "*Please give me a instagram username !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*මට මෙම instagram පරිශීලකයා instagram හි සොයාගත නොහැක !*'
else cantf = "*I cant find this user on instagram !*"

cmd({
    pattern: "igstalk",
    alias: ["instastalk","instagramstalk","igstalker"],
    react: '📷',
    desc: desct,
    category: "search",
    use: '.igstalk <instagram username>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
const dataget = await igstalker(q)
const cap = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

    *IG STALKER*

*🆔 Username:* ${dataget.username}

*👤 Name:* ${dataget.fullname}

*🐾 Bio:* ${dataget.bio}

*🚶🏽 Following:* ${dataget.following}

*👥 Followers:* ${dataget.followers}

*📬 Post count:* ${dataget.post}

└───────────◉`
await conn.sendMessage(from, { image: { url: dataget.profile }, caption: cap }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})
