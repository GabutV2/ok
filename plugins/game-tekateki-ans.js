import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let user = db.data.users[m.sender]
    if (user.banned) return null
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*htek/i.test(m.quoted.text) || /.*htek/i.test(m.text))
        return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontekateki, m)
    if (m.quoted.id == this.tekateki[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontekateki, m)
        }
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            user.money += this.tekateki[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tekateki[id][2]} Money`, author, null, buttontekateki, m)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply(`*Salah!*`)
    }
    return !0
}
export const money = 0
