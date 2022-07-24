let handler = async (m, { conn, usedPrefix }) => {
conn.sendButton(m.chat, `
╭─「 *DONASI* 」
│ DANA [085646606905]
│ GOPAY [08194694535]
│ PULSA [085646606905]
│ PULSA2 [081946945315]
╰───

╭─「 *NOTE* 」
│ > Ingin donasi ke BOT?
│ _Silahkan menghubungi owner_
│ _https://wa.me/6281946945315
│ _Hasil donasi akan dipakai untuk membuat BOT ONLINE 24 JAM_
╰────
╭─「 *NOTE* 」
│ > _Ada paksaan untuk kalian berdonasi_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m)
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
