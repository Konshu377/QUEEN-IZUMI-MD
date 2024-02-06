const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require("axios")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function fbDownloader(url) {
	try {
		const response1 = await axios({
			method: 'POST',
			url: 'https://snapsave.app/action.php?lang=vn',
			headers: {
				"accept": "*/*",
				"accept-language": "vi,en-US;q=0.9,en;q=0.8",
				"content-type": "multipart/form-data",
				"sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"Referer": "https://snapsave.app/vn",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			data: {
				url
			}
		});

		let html;
		const evalCode = response1.data.replace('return decodeURIComponent', 'html = decodeURIComponent');
		eval(evalCode);
		html = html.split('innerHTML = "')[1].split('";\n')[0].replace(/\\"/g, '"');

		const $ = cheerio.load(html);
		const download = [];

		const tbody = $('table').find('tbody');
		const trs = tbody.find('tr');

		trs.each(function (i, elem) {
			const trElement = $(elem);
			const tds = trElement.children();
			const quality = $(tds[0]).text().trim();
			const url = $(tds[2]).children('a').attr('href');
			if (url != undefined) {
				download.push({
					quality,
					url
				});
			}
		});

		return {
			success: true,
			download
		};
	}
	catch (err) {
		return {
			success: false
		};
	}
}
function fbreg(url) {
const fbRegex = /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
return fbRegex.test(url);
}

var desc =''
if(config.LANG === 'SI') desc = "Facebook වෙතින් වීඩියෝ බාගත කරයි."
else desc = "Download videos from Facebook."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර facebook video url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me facebook video url..*"


cmd({
  pattern: "fb",
  react: '#️⃣',
  alias: ["fbdl"],
  desc: desc,
  category: "download",
  use: '.fb <Fb video link>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!fbreg(q)) return await  reply(urlneed)
let data = await fbDownloader(q)
let l = data.download
let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *FB DOWNLOADER*

*📎 Url:* ${q}`
if(!l[0]) return await reply(N_FOUND)
var buttons
if(!l[1]){
var buttons = [
  {buttonId: prefix + 'dvideo ' + l[0].url, buttonText: {displayText: l[0].quality + ' VIDEO'}, type: 1}
]
} else {
var buttons = [
  {buttonId: prefix + 'dvideo ' + l[0].url, buttonText: {displayText: l[0].quality + ' VIDEO'}, type: 1},
  {buttonId: prefix + 'dvideo ' + l[1].url, buttonText: {displayText: l[1].quality + ' VIDEO'}, type: 1}
]
}
const buttonMessage = {
    image: {url: 'https://media.idownloadblog.com/wp-content/uploads/2022/04/Download-Facebook-data.jpg'},
    caption: dat,
    footer: config.FOOTER,
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage(from, buttonMessage,mek)
} catch (e) {
l(e)
await reply(N_FOUND)
}
})


cmd({
  pattern: "dvideo",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { video: { url: q }, caption: config.FOOTER}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
