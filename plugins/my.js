let fs = require('fs')
const thumb = fs.readFileSync('./src/bank.jpg')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { itsu }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.DATABASE.data.users[who]
let anu = `╭───❑ 「 البنك 」 ❑────
├─ 📇 *الاسم*: ${user.name}
├─ 🆔 *الرقم* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎨 *العمر* : ${user.registered ? '' + user.age : ''}
├─ 🎫 *الحد*:${user.limit}
├─ 💹 *الأموال*: ${user.money}
├─ 📍 *النقاط*: ${user.role}
├─ 💳 *البنك* : ${user.atm}
├─ 🎟 ️ *حد الألعاب* : ${user.glimit}
├─ 📊 *المستوى*: ${user.level}
╰─❑ ✨ *النقاط*:${user.exp}
`.trim()
itsu.sendButtonLoc(m.chat, thumb, anu, wm, 'الممتلكات', '#inv', m)
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler
