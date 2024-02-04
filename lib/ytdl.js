const axios = require('axios')
const qs = require('querystring')
const cheerio = require('cheerio')

const getBuffer = async(url, options) => {
	try {
		options ? options : {}
		var res = await axios({
			method: 'get',
			url,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(e)
	}
}
async function getsize(fx) {
  function formatBytes(x) {
    let units = ['B', 'KB', 'MB', 'GB', 'TB']
    let bytes = x
    let i;

    for (i = 0; bytes >= 1024 && i < 4; i++) {
        bytes /= 1024;
    }

    return bytes.toFixed(2) + ' ' + units[i];
}
return formatBytes(Buffer.byteLength(await getBuffer(fx)))

}

ytmp4 = async (link) => {
    const datapt = {
        url: link,
        format: 'mp4',
        lang: 'en',
      }
      let data = await axios.post(
        'https://s64.notube.net/recover_weight.php',
        qs.stringify(datapt)
      )
      let tk = await axios.get(
        'https://notube.net/en/download?token=' + data.data.token
      )
      let $ = cheerio.load(tk.data)
    return {
      title: $('#breadcrumbs-section h2').text(),
      download: $('#breadcrumbs-section #downloadButton').attr('href'),
      size: await getsize($('#breadcrumbs-section #downloadButton').attr('href'))
    }
  }

ytmp4hd = async (link) => {
    const datapt = {
        url: link,
        format: 'mp4hd',
        lang: 'en',
      }
      let data = await axios.post(
        'https://s61.notube.net/recover_weight.php',
        qs.stringify(datapt)
      )
      let tk = await axios.get(
        'https://notube.net/en/download?token=' + data.data.token
      )
      let $ = cheerio.load(tk.data)
    return {
      title: $('#breadcrumbs-section h2').text(),
      download: $('#breadcrumbs-section #downloadButton').attr('href'),
      size: await getsize($('#breadcrumbs-section #downloadButton').attr('href'))
    }
  }

  ytmp3 = async (link) => {
    const datapt = {
        url: link,
        format: 'mp3',
        lang: 'en',
      }
      let data = await axios.post(
        'https://s64.notube.net/recover_weight.php',
        qs.stringify(datapt)
      )
      let tk = await axios.get(
        'https://notube.net/en/download?token=' + data.data.token
      )
      let $ = cheerio.load(tk.data)
    return {
      title: $('#breadcrumbs-section h2').text(),
      download: $('#breadcrumbs-section #downloadButton').attr('href'),
      size: await getsize($('#breadcrumbs-section #downloadButton').attr('href'))
    }
  }
module.exports = { ytmp3, ytmp4, ytmp4hd }
