const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
else tmsg = "*Please give me a song name. !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි."
else descg = "It gives lyrics of given song name."
var cantscg = ''
if(config.LANG === 'SI') cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*"
else cantscg = "*I cant find lyrics of this song !*"

cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    react: '🎙️',
    desc: descg,
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson('https://api.sdbots.tech/lyrics?song=' + q)
if(result.lyrics) reply(`
┌───[🍭Zero-Two🍭]

   *LYRICS SEARCH*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})
