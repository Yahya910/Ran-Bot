const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.DATABASE.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'عمي اذهب لأولادك رجاء'
  if (age < 15) throw 'باكا انت صغير?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *Successful Registration* 」━━━━

╭─• 〘 معلومات 〙
│➥ الاسم: ${name}
│➥ العمر: ${age} سنة
╰──────•

Ketik ${usedPrefix}ضع أمر  sn للحصول على رمز 
يستعمل الرمز للخروج من الحساب
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <الاسم>.<العمر>')
handler.tags = ['xp', 'main']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
