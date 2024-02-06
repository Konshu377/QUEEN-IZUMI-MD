const config = require('../config')
const util = require('util')
const {find} = require('raganork-bot')
const trueCaller = async (num) => {try { var res = await find(num,'','') } catch { var res = false }; return res;}
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var tmsg =''
if(config.LANG === 'SI') tmsg = '*කරුණාකර මට දුරකථන අංකයක් දෙන්න. !*'
else tmsg = "*Please give me phone number !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති දුරකථන අංකයේ හිමිකරු සොයා ගනී."
else descg = "It find owner of given phone number."

cmd({
    pattern: "true",
    alias: ["truecaller"],
    react: '💯',
    desc: descg,
    category: "search",
    use: '.true <phone number>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
let trusend = q.replace(/[^0-9]/g, "")
let rslt = await trueCaller(trusend)
if(rslt === 'false') return reply('Can\'t  ind this number')
await reply(util.format(rslt))
} catch (e) {
reply('*Error !!*')
l(e)
}
})
