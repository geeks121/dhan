/*CMD
  command: /oncheck_joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let m = User.getProperty("msgid")


if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

//Bot.sendMessage(inspect(options)); 
let status = options.result.status;

var isJoined = (
(status == "member")||
(status == "administrator")||
(status == "creator")
)

if(isJoined){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*Main Menu*\n\n≡ *Pengaduan* [Telegram](https://t.me/dhanRks) & [Whatsapp](https://api.whatsapp.com/send?phone=6283873563833)\n≡ [Ketentuan Transaksi](https://telegra.ph/SYARAT-DAN-KETENTUAN-TRANSAKSI-JACKCHANGER-07-05) & [Tutorial Transaksi](https://telegra.ph/TUTORIAL-TRANSAKSI-JUAL-VOUCHER-07-05)",{disable_web_page_preview:true})
}else{
Api.answerCallbackQuery({
callback_query_id: request.id,
text:"💡 Untuk mengakses @zonachangerbot, silahkan follow terlebih dahulu channel testimony @zonachanger",
show_alert:true
})
}
