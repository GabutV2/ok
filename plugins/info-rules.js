import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://i.ibb.co/WzLBSqb/jnck.jpg'
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let anu =`
_Kebijakan privasi atau Private without being in public_



• *Kebijakan Privasi:*
1. nekobotyt-𝐁𝐨𝐭𝐳 tidak akan merekam data riwayat chat user.
2. nekobotyt-𝐁𝐨𝐭𝐳 tidak akan menyebarkan nomor users.
3. nekobotyt-𝐁𝐨𝐭𝐳 tidak akan menyimpan media yang dikirimkan oleh users.
4. nekobotyt-𝐁𝐨𝐭𝐳 tidak akan menyalah gunakan data data users.
5. Owner nekobotyt-𝐁𝐨𝐭𝐳 berhak melihat data riwayat chat users.
6. Owner nekobotyt-𝐁𝐨𝐭𝐳 berhak melihat status users.
7. Owner nekobotyt-𝐁𝐨𝐭𝐳 dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan nekobotyt-𝐁𝐨𝐭𝐳 Agar terhindar dari Suspand_

• *Peraturan nekobotyt-𝐁𝐨𝐭𝐳:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan nekobotyt-𝐁𝐨𝐭𝐳:*

1. nekobotyt-𝐁𝐨𝐭𝐳 akan keluar dari group jika ada salah satu member melanggar peraturan.
2. nekobotyt-𝐁𝐨𝐭𝐳 dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. nekobotyt-𝐁𝐨𝐭𝐳 tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. nekobotyt-𝐁𝐨𝐭𝐳 akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. nekobotyt-𝐁𝐨𝐭𝐳 bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
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