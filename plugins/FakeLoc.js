 let fs = require('fs')
 let handler  = async (m, { itsu, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'GOURAV',
                    jpegThumbnail: thumb3
                          }
                        }
                      }
itsu.sendMessage(m.chat, 'Hi Gourav',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['loc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^loc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler
