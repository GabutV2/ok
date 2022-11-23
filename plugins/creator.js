import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Owner Ganz-Botz;;;\nFN:Owner Ganz-Botz\nORG:Owner Ganz-Botz\nTITLE:\nitem1.TEL;waid=6285664221805:+62 856-6422-1805\nitem1.X-ABLabel::Owner Ganz-Botz\nX-WA-BIZ-DESCRIPTION:Ada Yang Bisa Saya bantu?\nX-WA-BIZ-NAME:Owner Ganz-Botz Official\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }},)
  }
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
