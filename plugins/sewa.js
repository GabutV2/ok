import pkg from '@adiwajshing/baileys'
import fs  from 'fs'

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = pkg

let handler = async (m, { conn }) => {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/thumbnail.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5326844927399395",
"title": `πππ°πππΌπ­ | γ πππ§π³-ππ¨π­π³ γ`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukaloπΏ`,
"footerText": `heheheπΏ`,
"priceAmount1000": "30000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "99999999",
"retailerId": `γ πππ§π³-ππ¨π­π³ γ`,
"url": "wa.me/6281384305905"
},
"businessOwnerJid": "6285664221805@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewa)$/i

export default handler
