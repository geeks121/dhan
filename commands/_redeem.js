/*CMD
  command: /redeem
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");
var poin = Libs.ResourcesLib.userRes("poin");
var rupiah = parseInt(poin.value()*1000).toLocaleString('EN-en');
var saldo = Libs.ResourcesLib.userRes("saldo");
var add = parseInt(poin.value()*1000);
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" );



Api.sendChatAction({chat_id:chat.chatid, action:'typing'});

if( poin.value() < 10 ){

return Api.AnswerCallbackQuery({ callback_query_id: request_id,
text:'Mohon maaf poin anda untuk saat ini belum mencukupi, minimal tukar POIN yaitu 10 POIN !!', show_alert:true});

}

if( poin.value() > 9 ){

Api.deleteMessage({chat_id:chat.chatid, message_id: m});

Api.sendMessage({ chat_id: "@zonachanger", text:"*TUKAR REWARDS POIN*\n\n≡ *ID Pelanggan*: `"+user.telegramid+"`\n≡ *Reward POIN*: `"+poin.value().toFixed(0)+"` POIN\n≡ *Rates POIN*: Rp `"+rupiah+"`\n≡ *Waktu*: `"+time+"` WIB\n\n*©️ 2020 COPYRIGHT @zonachangerBot !!*", parse_mode: 'Markdown', disable_web_page_preview:true});

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*TUKAR POIN SUKSES*. Jumlah *POIN* `"+poin.value().toFixed(0)+"` POIN. Rate *POIN* Rp `"+rupiah+"` Telah di kreditkan ke *SALDO* anda. Terimakasih !!",{on_result:"/otw"});

poin.remove(poin.value());
saldo.add(add);

return

}

