// Da Crédito Puta

//npm
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const util = require('util')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const image = JSON.parse(fs.readFileSync('./database/img.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))
//Config
const { covidindo } = require("./config/covidindo.js")
const { covidworld } = require("./config/covidworld.js")
const { cnn } = require("./config/cnn.js")
const { Gempa } = require("./config/gempa.js");
const { herolist } = require("./config/herolist.js")
const { herodetails } = require("./config/herodetail.js")

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Felix😎🤙🏻\n' 
            + 'ORG:Creador De FX-BOT-V72\n' 
            + 'TEL;type=CELL;type=VOICE;waid=12603763944:+1 (260) 376-3944\n' 
            + 'END:VCARD'

//wa connect
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//=================================================//
prefix = '.'
hit_today = []
blocked = []
banChats = false
offline = false
targetpc = setting.targetpc 
owner = setting.ownerNumber
nombrebot = setting.nombrebot
fake = setting.fake
numbernye = '0'
tz = setting.tz 
fx = setting.fx
textbajo = setting.textbajo
waktu = '-'
alasan = '-'
promote = setting.promote
numbernye = '0'
demote = setting.demote
leave = setting.leave
//=================================================//
async function starts() {
	const fxbot = new WAConnection()
	fxbot.logger.level = 'warn'
	console.log(banner.string)
	console.log(color('[ BOT]','aqua'), color("BOT BY FELIXCRACK 409", "yellow"))
	console.log('>', '[',color('INFO','blue'),']','Suscribete A Felixcrack 409...')
	fxbot.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea El Código QR De Arriba'))
	})

	fs.existsSync('./session.json') && fxbot.loadAuthInfo('./session.json')
	fxbot.on('connecting', () => {
	console.log(color('> [ INFO ]', 'white'), color('Conectando...'))
	})
	fxbot.on('open', () => {
	console.log(color('> [ INFO ]', 'white'), color('Ya me conecte 👌🏻'))
	})
		await fxbot.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(fxbot.base64EncodedAuthInfo(), null, '\t'))
//Banned Call
fxbot.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        fxbot.sendMessage(callerId, "Sistema De Bloqueo Automático, NO LLAMES POR FAVOR", MessageType.text)
        await sleep(4000)
        await fxbot.blockUser(callerId, "add")
})
//Welkom
	fxbot.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await fxbot.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await fxbot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `┏━━━━━━━━━━━━━━━━━
┃          「 *𝗛𝗢𝗟𝗔* 」
┃@${num.split('@')[0]}👋
┃BIENVENIDO AL GRUPO 
┃*${mdata.subject}*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃   「 *_BIENVENIDO_* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️ *Suscríbete*:
┠⊷️*http://bit.ly/2ZUH2jP
┠⊷️ *Grupo Oficial*:
┠⊷️ *http://bit.ly/3hpkba4
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️「 *DESCRIPCIÓN* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
  ${mdata.desc}*
┗━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				fxbot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await fxbot.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*@${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				fxbot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await fxbot.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await fxbot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			fxbot.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await fxbot.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await fxbot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙎𝙀 𝙈𝘼𝙏𝙊 𝘼 𝙐𝙉 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Dato : Reciente\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			fxbot.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	// Chat Update
fxbot.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const meNumber = fxbot.user.jid.split("@")[0]
		const botNumber = fxbot.user.jid
		const ownerNumber = ['12603763944@s.whatsapp.net'] //felix owner
//SETTING WeA
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const isOwner = ownerNumber.includes(sender)
		const isMe = botNumber.includes(senderme)
		const isBanned = ban.includes(sender)
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isImage = isGroup ? nsfw.includes(from) : false
		const totalchat = await fxbot.chats.all()
		const groupMetadata = isGroup ? await fxbot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isWelkom = isGroup ? welkom.includes(from) : false		
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? fxbot.user.jid : fxbot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? fxbot.user.name : conts.notify || conts.vname || conts.name || '-'
       
        //MESS
        
		mess = {
			wait: '「 ❗ 」 En Proceso, Aguarda!',
			success: '「 ❗ 」 Uff Comando Con Exito',
			wrongFormat: '「 ❗ 」 Wey No Seas Pendejo Escribe Bien El Formato',
			waitmusic: '「 ❗ 」 Espera! Estoy buscando tu musica\nEn cuánto la encuentre la envío!!',
			waitimg: '「 ❗ 」 Espera! Estoy creando tu imagen!',
			nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
			imageoff: '「 ❗ 」No Puedo Enviar Fotos Mientras No Esta Activa La Función!',
			error: {
				stick: '「 ❗ 」F no se pudo convertir:/',
				Iv: '「 ❗ 」Link Invalido Weon'
			},
			only: {
				group: '「 ❗ 」Este Comando Solo Puede Ser Usado En Grupos',
				admin: '「 ❗ 」No Eres Admin 💩',
				Badmin: '「 ❗ 」 Necesito Ser Admin Para Este Comando'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            fxbot.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            fxbot.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? fxbot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : fxbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
                 fxbot.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
        }
        //FAKEH
const fakekontak = (teks) => {
fxbot.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


			

        const fakethumb = (teks, yes) => {
            fxbot.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            fxbot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            fxbot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 const faketoko = (teks) => {
 fxbot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `Hola UwU ${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	fxbot.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        fxbot.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    fxbot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            fxbot.sendMessage(mek.key.remoteJid,`@${owner} Actualmente el bot está fuera de linea!\n\n *Desde* ${alasan}\n *Hace :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPor favor contacta de nuevo más tarde`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        fxbot.sendMessage(mek.key.remoteJid,`@${owner} Actualmente el bot está fuera de linea!\n\n *Desde* ${alasan}\n *Hace :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos lalu\n\nPor favor contacta de nuevo más tarde`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //> Level <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- function level bar --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Bronze l'
   	     if (levelRole <= 3) {
   	         role = 'Bronze ll'
   	     } else if (levelRole <= 5) {
   	         role = 'Bronze lll'
   	     } else if (levelRole <= 7) {
   	         role = 'Oro l'
   	     } else if (levelRole <= 8) {
   	         role = 'Oro ll'
   	     } else if (levelRole <= 9) {
   	         role = 'Oro lll'
   	     } else if (levelRole <= 10) {
   	         role = 'Platino l'
   	     } else if (levelRole <= 11) {
   	         role = 'Platino ll'
   	     } else if (levelRole <= 12) {
   	         role = 'Platino lll'
   	     } else if (levelRole <= 13) {
   	         role = 'Diamante l'
   	     } else if (levelRole <= 14) {
   	         role = 'Diamante ll'
   	     } else if (levelRole <= 14) {
   	         role = 'Diamante lll'
   	     } else if (levelRole <= 15) {
   	         role = 'Diamante llll'
   	     } else if (levelRole <= 16) {
   	         role = 'Heroico l'
   	     } else if (levelRole <= 17) {
   	         role = 'Heroico ll'
   	     } else if (levelRole <= 18) {
   	         role = 'Heroico lll'
   	     } else if (levelRole <= 19) {
   	         role = 'Gran Maestro l'
   	     } else if (levelRole <= 20) {
   	         role = 'Gran Maestro ll'
   	     } else if (levelRole <= 21) {
   	         role = 'Gran Maestro lll'
   	     } else if (levelRole <= 22) {
   	         role = 'Lider Supremo'
   	     } else if (levelRole <= 23) {
   	         role = 'Titan😈'
   	     }
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`\n*「 FELICIDADES 」*\n┌ *Nombre* : ${pushname}\n├ *Número* : wa.me/${sender.split("@")[0]}\n├  *Xp* : ${getLevelingXp(sender)}\n├ *Role*: ${role}\n└  *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Buenos Dias 🌝👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Buenos Dias 🌝👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Buenas Noches 🌚'
        } else {
          ucapanWaktu = 'Buenas Noches 🌚'
        }
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))
//selfmode
		if (!mek.key.fromMe && banChats === true) return
//botna
switch (command) {
  case prefix+ 'menu':
  case prefix+ 'help':
  case prefix+ '?':
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = fxbot.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var menu = `╭──────────────❏ 
│❍➣ *INFO DE MI CREADOR*
╰──────────────❏ 
╭──────────────❏ 
│❍➣ ${fx}${prefix}creador${fx}
│❍➣ ${fx}${prefix}canal${fx}
│❍➣ ${fx}${prefix}grupo${fx}
│❍➣ ${fx}${prefix}bot${fx}
╰──────────────❏ 
╭──────────────❏ 
│ Hola ${pushname}  👋🏻
├──────────────❏ 
│ ❍➣ Prefijo:「 ${prefix} 」
├──────────────❏ 
│ ❍➣ Creador: Felixcrack 409
├──────────────❏ 
│ ❍➣ Conección: BaiLeys
├──────────────❏ 
│ ❍➣ Grupo:
│ ❍➣ ${groupMetadata.subject}
├──────────────❏
│ ❍➣ Número de chats:
│ ❍➣ ${totalchat.length}
├──────────────❏ 
│ ❍➣ Modo: Encendido
├──────────────❏ 
│ ❍➣ Grupo Oficial
│ ❍➣ http://bit.ly/Felixcrack-GRUPO
╰──────────────❏ 
╭───❏  *OWNER MENU*
│⊷️ ${fx}${prefix}off${fx}
│⊷️ ${fx}${prefix}ban${fx}
│⊷️ ${fx}${prefix}unban${fx}
│⊷️ ${fx}${prefix}on${fx}
│⊷️ ${fx}${prefix}self${fx}
│⊷️ ${fx}${prefix}public${fx}
│⊷️ ${fx}${prefix}peson${fx}
│⊷️ ${fx}${prefix}pesoff${fx}
│⊷️ ${fx}${prefix}spam${fx}
│⊷️ ${fx}${prefix}delete${fx}
│⊷️ ${fx}${prefix}spam${fx}
│⊷️ ${fx}${prefix}mute${fx}
│⊷️ ${fx}${prefix}unmute${fx}
│⊷️ ${fx}${prefix}delete${fx}
│⊷️ ${fx}${prefix}setfake${fx}
│⊷️ ${fx}${prefix}setfakeimg${fx}
│⊷️ ${fx}${prefix}setprefix${fx}
│⊷️ ${fx}${prefix}setthumb${fx}
│⊷️ ${fx}${prefix}settarget${fx}
╰───❏ 
╭───❏  *INFO MENU*
│⊷️ ${fx}${prefix}covidindo${fx}
│⊷️ ${fx}${prefix}covidworld${fx}
│⊷️ ${fx}${prefix}cnn${fx}
│⊷️ ${fx}${prefix}infogempa${fx}
│⊷️ ${fx}${prefix}get${fx}
╰───❏ 
╭───❏  *RANGOS*
│⊷️ ${fx}${prefix}rankgay${fx}
│⊷️ ${fx}${prefix}ranklindo${fx}
╰───❏ 
╭───❏  *NSFW MENU
│⊷️ ${fx}${prefix}revip${fx}
│⊷️ ${fx}${prefix}avatar${fx}
│⊷️ ${fx}${prefix}loli${fx}
│⊷️ ${fx}${prefix}waifu${fx}
│⊷️ ${fx}${prefix}husbu${fx}
│⊷️ ${fx}${prefix}image${fx}
│⊷️ ${fx}${prefix}pinterest${fx}
│⊷️ ${fx}${prefix}anime${fx}
│⊷️ ${fx}${prefix}wallpaperanime${fx}
│⊷️ ${fx}${prefix}nsfwavatar${fx} 
│⊷️ ${fx}${prefix}nekopoi${fx}  
│⊷️ ${fx}${prefix}hentai${fx} 
╰───❏ 
╭───❏  *MENU BÁSICO*
│⊷️ ${fx}${prefix}sticker${fx}
│⊷️ ${fx}${prefix}swm${fx}
│⊷️ ${fx}${prefix}take${fx}
│⊷️ ${fx}${prefix}fdeface${fx}
│⊷️ ${fx}${prefix}emoji${fx}
│⊷️ ${fx}${prefix}attp${fx}
╰───❏ 
╭───❏  *CONVERTIDOR MENU*
│⊷️ ${fx}${prefix}toimg${fx}
│⊷️ ${fx}${prefix}tovid${fx}
│⊷️ ${fx}${prefix}tomp3${fx} 
│⊷️ ${fx}${prefix}slow${fx}
│⊷️ ${fx}${prefix}fast${fx}
│⊷️ ${fx}${prefix}reverse${fx}
│⊷️ ${fx}${prefix}tourl${fx}
╰───❏ 
╭───❏  *MENU MENU*
│⊷️ ${fx}${prefix}upswteks${fx}
│⊷️ ${fx}${prefix}upswimage${fx}
│⊷️ ${fx}${prefix}upswvideo${fx}
╰───❏ 
╭───❏  *DOWNLOAD MENU* 
│⊷️ ${fx}${prefix}ig${fx} 
│⊷️ ${fx}${prefix}play${fx}
│⊷️ ${fx}${prefix}video${fx} 
│⊷️ ${fx}${prefix}tiktok${fx} 
│⊷️ ${fx}${prefix}tiktokaudio${fx} 
│⊷️ ${fx}${prefix}fb${fx} 
│⊷️ ${fx}${prefix}tiktokaudio${fx} 
│⊷️ ${fx}${prefix}ytmp3${fx} 
│⊷️ ${fx}${prefix}ytmp4${fx} 
╰───❏ 
╭───❏  *BÚSQUEDA MENU* 
│⊷️ ${fx}${prefix}ytsearch${fx} 
│⊷️ ${fx}${prefix}twitter${fx} 
│⊷️ ${fx}${prefix}tagall${fx}
│⊷️ ${fx}${prefix}igstalk${fx}
│⊷️ ${fx}${prefix}brainly${fx} 
╰───❏ 
╭───❏  *GRUPO MENU*
│⊷️ ${fx}${prefix}add${fx} 
│⊷️ ${fx}${prefix}kick${fx} 
│⊷️ ${fx}${prefix}promote${fx} 
│⊷️ ${fx}${prefix}infogrupo${fx} 
│⊷️ ${fx}${prefix}demote${fx} 
╰───❏ 
╭───❏  *TAG MENU*
│⊷️ ${fx}${prefix}contac${fx} 
│⊷️ ${fx}${prefix}hidetag${fx} 
│⊷️ ${fx}${prefix}sticktag${fx}
│⊷️ ${fx}${prefix}giftag${fx}
│⊷️ ${fx}${prefix}doctag${fx} 
│⊷️ ${fx}${prefix}kontag${fx} 
│⊷️ ${fx}${prefix}totag${fx}
╰───❏ 
╭───❏  *CREACIÓN MENU*
│⊷️ ${fx}${prefix}snowtext${fx} 
│⊷️ ${fx}${prefix}glitchtext${fx} 
│⊷️ ${fx}${prefix}shadow${fx}
│⊷️ ${fx}${prefix}naruto${fx}
│⊷️ ${fx}${prefix}underwater${fx} 
│⊷️ ${fx}${prefix}smoke${fx} 
│⊷️ ${fx}${prefix}candy${fx}
│⊷️ ${fx}${prefix}lava${fx} 
│⊷️ ${fx}${prefix}taza${fx}
╰───❏ 
╭───❏  *INFO BOT MENU*
│⊷️ ${fx}${prefix}ping${fx}
│⊷️ ${fx}${prefix}term${fx}
│⊷️ ${fx}${prefix}runtime${fx}
│⊷️ ${fx}${prefix}speed${fx}
╰──❏`
        	faketokoforwaded(menu)
           	break

case prefix+ 'snowtext':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(10)				  
				anu = await getBuffer(`https://api.xteam.xyz/textpro/snowtext?text=${F}&APIKEY=10b9f9398549cb23`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'glitchtext':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(11)				  
				anu = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${F}=Api&APIKEY=10b9f9398549cb23`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'lava':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(5)				  
				anu = await getBuffer(`https://api.xteam.xyz/textpro/lava?text=${F}&APIKEY=10b9f9398549cb23`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'shadow':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(7)				  
				anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/shadow?text=${F}`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'naruto':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(7)				  
				anu = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${F}`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'underwater':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(11)				  
				anu = await getBuffer(`https://api.xteam.xyz/photooxy/underwaterocean?text=${F}&APIKEY=10b9f9398549cb23`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'smoke':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(6)				  
				anu = await getBuffer(`https://api.xteam.xyz/photooxy/smoke?text=${F}&APIKEY=10b9f9398549cb23`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'candy':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(6)				  
				anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/candy?text=${F}`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'taza':
				if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
				reply(mess.waitimg)
				F = body.slice(5)				  
				anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/textoncup?text=${F}`)
				fxbot.sendMessage(from, anu, image, {caption: `${textbajo}`, quoted: mek })
				break
case prefix+ 'ranklindo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./lib/lindo.jpg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯────────────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻𝚒𝚗𝚍𝚘𝚜😘\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          fxbot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
case prefix+ 'creador':
await fxbot.sendMessage(from, {displayname: "Félix🧙‍♂️", vcard: vcard}, MessageType.contact)
break
case prefix+ 'rankgay':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./lib/gay.jpeg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `●❯────────────────❮●\n🏳️‍🌈𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙶𝚊𝚢🏳️‍🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          fxbot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
case prefix+ 'rankfeo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./lib/feo.jpg`)
          jds = []
          const JSD = groupMembers
          const HSY = groupMembers
          const YSS = groupMembers
          const YASJ = JSD[Math.floor(Math.random() * JSD.length)]           
          const KSJC = HSY[Math.floor(Math.random() * HSY.length)]
          const TSHD = YSS[Math.floor(Math.random() * YSS.length)]
          D11 = `●❯────────────────❮●\n😨𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙵𝚎𝚘𝚜😨\n@${YASJ.jid.split('@')[0]} \n😨\n@${KSJC.jid.split('@')[0]}\n😨\n@${TSHD.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(YASJ.jid)
          jds.push(KSJC.jid)
          jds.push(TSHD.jid)
          fxbot.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break
                
case prefix+ 'infogrupo':		
if (!isGroup) return reply(mess.only.group)
                    fxbot.updatePresence(from, Presence.composing)
                    perfilg = await fxbot.getProfilePicture(from)
                    enlacegc = await fxbot.groupInviteCode (from)                    
		  	  	fxbot.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Grupo ${groupName}`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
					ppUrl = await fxbot.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		        	fxbot.sendMessage(from, buffer, image, {quoted: mek, caption: `┏━━━━━━━━━━━━━━━━━\n┠⊷️Grupo: \n┠⊷️${groupName}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Miembros: ${groupMembers.length}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Admins: ${groupAdmins.length} \n┏━━━━━━━━━━━━━━━━━\n┠⊷️Usuarios Online: \n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Link: https://chat.whatsapp.com/${enlacegc}\n┗━━━━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━━━━\n┠⊷️Desc: ${groupMetadata.desc}\n┗━━━━━━━━━━━━━━━━━`})
		    		break
case prefix+ 'canal':
tuh = fs.readFileSync(`./lib/canal.jpg`)
                    teks = `Canal De Felixcrack 409\nLink: https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA\n SUSCRÍBETE ES GRATIS!! ❤️`
		            fxbot.sendMessage(from, tuh, image, { quoted: mek, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case prefix+ 'antilink':
                    if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo 🙄')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito✔️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break

    case prefix+ 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus('We Dejame Dormir-_-')
            break       
            case prefix+ 'ban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case prefix+ 'unban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break
    case prefix+ 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' A mimir 😴')
            break
    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break



 //Set Owner For gc
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
					case prefix+ 'peson':
					  fxbot.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  break
					  case prefix+ 'pesoff':
					    fxbot.toggleDisappearingMessages(from, 0)
					    break
case prefix+ 'tagall':
                if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Mensaje:* ${body.slice(8)}\n*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ FX ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					break
case prefix+ 'hits':
                    var itsme = `0@s.whatsapp.net`
			   	 var split = `Total De Hits: ${hit_today.length}`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
                    teks = ('Hola Wenas Soy  Bot Y Estos Son Mis Hits, Posdata Cobre Vida')
                    fxbot.sendMessage(from, teks, MessageType.text, selepbot, {quoted: mek }) 
                    break

            case prefix+ 'spam':
                if (!isMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
                if (!arg) return reply(`Usar ${prefix}spam teks|jumlahspam`)
                argz = arg.split("|")
                if (!argz) return reply(`Ejemplo ${prefix}spam teks|jumlah`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argz[1]; i++){
                fxbot.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
	        break

             case prefix+ 'mute':
                if (!isMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
                fxbot.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Éxito Al Silenciar Este Chat*')
                console.log('Chat Mudo = ' + from)
                break
            case prefix+ 'unmute':
                if (!isMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
                fxbot.modifyChat(from, ChatModification.unmute)
                reply('*Exitoso Desilencia Este Chat*')
                console.log('Éxito Dejar De Silenciar El Chat = ' + from)
                break
            case prefix+ 'delete':
                if (!isMe) return reply('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
                reply('*Éxito Eliminar Este Chat*')
                console.log('Éxito Al Eliminar Chat = ' + from)
                fxbot.modifyChat(from, ChatModification.delete)
                break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
	  if (isMe) return('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Exito Al Cambiar El Fake: ${q}`)
			break
	case prefix+ 'setfakeimg':
	  if (isMe) return('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await fxbot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('ÉXITO')
        	} else {
            reply(`Enviar Foto Con Subtítulo ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setprefix':
	  if (isMe) return('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
			prefix = q
			fakegroup(`Prefijo De Cambio A: ${q}`)
			break
	case prefix+ 'setthumb':
		  if (isMe) return('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await fxbot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Éxito')
        	} else {
            reply(`Envía una imagen con una leyenda ${prefix}sethumb`)
          	}
			break	
    case prefix+ 'settarget':
	  if (isMe) return('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Éxito Cambiando el objetivo de targetpc: ${targetpc}`)
            break
case prefix+ 'term':
if (!isMe) return reply('Solo propietarios...')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`fxbot@self:~$ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
//INFORMATION
    case prefix+ 'covidindo':
                ci = await covidindo()
                var { kasus, kematian, sembuh } = ci[0]
                reply(`Casos: ${kasus}\n\nMuertos: ${kematian}\n\nrRecuperados : ${sembuh}`)
                break
    case prefix+ 'covidworld':
                 cw= await covidworld()
                var { kasus, kematian, sembuh } = cw[0]
                reply(`Casos: ${kasus}\n\nMuertos: ${kematian}\n\nRecuperados: ${sembuh}`)
                break
    case prefix+ 'cnn':
                var result = await cnn()
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                fxbot.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
    case prefix+ 'infogempa':
                tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                fxbot.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
//tools
     case prefix+ 'get':
     case prefix+ 'captura':
      if(!q) return reply('Y El Pvto Link?')
			.then(res => res.json())
			qweryna = args.join(' ')
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			buffqw = await getBuffer(eses.data.screenshot)
			fxbot.sendMessage(from, buffqw, image, {quoted: mek})
			.catch(err => {
				return('Intentando De Nuevo, Ocurrió Un Error Hace Un Momento...')
			})
			break
    case prefix+ 'revip':
			if (args.length < 1) return reply('Domain/Ip nya mana bang??')
			var qwery = args.join(' ')
			var repip = await fetchJson(`https://sonar.omnisint.io/reverse/${qwery}`)
			fxbot.sendMessage(from, `${repip}`, text)
      .catch((error) => {
            reply('Invalid domain/ip'); 
            })
			break
//WIBU
case prefix+ 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				fxbot.sendMessage(from, avatars, image, {quoted: mek})
			break
		case prefix+ 'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				fxbot.sendMessage(from, loliz, image, {quoted: mek})
			break
		case prefix+ 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			fxbot.sendMessage(from, nyed, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Repitiendo hay un error...')
			})
			break
	case prefix+ 'husbu':
			husbud = await fetchJson(`https://api.fdci.se/rep.php?gambar=husbu`)
			sasu = JSON.parse(JSON.stringify(husbud));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			fxbot.sendMessage(from, nye, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Intentando De Nuevo, Ocurrió Un Error Hace Un Momento...')
			})
			break
//IMAGE
case prefix+ 'image':
if (!isImage) return reply(mess.imageoff)
            if (args.length < 1) return reply('¡Ingrese texto!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            fxbot.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case prefix+ 'pinterest':
if (!isImage) return reply(mess.imageoff)
			goblog = args.join(" ")
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${goblog}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			fxbot.sendMessage(from, nye, image, { caption: 'Hmmm', quoted: mek })
			.catch(err => {
				return('Que estas buscando ?')
			})
			break
    case prefix+ 'anime':
    if (!isNsfw) return reply(mess.nsfwoff)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            fxbot.sendMessage(from,media,image,{quoted:mek,caption:'${textbajo}'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case prefix+ 'bc':
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (args.length < 1) return reply('.......')
					anu = await fxbot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					bc = await fxbot.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					fxbot.sendMessage(_.jid, buff, image, {caption: `[ *${nombrebot} ANUNCIO* \n\n${body.slice(4)}`, sendEphemeral: true})
					}
					reply('*_Anuncio Dado Con Éxito_* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${nombrebot} ANUNCIO* ]\n\n${body.slice(4)}`)
					}
					reply('*_Anuncio Dado Con Éxito_* ')
					}
					break
case prefix+ 'nsfw':
					if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
case prefix+ 'img':
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isImage) return reply(`「 ❗ 」La Funcion De Imágenes Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/img.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó Con Éxito La Función De Imágenes En Este Grupo`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/img.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Imágenes En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
case prefix+ 'gc':
case prefix+ 'gp':
case prefix+ 'grup':
case prefix+ 'group':
case prefix+ 'grupoo':
case prefix+ 'grup':
case prefix+ 'g':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`「 ❗ 」ESTA FUNCION SOLO SE PUEDE USAR CUANDO EL BOT ES ADMIN.`)
					if (args[0] === 'abrir') {
					    reply(`*GRUPO ABIERTO CON ÉXITO ✓*`)
						fxbot.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`*GRUPO CERRADO CON ÉXITO✓*`)
						fxbot.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
	case prefix+ 'wallpaperanime':
	if (!isNsfw) return reply(mess.nsfwoff)
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			fxbot.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'nsfw':
					if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
//HARAM FEATURE
case prefix+ 'nsfwavatar':
if (!isNsfw) return reply(mess.nsfwoff)
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				fxbot.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})	
			break
case prefix+ 'nekopoi':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'grupo':
buffer = await getBuffer(`https://telegra.ph/file/a3d623676c5a237f4ac86.jpg`)
					fxbot.sendMessage(from, buffer, image, {quoted: mek, caption: 'Link del grupo Felixcrack BOT OFC, Todos son bienvenidos!! 🤗\n-https://chat.whatsapp.com/DAheuNgcvCj92UNcZFTKEo'})
break
case prefix+ 'pussy':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
if (!isNsfw) return reply(mess.nsfwoff)
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				fxbot.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'oppai':
if (!isNsfw) return reply(mess.nsfwoff)
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			fxbot.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			break
case prefix+ 'feetg':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'welcome':  
					if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('[❗] 1 Para activar/ 0 Para desactivar')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*Ya estaba activo 🙄* !!!')
					welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('[❗] SE ACTIVO LA FUNCIÓN DE: WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SE DESACTIVO: WELCOME')
					} else {
					reply(`......`)
					}
					break  
case prefix+ 'bj':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'ero':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			fxbot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			break
case prefix+ 'erok':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/erok')
			bufero = await getBuffer(eroz.data.url)
			fxbot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			break
case prefix+ 'erokemo':
if (!isNsfw) return reply(mess.nsfwoff)
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			fxbot.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'eroyuri':
if (!isNsfw) return reply(mess.nsfwoff)
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			fxbot.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'tickle':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'feed':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'kuni':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'femdom':
if (!isNsfw) return reply(mess.nsfwoff)
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				fxbot.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'futanari':
if (!isNsfw) return reply(mess.nsfwoff)
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			fxbot.sendMessage(from, futanz, image, { quoted: mek })
			break
case prefix+ 'les':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'trap':
if (!isNsfw) return reply(mess.nsfwoff)
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			fxbot.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'pat':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'boobs':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'blowjob':
if (!isNsfw) return reply(mess.nsfwoff)
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			fxbot.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			break
	case prefix+ 'hentai':
	if (!isNsfw) return reply(mess.nsfwoff)
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			fxbot.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			break
	case prefix+ 'hololewed':
	if (!isNsfw) return reply(mess.nsfwoff)
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			fxbot.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Hazte Weón..')
			})
			break
case prefix+ 'lewd':
if (!isNsfw) return reply(mess.nsfwoff)
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			fxbot.sendMessage(from, buflewd, image, { quoted: mek })
			
			break
	case prefix+ 'lewdk':
	if (!isNsfw) return reply(mess.nsfwoff)
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			fxbot.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Hazte Weon😑🔪..')
			})
			break
case prefix+ 'imgtag':
					if (!isGroupAdmins) return reply(mess.only.admin)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: lol
                        filePath = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await fxbot.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        fxbot.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Responde A Una Imagen!!`)
                    }
                    break
case prefix+ 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			fxbot.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'goose':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
if (!isNsfw) return reply(mess.nsfwoff)
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			fxbot.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
	case prefix+ 'anal':
	if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
if (!isNsfw) return reply(mess.nsfwoff)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			fxbot.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'kiss':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'keta':
if (!isNsfw) return reply(mess.nsfwoff)
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			fxbot.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'cum':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				fxbot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'cumimage':
if (!isNsfw) return reply(mess.nsfwoff)
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			fxbot.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'oppai':
if (!isNsfw) return reply(mess.nsfwoff)
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			fxbot.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
case prefix+ 'holoero':
if (!isNsfw) return reply(mess.nsfwoff)
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			fxbot.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			break
//MAKER
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            F = body.slice(6)				  
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await fxbot.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                fxbot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            fxbot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Envía una imagen con una leyenda ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
    
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            fxbot.sendMessage(from, 'Hay un error', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            fxbot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=1, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            fxbot.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            fxbot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=30, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Envía una imagen con una leyenda ${prefix}swm teks|teks o etiquetar imágenes que ya se han enviado`)
            }
            break
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, fxbot, mek, from)
			break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await fxbot.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await fxbot.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		fxbot.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case prefix+ 'emoji':
			if (!q) return fakegroup('Y El Puto Emoji Pedazo De Gil?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply('Solo Un Emoji Weon'); 
            })
    		break
case prefix+ 'attp':
						if (args.length < 1) return reply(`Y El Texto??\n> *Ejemplo* : *${prefix}attp* Felixcrack`)
						 var itsme = `0@s.whatsapp.net`
			   	 var split = `Texto De Colores UwU`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
fxbot.sendMessage(from, attp2, MessageType.sticker, selepbot, {quoted: mek })
						break
case prefix+ 'attp2':
						if (args.length < 1) return reply(`Y El Texto??\n> *Ejemplo* : *${prefix}attp* Felixcrack`)
						 var itsme = `0@s.whatsapp.net`
			   	 var split = `Texto De Colores UwU`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
attp2 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=kingsboybot&text=${body.slice(6)}`)
fxbot.sendMessage(from, attp2, MessageType.sticker, selepbot, {quoted: mek })
						break
//MAKERIMAGE
//COMINGSOON
//CONVERTER
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('Responde A Un 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await fxbot.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Bueno, falló, inténtalo de nuevo ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'${textbajo}')
			fs.unlinkSync(ran)
			})
			break
    case prefix+ 'tovid':
    case prefix+ 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await fxbot.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('Responder A Un Stiker')
            }
            fs.unlinkSync(owgi)
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Responder a un video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            fxbot.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup('Responde A Un Vídeo, Y No Te Hagas Pndj!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            fxbot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup('Responder A Un Video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            fxbot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup('Responde A Un Vídeo, Y No Te Hagas Pndj!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await fxbot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            fxbot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await fxbot.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
//Upload Story WeA
    case prefix+ 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            fxbot.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await fxbot.downloadMediaMessage(swsw)
            fxbot.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            fxbot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await fxbot.downloadMediaMessage(swsw)
            fxbot.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            fxbot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Responde A Un Vídeo, Y No Te Hagas Pndj!')
            }
            break
			case prefix+ 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|Hola|Hola juga`)
            var gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            fxbot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
//MOBIL LEJEN
case prefix+ 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
faketokoforwaded(listt)
})
break
      case prefix+ 'herodetail':
        res = await herodetails(body.slice(12))
        her = `*Detalles del hero ${body.slice(12)}*

*Nombre* : ${res.hero_name}
*Papel* : ${res.role}
*Citas* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durabilidad* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
faketokoforwaded(her)
break
//Downloader
	case prefix+ 'play':
			if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El título de la musica para buscar_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link*: ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El título del video para buscar_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El link del video para descargar`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captions = `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 		case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`Enviar  comando *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*DESCARGADOR DE VIDEO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captionsYtmp4 = `*Video Encontrado!*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await fxbot.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Título: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Duración: ' + video.timestamp + '\n'
		            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Y El Pvto Link?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    fxbot.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'${textbajo}'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            fxbot.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'${textbajo}'})
	    }
            }
	    })
	    break
    case prefix+ 'igstalk':
            if (!q) return fakegroup('Y El Nombre De Usuário?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Nombre de usuario* : ${args.join('')}\n*Nombre completo* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Seguidores* : ${Y.following}\n*Siguiendo* : ${Y.followers}\n*Privado* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case prefix+ 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Y El Pvto Link?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
 	case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Y El Pvto Link?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Título* : ${text}\n*Link* : ${a.data}`
		fxbot.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Y El Pvto Link?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		fxbot.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'fb':
            if (!q) return reply('Y El Pvto Link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('lo siento hermano:('); 
            })
})
            break 
//Learn
case prefix+ 'brainly':
			if (args.length < 1) return reply('Que clase de pregunta es esa?')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			fxbot.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case prefix+ 'google':
      if(!q) return reply('¿Qué estás buscando??')
			.then(res => res.json())
			afanya = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${afanya}&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			fxbot.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Intentando De Nuevo, Ocurrió Un Error Hace Un Momento...')
			})
			break
	//Group Feature
case prefix+ 'add':
if (!isGroup) return reply(mess.only.group)
reply ('Comando Deshabilitado, Debido A Que Enviaba El Número Del Bot A Soporte.')
break
case prefix+ 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a alguien!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Eliminare a 🥵 :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
fxbot.groupRemove(from, mentioned)
					} else {
mentions(`Adios Joto... @${mentioned[0].split('@')[0]}`, mentioned, true)
fxbot.groupRemove(from, mentioned)
}
break
case prefix+ 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Ok, Le Daré Admin\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
fxbot.groupRemove(from, mentioned)
} else {
mentions(`Ok @${mentioned[0].split('@')[0]} ahora eres administrador!`, mentioned, true)
fxbot.groupMakeAdmin(from, mentioned)
}
break
case prefix+ 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Weno, Le quitaré admin a\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
fxbot.groupRemove(from, mentioned)
} else {
mentions(`Oke @${mentioned[0].split('@')[0]} Ya no eres admin😂!`, mentioned, true)
fxbot.groupDemoteAdmin(from, mentioned)
}
break//DONE
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await fxbot.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await fxbot.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'contac':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Numero de telefono invalido');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            fxbot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
 	case prefix+ 'hidetag':
			if (!mek.key.fromMe) return fakestatus('FX-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await fxbot.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			fxbot.sendMessage(from, optionshidetag, text)
			break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await fxbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            fxbot.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Etiqueta un sticker*`)
            }
            break
		    case prefix+ 'giftag':
		      //by Dehanjing
                if (!isQuotedVideo) return reply(`Responder Gif con subtítulo ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await fxbot.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await fxbot.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                fxbot.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case prefix+ 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Reply Document dengan caption *${prefix + command}*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await fxbot.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await fxbot.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                fxbot.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case prefix+ 'contag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            fxbot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await fxbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            fxbot.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await fxbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            fxbot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await fxbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            fxbot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await fxbot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await fxbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            fxbot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
//OTHER 
    case prefix+ 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
            var response = await fxbot.acceptInvite(codeInvite)
            fakestatus('ÉXITO')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case prefix+ 'runtime':
    case prefix+ 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Velocidad: ${latensi.toFixed(4)} Segundo*`
			fakegroup(pingnya)
			})
			break  

//Maker


					case prefix+ 'level':
                if (!isGroup) return reply(mess.only
.group)
                const Level = getLevelingLevel(sender)
                const Xp = getLevelingXp(sender)
                if (Level === undefined && Xp === undefined) return reply('Eh?')
                const requiredXp = 5000 * (Math.pow(2, Level) - 1)
                resul = `┌──⫶ *|ɘviͶ* ⫶──\n├ *Nombre* : ${pushname}\n├ Número : wa.me/${sender.split("@")[0]}\n├ XP :  ${Xp}/${requiredXp}\n└ Nivel : ${Level}`
                faketokoforwaded(resul, text, numbernye, per)
				break 
				case prefix+ 'narutod':
				oi = body.slice(8)
				oii = await getBuffer(`https://fxbotapi.herokuapp.com/api/photooxy/naruto?text=${oi}`)
				fxbot.sendMessage(from, oii, image, {quoted: mek, caption: 'Ok brother'})
				break
				
//END BANG RAKIT SENDIRI YAA DAN JGN LUPA KASIH NAMA SAYA YG SUDAH MENGBANGUN INI SC :(

default:            
                    if (budy.startsWith('https://')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@62812874133914")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 ${sender.split("@")[0]}`)
					fxbot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
				if(budy.includes('Sempai')){
                    const F3 = fs.readFileSync('lib/sempai.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
	if(budy.includes('Dormir')){
                    const F3 = fs.readFileSync('lib/mimir.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
	if(budy.includes('Jack')){
                    const F3 = fs.readFileSync('lib/jacksito.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
	if(budy.includes('Puto bot')){
                    const F3 = fs.readFileSync('lib/insul.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
	if(budy.includes('Tetas')){
                    const F3 = fs.readFileSync('lib/tetas.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
	if(budy.includes('Noche')){
                    const F3 = fs.readFileSync('lib/noche.mp3')
	                fxbot.sendMessage(from, F3, audio, {
                    quoted: mek, ptt : true
	                })
	                }
if (budy.startsWith('$')){
                        if (!isMe) return 
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }

                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ CHAT ]', 'red'), 'DE', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
}
starts()
