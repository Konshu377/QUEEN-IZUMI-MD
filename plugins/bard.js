const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct =''
if(config.LANG === 'SI') desct = 'එය ඔබ ලබා දුන් දේ සඳහා bard AI මත සොයයි.'
else desct = "It search on bard ai for what you provided."
var needus =''
if(config.LANG === 'SI') needus = '*කරුණාකර මට bard AI හි සෙවීමට වචන ලබා දෙන්න !*'
else needus = "*Please give me words to search on bard ai !*" 
var cantf =''
if(config.LANG === 'SI') cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
else cantf = "*Server is busy. Try again later.!*"


cmd({
    pattern: "bard",
    alias: ["bardai","gbard","googlebard","googleai","ai2"],
    react: '👾',
    desc: desct,
    category: "search",
    use: '.bard ha',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
let apilist = await fetchJson('https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json')
let list = apilist.users
let apikey = list[Math.floor(Math.random() * list.length)]
const dataget = await fetchJson(apilist.xz +'api/bard?text='+ q +'&apikey='+ apikey)
return await reply(dataget.content)
} catch (e) {
try{
    const dataget = await fetchJson('https://api.akuari.my.id/ai/gbard?chat=' + q)
return await reply(dataget.respon)
} catch (e) {
reply(cantf)
l(e)
}
}
})
