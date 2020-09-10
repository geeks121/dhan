/*CMD
  command: /oncheck_join
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

 
let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){

Api.deleteMessage({chat_id:chat.chatid,message_id:m+1})

Api.deleteMessage({chat_id:chat.chatid,message_id:m})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*Main Menu*\n\n≡ *Pengaduan* [Telegram](https://t.me/dhanRks) & [Whatsapp](https://api.whatsapp.com/send?phone=6283873563833)\n≡ [Ketentuan Transaksi](https://telegra.ph/SYARAT-DAN-KETENTUAN-TRANSAKSI-JACKCHANGER-07-05) & [Tutorial Transaksi](https://telegra.ph/TUTORIAL-TRANSAKSI-JUAL-VOUCHER-07-05)",{on_result:"/otw",disable_web_page_preview:true})
return
}else{
Bot.sendInlineKeyboard([{title:"✅ Done", command:"/done_join"}],"💡 Untuk mengakses bot, silahkan follow terlebih dahulu channel @zonachanger",{on_result:"/otw", disable_web_page_preview:true})
return
}
