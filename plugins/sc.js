let handler  = async (m, { itsu, usedPrefix: _p }) => {
  case 'sc': case 'script': case 'help': case '?': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./src/elaina2.jpeg')},
                            hydratedFooterText: `𝗛𝗶 😌 ${pushname}
 𝗚𝗼𝘂𝗿𝗮𝘃
 
╭──────[𝗚𝗼𝘂𝗿𝗮𝘃 𝗠𝗘𝗡𝗨]
│💎𝗦𝗣𝗘𝗘𝗗 : ${latensie.toFixed(4)} 𝗦𝗘𝗖𝗢𝗡𝗗𝗦
│
│💎𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
│
│💎𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : 𝗚𝗼𝘂𝗿𝗮𝘃
│
│💎𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘: 𝗚𝗼𝘂𝗿𝗮𝘃
┃
┃💎𝗢𝗪𝗡𝗘𝗥: ${global.owner}
┃
┃💎𝗛𝗢𝗦𝗧: KALI LINUX MAC
┃
┃💎𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠: ${os.platform()}
╰─────────────────────⦁

`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: 'https://instagram.com/dark_devil_3609'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'GITHUB',
                                    url: 'https://github.com'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'LIST',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }

handler.help = ['sc']

handler.tags = ['main']

handler.command = /^sc$/i
handler.owner = false


module.exports = handler
