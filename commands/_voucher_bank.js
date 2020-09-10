/*CMD
  command: /voucher_bank
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m       = User.getProperty("msgid");
var text    = data.message;
var valid   = text.slice(0,7);

Api.sendChatAction({chat_id : chat.chatid, action : 'typing'});
Api.deleteMessage({chat_id : chat.chatid, message_id : m+1});
Api.deleteMessage({chat_id : chat.chatid, message_id : m});

if( text == "🔙 Back" ){

Bot.runCommand("/start");
return
}

if( valid == 'BTC-IDR' ){

User.setProperty("voucher_bank", text, "string");

Bot.runCommand("/claim_vc_bank");
return
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Warning *VOUCHER INDODAX SALAH* !!",{on_result:"/otw"});
return


