/*CMD
  command: /calcid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");
var msg = data.message;
var number = Number(msg);

Api.deleteMessage({chat_id:chat.chatid, message_id:m+1});
Api.deleteMessage({chat_id:chat.chatid, message_id:m});
Api.sendChatAction({chat_id:chat.chatid, action:'typing'});

if( msg == "🔙 Back" ){
return Bot.runCommand("/start");
}

if( !number ){
return Bot.sendKeyboard("🔙 Back", "*Warning* Silahkan masukan format angka saja !!",{on_result:"/otw"});
}

var min    = 10000;
var max    = number*0.0025+10000;
var hsl    = number-min;
var msl    = number-max;
var hsl_rp = parseInt(min).toLocaleString('EN-en');
var msl_rp = parseInt(max).toLocaleString('EN-en');
var trm_rp = parseInt(hsl).toLocaleString('EN-en');
var mpr_rp = parseInt(msl).toLocaleString('EN-en');
var msg_rp = parseInt(number).toLocaleString('EN-en');


if( number < 3000000 ){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*CALCULATOR BIAYA TRANSAKSI*\n\n≡ *Jual Voucher*: Rp `"+msg_rp+"`\n≡ *Biaya Admin*: Rp `"+hsl_rp+"`\n≡ *Terima Bersih*: Rp `"+trm_rp+"`\n\nBiaya Transaksi bersifat *FINAL* tidak bisa di ganggu gugat !!",{on_result:"/otw"})
}

if( number > 2999999 ){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*CALCULATOR BIAYA TRANSAKSI*\n\n≡ *Jual Voucher*: Rp `"+msg_rp+"`\n≡ *Biaya Admin*: Rp `"+msl_rp+"`\n≡ *Terima Bersih*: Rp `"+mpr_rp+"`\n\nBiaya Transaksi bersifat *FINAL* tidak bisa di ganggu gugat !!",{on_result:"/otw"})
}
