const config = require('../config')
const { cmd, commands } = require('../command')
const fs = require('fs');
const fileType = require("file-type");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const path = require('path')
const { tmpdir } = require("os")
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Crypto = require("crypto")
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

async function videoToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ffmpeg(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}
var imgmsg =''
if(config.LANG === 'SI') imgmsg = '*කරුණාකර මට text එකක් දෙන්න !*'
else imgmsg = "*Please give me a text !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි"
else descg = "it converts a text to gif sticker."
var descdg = ''
if(config.LANG === 'SI') descdg = "එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි"
else descdg = "it converts a text to sticker."
cmd({
    pattern: "attp",
    react: "✨",
    alias: ["texttogif"],
    desc: descg,
    category: "convert",
    use: '.attp HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://vihangayt.me/maker/text2gif?q=" + q)
await conn.sendMessage(from, {sticker: await videoToWebp(bufff)}, {quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "ttp",
    react: "✨",
    alias: ["ttp","texttoimg"],
    desc: descdg,
    category: "convert",
    use: '.ttp HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://vihangayt.me/maker/text2img?q=" + q)
let sticker = new Sticker(bufff, {
    pack: pushname, // The pack name
    author: '', // The author name
    type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
    categories: ["🤩", "🎉"], // The sticker category
    id: "12345", // The sticker id
    quality: 75, // The quality of the output file
    background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

