const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති ip එක පිළිබඳ විස්තර සපයයි.'
else desct = "It gives details of given ip."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට ip එකක් ලබා දෙන්න !*'
else needus = "*Please give me a ip !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*මට මෙම ip එක සොයාගත නොහැක !*'
else cantf = "*I cant find this ip !*"

cmd({
    pattern: "ip",
    alias: ["ipstalk","sip","searchip","ip-locator"],
    react: '🌐',
    desc: desct,
    category: "search",
    use: '.ipstalk 112.134.193.130',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
if(!q.includes('.')) return reply(needus)
const IP = "IP :"
const ST = "STATUS :"
const CONTINENT = "CONTINENT :"
const COUNTRY = "COUNTRY :"
const COUNTRYCODE = "COUNTRYCODE :"
const REGIONNAME = "REGIONNAME :"
const CITY = "CITY :"
const ZIP = "ZIP :"
const CURRENCY = "CURRENCY :"
const ISP = "ISP :"
const MOBILE = "MOBILE :"
const PROXY = "PROXY :"
const r = await fetchJson('https://api.techniknews.net/ipgeo/' + q)
const wea = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

    *IP STALKER*
    
` +
'*🔴 ' + IP +'* ```' + q + '```\n' +
'*✅' + ST +'* ```' + r.status+ '```\n' +
    '*🌐' + CONTINENT +'* ```' + r.continent+ '```\n' +
    '*🗺' + COUNTRY +'* ```' + r.country+ '```\n' +
    '*🔢' + COUNTRYCODE +'* ```' + r.countryCode+ '```\n' +
    '*🌍' + REGIONNAME +'* ```' + r.regionName+ '```\n' +
    '*🚩' + CITY +'* ```' + r.city+ '```\n' +
    '*🏛' + ZIP +'* ```' + r.zip+ '```\n' +
    '*💸' + CURRENCY +'* ```' + r.currency+ '```\n' +
    '*📡' + ISP +'* ```' + r.isp+ '```\n' +
    '*🛡' + PROXY +'* ```' + r.proxy+ '```\n' +
    '*📱' + MOBILE +'* ```' + r.mobile+ '```\n\n'
    + "└───────────◉"
await conn.sendMessage(from , { text: wea}, { quoted: mek } )
} catch (e) {
reply(cantf)
l(e)
}
})
