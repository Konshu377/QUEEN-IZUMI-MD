const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct =''
if(config.LANG === 'SI') desct = 'එය ලබා දී ඇති text එකක් ai image එකක් බවට පරිවර්තනය කරයි.'
else desct = "It convert given text to ai image."
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*උදාහරණයක්: .imagine woman,hair cut collor red,full body,bokeh*'
else imgmsg = "*Example: .imagine woman,hair cut collor red,full body,bokeh*"
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"

cmd({
    pattern: "imagine",
    alias: ["texttoimage","toimage","aiimage"],
    react: '🤖',
    desc: desct,
    category: "search",
    use: '.imagine  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let apilist = await fetchJson('https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json')
let list = apilist.users
let apikey = list[Math.floor(Math.random() * list.length)]
const dataget = await fetchJson(apilist.xz +'api/text-to-image?text='+ encodeURIComponent(q) +'&apikey='+ apikey)
return await conn.sendMessage(from, { image: await getBuffer(dataget.imageUrl), caption: `\n*${dataget.promptEn}*\n`}, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})
