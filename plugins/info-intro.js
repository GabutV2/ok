let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `*MEMBER BARU WAJIB INTRO*

Nama:
Umur:

*Semoga Betah Di Grup Ini😊*
`
conn.sendButtonDoc(m.chat, cap, botdate, ' Menu', '.menu', null, adReply)
}
handler.help = ['intro']
handler.tags = ['info']
handler.command = /^(intro)$/i

export default handler
