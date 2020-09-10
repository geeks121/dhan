/*CMD
  command: 🛒 Transaksi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m  = User.getProperty("msgid");
var id = User.getProperty("nama_pemilik");

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Api.deleteMessage({chat_id:chat.chatid, message_id: m});
Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});

if(!id){

return Bot.sendMessage("Warning !! akun anda belum di setting, silahkan set akun anda terlebih dahulu /editakun",{on_result:"/otw"});

}

return Bot.sendKeyboard("Sell Voucher, Deposit, Buy Voucher,\nInternet, Pulsa, Token PLN,\n🔙 Back","Silahkan pilih layanan yang tersedia !!", {on_result:"/otw"});
