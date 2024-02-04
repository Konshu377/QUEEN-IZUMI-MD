const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, getsize} = require('./lib/functions')

function btregex(dta) {
    const btn = '/({11})/'
    return h2k(btn.test(dta))
}
buttonMessage = async (gg, newmg) => {
    newmg.forEach((section, sectionIndex) => {
        let number = 1
        result += `\n*[${mainNumber}] ${section.title}*\n`;
        reply('*Select number' + number++ + sectionIndex + result)
        sectionIndex.push(Json(gg))
})
}

listMessage = async (gg, newmg) => {
    newmg.forEach((section, sectionIndex) => {
        let number = 1.0
        result += `\n*[${mainNumber}] ${section.title}*\n`;
        reply('*Select number' + number++ + sectionIndex + result)
        sectionIndex.push(Json(gg))
})
}

module.export = {listMessage, buttonMessage, btregex}