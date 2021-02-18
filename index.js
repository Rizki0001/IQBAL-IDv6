//mau apa kak
//jangan modal nama doang
//Iqbal Rizki Maulana
//ambil case izin dulu
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
/*********** LOAD FILE MENU ***********/
const { help } = require('./database/menu/help')
const { listmenu } = require('./database/menu/listmenu')
const { vipmenu } = require('./database/menu/vipmenu')
const { adminmenu } = require('./database/menu/adminmenu')
const { ownermenu } = require('./database/menu/ownermenu')
const { nsfwmenu } = require('./database/menu/nsfwmenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { funmenu } = require('./database/menu/funmenu')
const { mediamenu } = require('./database/menu/mediamenu')
const { othermenu } = require('./database/menu/othermenu')
const { animemenu } = require('./database/menu/animemenu')
const { makermenu } = require('./database/menu/makermenu')
const { soundmenu } = require('./database/menu/soundmenu')
/*********** LOAD FILE ***********/
const { virtex } = require('./src/virtex')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { murothal } = require('./src/murothal')
const { listsurah } = require('./src/listsurah')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftarmemberselebgram } = require('./src/daftarmemberselebgram')
const { bfix } = require('./src/bfix')
const { afix } = require('./src/afix')
const { install } = require('./src/install')
const { intro } = require('./src/intro')
const { kontakdeveloper } = require('./src/kontakdeveloper')
const { addfoto } = require('./src/addfoto')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { modapk } = require('./src/modapk')
/*********** APIKEY ***********/
const BarBarKey = 'APIKEY' //beli sendiri jangan enak doang
const TobzKey = 'BotWeA' //beli sendiri jangan enak doang
const Vhtear = 'APIKEY' //beli sendiri jangan enak doang
/*********** SETTINGS ***********/
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const { ind } = require('./language')
ban = []
/*********** JSON ***********/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./database/json/bacot.json'))
const samih = JSON.parse(fs.readFileSync('./database/user/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const prem = JSON.parse(fs.readFileSync('./database/json/prem.json'))
/*********** VCARD ***********/
const vcard = 'BEGIN:VCARD\n' //
            + 'VERSION:3.0\n' //
            + 'FN: 𝙸𝚀𝙱𝙰𝙻 𝙾𝚆𝙽𝙴𝚁\n' //
            + 'ORG:Creator 𝙸𝚀𝙱𝙰𝙻;\n' //
            + 'TEL;type=CELL;type=VOICE;waid=6281315995628:+6281315995628 \n' //
            + 'END:VCARD'
prefix = '!'
blocked = []
limitawal = 30
memberlimit = 2
cr = '*Account Iqbal V.2*'
/************************************/

/*********** SETTINGS BOT ***********/
const ownerNumber = ["6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
const mod = [ownerNumber,"6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
const adminbotnumber = ["6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
const frendsowner = ["6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
const premium = ["6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
const donator = ["6281315995628@s.whatsapp.net","6281315995628@s.whatsapp.net"]
/************************************/

/*********** LOAD JSON ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
/*********** END LOAD ***********/

/*********** FUNCTION ***********/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
       const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*********** REGISTER ***********/
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
/*********** SCAN QR ***********/
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' 𝙸𝚀𝙱𝙰𝙻 𝚁𝙸𝚉𝙺𝙸 𝙼𝙰𝚄𝙻𝙰𝙽𝙰'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* 
❍╭━━━━━━━━━━━━━
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAME:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *GENDER:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *ASKOT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA IG:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA DOI:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *FAVORIT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *HOBBY:*
❍╰━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `kenapa keluar kamu @${num.split('@')[0]} kalo masuk lagi jangan lupa desah`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'APIKEY'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const is = budy.trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			client.chatRead (from)

			mess = {
				wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				asik: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				success: 'Berhasil! ',
				levelon: 'leveling udah on nih ayo tingkatkan levelmu kak dengan cara aktifi di group ini',
				leveloff: 'sayang sekali leveling off gak seru ahk',
				levelnoton: '𝚢𝚊𝚑 𝚂𝚊𝚢𝚊𝚗𝚐 𝚂𝚎??𝚊𝚕𝚒 𝙻𝚎𝚟𝚎𝚕𝚒𝚗𝚐 𝙱𝚎𝚕𝚞𝚖 𝚍𝚒 𝚊𝚔𝚝𝚒𝚏𝚔𝚊𝚗 𝙰𝚢𝚘 𝙺𝚊?? 𝙻𝚊𝚙𝚘𝚛 𝚔𝚎 𝙾𝚠𝚗𝚎𝚛 𝙳𝚎𝚗𝚐𝚊𝚗 𝙲𝚊𝚛𝚊 !lapor bug ',
				levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: '𝙼𝚊𝚊𝚏 𝙺𝚊𝚔 𝙿𝚎𝚛𝚒𝚗𝚝𝚊𝚑 𝙸𝚗𝚒 𝙷𝚊𝚗𝚢𝚊 𝚄𝚗𝚝𝚞𝚔 𝚄𝚜𝚎𝚛 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 ',
					mod: '𝙼𝚊𝚊𝚏 𝙺𝚊𝚔 𝚏𝚒𝚝𝚞𝚛 𝙸𝚗𝚒 𝚄𝚗𝚝𝚞𝚔 𝚄𝚜𝚎𝚛 𝙼𝚘𝚍𝚜 𝙾𝚗𝚒𝚌𝚑𝚊𝚗',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					ownerB: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					daftarB: `──「 BELUM REGISTER 」──\nHalo kak !\nKamu belum Register nih, register dulu yuk... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Iqbal|17`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
					donator: '*Fitur ini khusus donator*',
				}
			}
/*********** IQBAL ID ***********/
            const botNumber = client.user.jid
			const crypto = require('crypto')
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
		    const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
		    pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const q = args.join(' ')
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntivirtex = isGroup ? antivirtex.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isPrem = prem.includes(sender)
			const isRegister = checkRegisteredUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
	        const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
/*********** FUNCTION LEVELING ***********/
if (isGroup && isLevelingOn) {
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
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
            /*********** FUNCTION CHECK LIMIT ***********/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				/*********** FUNCTION LIMITED ***********/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
    /*********** FUNCTION BALANCE ***********/
           if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 100) + 9000
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        /*********** BADWORD ***********/
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        /*********** FUNCTION RANK ***********/
			const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 3) {
            role = 'Copper IV'
        } else if (levelRole <= 5) {
            role = 'Copper III'
        } else if (levelRole <= 7) {
            role = 'Copper II'
        } else if (levelRole <= 9) {
            role = 'Copper I'
        } else if (levelRole <= 10) {
            role = 'Silver V'
        } else if (levelRole <= 11) {
            role = 'Silver IV'
        } else if (levelRole <= 12) {
            role = 'Silver III'
        } else if (levelRole <= 13) {
            role = 'Silver II'
        } else if (levelRole <= 13) {
            role = 'Silver I'
        } else if (levelRole <= 16) {
            role = 'Gold V'
        } else if (levelRole <= 17) {
            role = 'Gold IV'
        } else if (levelRole <= 19) {
            role = 'Gold III'
        } else if (levelRole <= 20) {
            role = 'Gold II'
        } else if (levelRole <= 21) {
            role = 'Gold I'
        } else if (levelRole <= 22) {
            role = 'Platinum V'
        } else if (levelRole <= 24) {
            role = 'Platinum IV'
        } else if (levelRole <= 25) {
            role = 'Platinum III'
        } else if (levelRole <= 26) {
            role = 'Platinum II'
        } else if (levelRole <= 27) {
            role = 'Platinum I'
        } else if (levelRole <= 30) {
            role = 'Exterminator'
        }
        /*********** FUNCTION ANTILINK ***********/
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("6detik")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("7detik")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("8detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("9detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("10detik")
		}, 0)
	}
	/*********** FUNCTION ANTIVIRTEX ***********/
	if (messagesC.includes('৭৭৭৭৭৭৭৭'|'๒๒๒๒๒๒๒๒'|'๑๑๑๑๑๑๑๑'|'ดุท้่เึางืผิดุท้่เึางื')){
		if (!isGroup) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Firtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("3detik")
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("4detik")
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("5detik")
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("6detik")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("7detik")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("8detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("9detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("10detik")
		}, 0)
	}
	/*********** COLORS ***********/
	colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
		switch(command) {
				
				   case 'help': 
				case 'menu':
				  if (!isRegister) return reply(mess.only.daftarB)
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
					case 'vipmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'kerangmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, kerangmenu(prefix), text, { quoted: mek })
					break
					case 'adminmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
					break
					case 'ownermenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, ownermenu(prefix), text, { quoted: mek })
					break
					case 'nsfwmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, nsfwmenu(prefix), text, { quoted: mek })
					break
					case 'animemenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, animemenu(prefix), text, { quoted: mek })
					break
					case 'mediamenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, mediamenu(prefix), text, { quoted: mek })
					break
					case 'othermenu':
					if (isBanned) return reply(mess.only.benned)   
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, othermenu(prefix), text, { quoted: mek })
					break
					case 'funmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, funmenu(prefix), text, { quoted: mek })
					break
					case 'makermenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, makermenu(prefix), text, { quoted: mek })
					break
					case 'soundmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, soundmenu(prefix), text, { quoted: mek })
					break
					/*********** LIMIT & DOMPET  ***********/
					case 'transfer':
				if (!isRegister) return reply(mess.only.daftarB)
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'dompet':
				if (!isPublic) return reply(mess.only.publikG)
				if (!isRegister) return reply(mess.only.daftarB)
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isPublic) return reply(mess.only.publikG)
				if (!isRegister) return reply(mess.only.daftarB)
				payout = body.slice(10)
				const koinPerlimit = 15
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran Terimakasih telah Belanja limit Di iqbal Shope\n${createSerial(15)}`)
				} 
				break
				case 'event':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(ind.ownerB())
                                        if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*SUDAH AKTIF* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Mengaktifkan EVENT di group ini*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Menonaktifkan EVENT di group ini*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
                                        case 'mining':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
				case 'limit':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
                                        case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Name : ${sem}\n┣⊱ User XP :  ${userXp}\n┣⊱ Role :  ${role}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Ketik perintah 1 untuk mengaktifkan, 0 untuk menonaktifkan* \n *Contoh: ${prefix}leveling 1*')
                }
            break
            case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
                case 'leaderboard':
				case 'lb':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal ${len} user untuk bisa mengakses database`)
                }
				brea
					/*********** TEST TIME & TIMER ***********/
					case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break
					/*********** PREMIUM ***********/
					case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
				case 'listprem':
				if (!isRegistered) return reply( ind.noregis()) 
				const krem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
				teks = '*==[ LIST PREM ]==*\n'
				for (let premau of krem){
					teks += `┣➢ @${premau.replace('@s.whatsapp.net','')}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${krem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
                break
                case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
				var arr = prem
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === hnom) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
					/*********** MENU ***********/
					case 'bahasa':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
                break
					case 'kodenegara':
               client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
					case 'virtex':
					 if (!isOwner) return reply(mess.only.ownerB)
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'murothal':
		client.sendMessage(from, murothal(prefix, sender), text, {quoted: mek})
                break
                case 'afix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, afix(prefix), text, { quoted: mek })
                    break
                    case 'bfix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, bfix(prefix), text, { quoted: mek })
                    break
                    case 'daftarmemberselebgram':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, daftarmemberselebgram(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Screenshot_20210207-023102.png`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*ini Instagram Managementnya*'})
                    break
                    case 'kontakdeveloper':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, kontakdeveloper(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Rizki.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: 'Owner Aku Cogans loh!\n Btw! Jangan lupa Subscribe Owner Aku'})
                    break
                    case 'install':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, install(prefix), text, { quoted: mek })
                    break
                    case 'intro':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    client.sendMessage(from, intro(prefix), text, { quoted: mek })
                    break
                    case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, listsurah(prefix) , text, { quoted: mek })
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, tnc(prefix) , text, { quoted: mek })
					break
					case 'addsay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database`)
						break
						case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
					/*********** ALL ***********/
					case 'tahta':
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
				  if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferrty = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=AprilRizki`, {method: 'get'})
					client.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
					case 'admin':
         	   case 'owner':
         	   case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
					case 'bass':                 
       if (!isRegister) return reply(mess.only.daftarB)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return nzwa.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
                                   if (!isRegister) return reply(mess.only.daftarB)
                                   if (isLimit(sender)) return reply(ind.limitend(pusname))
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nzwa.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        await limitAdd(sender)
					break
					case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					client.sendMessage(from, '*pulsa :* _6281315995628_\n*gopay :* _6281315995628_\n*saweria :* _https://saweria.co/IqbalRizki_', text, { quoted: mek })
					break
					case 'register':
                                        if (isRegister) return  reply(ind.rediregis())
                                        if (!q.includes('|')) return  reply(ind.wrongf())
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                                        if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                                        if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                                        if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
				        break
					case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
                    case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    case 'antilinkgroup':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Mode anti link group sudah disable')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antivirtexgroup':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntivirtex) return reply('anti virtex group sudah aktif')
						antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antifirtex))
						reply('Sukses mengaktifkan anti virtex group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti virtex group aktif apabila anda mengirim virtex atau tag orang group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantivirtex) return reply('Mode anti virtex group sudah disable')
						var ini = anti.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antivirtex))
						reply('Sukes menonaktifkan anti virtex group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'nulis':
				case 'tulis':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(100)
					reply(mess.wait)
					buffer4 = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=AprilRizki`, {method: 'get'})
					client.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Udah jadi kak jangan malas lagi ya kak'})
					break
					case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					/*********** BADWORD MENU ***********/
					case 'addbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'nobadword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    /*********** GAME ***********/
                    case 'tebakgambar':
if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=beli sendiri`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=beli sendiri`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=beli sendiri`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'game'://masih error
if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
					/*********** SOUND ***********/
					case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./assets/pale.mp3')
client.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'register':
if (!isRegister) return reply(mess.only.daftarB)
const registermp3 = fs.readFileSync('./assets/register.mp3')
client.sendMessage(from, registermp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ara':
const aramp3 = fs.readFileSync('./assets/ara.mp3')
client.sendMessage(from, aramp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'terpesona':
const terpesonamp3 = fs.readFileSync('./assets/terpesona.mp3')
client.sendMessage(from, terpesonamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tapi':
const tapimp3 = fs.readFileSync('./assets/tapi.mp3')
client.sendMessage(from, tapimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
case 'bodoh':
case 'onichan':
const bakamp3 = fs.readFileSync('./assets/baka.mp3');
client.sendMessage(from, bakamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./assets/sound.mp3')
client.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./assets/sound8.mp3');
client.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
const sembilan = fs.readFileSync('./assets/sound9.mp3')
client.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
const sepuluh = fs.readFileSync('./assets/sound10.mp3')
client.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
const sebelas = fs.readFileSync('./assets/sound11.mp3')
client.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dsh1':
if (!isDonator) return reply('Anda bukan user donator bot' ,text, { quoted: mek })
dsh1mp3 = fs.readFileSync('./assets/dsh1.mp3');
client.sendMessage(from, dsh1mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dsh2':
if (!isDonator) return reply('Anda bukan user donator bot' ,text, { quoted: mek })
dsh2mp3 = fs.readFileSync('./assets/dsh2.mp3');
client.sendMessage(from, dsh2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break	
case 'dsh3':
if (!isDonator) return reply('Anda bukan user donator bot' ,text, { quoted: mek })
dsh3mp3 = fs.readFileSync('./assets/dsh3.mp3');
client.sendMessage(from, dsh3mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tarik':
tarikmp3 = fs.readFileSync('./assets/tarik.mp3');
client.sendMessage(from, tarikmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'asalamualaikum':
const asalamualaikummp3 = fs.readFileSync('./assets/asalamualaikum.mp3')
client.sendMessage(from, asalamualaikummp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'murothal30':
murothal30mp3 = fs.readFileSync('./assets/murothal30.mp3');
client.sendMessage(from, murothal30mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
default:
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[NO]','blue'), 'Pengirim', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
