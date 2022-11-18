let handler = async m => m.reply(`Thank To Dev Reii`.trim()) // Tambah sendiri kalo mau
handler.help = ['thanks']
handler.tags = ['info']
handler.command = /^thanks|terima kasih|terimakasih$/i

export default handler