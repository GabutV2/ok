import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://i.ibb.co/WzLBSqb/jnck.jpg'
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let anu =`
• *Peraturan 𝑮𝒂𝒏𝒛-𝐁𝐨𝐭𝐳:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. Ketik .sewa Jika Ingin SewaBot
`
  conn.send2ButtonImg(m.chat, pepe, `  ${htki} *RULES* ${htka}`, anu, 'Menu', '.menu', 'Owner', '.owner',)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.group = false
handler.limit = false

handler.fail = null

export default handler
