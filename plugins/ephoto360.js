const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { Maker } = require('imagemaker.js')
var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර නමක් දෙන්න !```"
else imgmsg = "```Please give me a name !```"

var imgmsg2 =''
if(config.LANG === 'SI') imgmsg2 = "*උදා: .banner Vajira+Rathnayaka*"
else imgmsg2 = "*Ex: .banner Vajira+Rathnayaka*"

var imgmsg3 =''
if(config.LANG === 'SI') imgmsg3 = "*උදා: .banner2 Vajira+Rathnayaka*"
else imgmsg3 = "*Ex: .banner2 Vajira+Rathnayaka*"

var imgmsg4 =''
if(config.LANG === 'SI') imgmsg4 = "*උදා: .banner3 Vajira+Rathnayaka*"
else imgmsg4 = "*Ex: .banner3 Vajira+Rathnayaka*"

var imgmsg5 =''
if(config.LANG === 'SI') imgmsg5 = "*උදා: .banner3 Vajira+Rathnayaka*"
else imgmsg5 = "*Ex: .banner3 Vajira+Rathnayaka*"

var imgmsg6 =''
if(config.LANG === 'SI') imgmsg6 = "*උදා: .banner3 Vajira+Rathnayaka*"
else imgmsg6 = "*Ex: .banner3 Vajira+Rathnayaka*"

var desc =''
if(config.LANG === 'SI') desc = "එය වචන 1කින් ephoto360 logos නිර්මාණය කරයි.."
else desc = "It creates ephoto360 logos using 1 word.."

var desc2 =''
if(config.LANG === 'SI') desc2 = "එය channel banners නිර්මාණය කරයි.."
else desc2 = "It creates channel banners.."

var errt =''
if(config.LANG === 'SI') errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*"
else errt = "*I cant create this logo :(*"

cmd({
    pattern: "ephoto360",
    react: '🎭',
    alias: ["logo6","ephoto360","ephoto"],
    desc: desc,
    category: "logo",
    use: '.ephoto360 vihanga yt',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
const sections = [{
description: "Result from ephoto360. 📲",
title: i + 1,
rows: [{
title: 'Blackpink',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html'
},{
title: 'Dragon ball',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html'
},{
title: 'Naruto shippuden',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html'
},{
title: 'Sunset light',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html'
},{
title: 'beautiful 3d foil baloon',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html'
},{
title: 'Digital glitch',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
},{
title: 'Write text on wet glass',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
},{
title: 'Glossy silver 3D text effect',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html'
},{
title: 'Colorful neon light text effect',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html'
},{
title: 'Thor logo style',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html'
},{
title: 'Typography text effect on pavement',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
},{
title: 'Impressive neon Glitch text effect',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
},{
title: 'Handwritten text on foggy glass',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html'
},{
title: 'Impressive decorative 3D metal text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html'
},{
title: 'Frozen Christmas text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html'
},{
title: 'Hacker avatar',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html'
},{
title: '3D colorful paint text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html'
},{
title: 'Women\'s Day',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-greeting-video-card-for-international-women-s-day-on-march-8-784.html'
},{
title: 'Pixel Glitch',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
},{
title: 'Americal flag',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
},{
title: 'Erasing',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
},{
title: 'Multicolored signature attachment arrow',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html'
},{
title: 'Blackpink 02',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
},{
title: 'Blackpink neon',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html'
},{
title: 'Star Wars character mascot',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html'
},{
title: 'Glowing text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
},{
title: 'Funny animations of a traveling bear',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html'
},{
title: 'Beach 3D',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html'
},{
title: 'Cute girl gamer mascot',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html'
},{
title: '3D underwater',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
},{
title: 'Bear logo',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
},{
title: 'Football team logo',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-football-team-logo-online-free-671.html'
},{
title: 'Cartoon style graffiti',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
},{
title: 'Multicolor 3D paper',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
},{
title: 'Watercolor text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
},{
title: 'Light text effect futuristic technology',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html'
},{
title: 'Write text effect clouds in the sky',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
},{
title: 'PUBG logo maker cute character',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html'
},{
title: 'PUBG Mascot Logo Maker for an eSports',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html'
},{
title: 'Black Pink 03',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
},{
title: 'Funny warning sign',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-funny-warning-sign-602.html'
},{
title: '3D gradient text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
},{
title: 'Write in sand summer beach',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
},{
title: 'Luxury gold text',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
},{
title: 'Multicolored neon light signatures',
rowId: prefix + 'dlogo6 ' + q + '+' + 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
},

]}]
const listMessage = { 
text: `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *EPHOTO360 LOGO*

*🤹 Entered Name:* ${q}`,
footer: config.FOOTER,
title: 'Result from ephoto360. 📲',
buttonText: 'Select Logo 🎭',
sections
}
await conn.replyList(from, listMessage,{quoted: mek})

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "banner",
    alias: ["ytbanner","cover","channelbanner"],
    desc: desc2,
    category: "logo",
    use: '.banner vajira+tech',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg2)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner2",
    alias: ["ytbanner2","cover2","channelbanner2"],
    desc: desc2,
    category: "logo",
    use: '.banner2 vajira+tech',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg3)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner3",
    alias: ["ytbanner3","cover3","channelbanner3"],
    desc: desc2,
    category: "logo",
    use: '.banner3 vajira+tech',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg4)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner4",
    alias: ["ytbanner4","cover4","channelbanner4"],
    desc: desc2,
    category: "logo",
    use: '.banner4 vajira+tech',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg5)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "banner5",
    alias: ["ytbanner5","cover5","channelbanner5"],
    desc: desc2,
    category: "logo",
    use: '.banner5 vajira+tech',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg6)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo6",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    new Maker().Ephoto360(link, [`${name}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })

} catch (e) {
    reply(errt)
  l(e)
}
})
