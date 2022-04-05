let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { itsu, args, text }) => {
  if (!text) throw 'Cari apa?'
  await m.reply('```Loading...```')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'Not Found'
  itsu.sendFile(m.chat, url, 'gimage', `
*── 「 صور قوقل 」 ──*
🛂 نتائج البحث: ${text}

❔ معلومات الصورة:
➸ *العرض*: ${width}
➸ *الطول*: ${height}
`.trim(), m, false,{thumbnail: global.thumb2})
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
