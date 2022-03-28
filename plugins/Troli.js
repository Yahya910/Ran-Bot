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
                    orderMessage: {
                            itemCount : 3609,
                            itemCoun : 3609,
                            surface : 404,
                            message: 'gou',
                            orderTitle: 'G',
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
itsu.sendMessage(m.chat, 'uwu',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['troli']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^troli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler
