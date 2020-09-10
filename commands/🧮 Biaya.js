/*CMD
  command: 🧮 Biaya
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");
var pemilik = User.getProperty("nama_pemilik");

if(pemilik == undefined){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

return
}

Api.sendChatAction({chat_id:chat.chatid, action:'typing'});
Api.deleteMessage({chat_id:chat.chatid, message_id:m+1});
//Api.deleteMessage({chat_id:chat.chatid, message_id:m});

return Bot.sendMessage("*BIAYA ADMIN TRANSAKSI*\n\nBiaya *Sell Voucher INDODAX* Minimal *Rp 10,000* Maksimal *0.25%*.\n\nBiaya *Buy Voucher INDODAX* *Free* tidak dikenakan biaya dengan perbandingan *1:1*.\n\nBiaya Transaksi bersifat *FINAL* tidak bisa diganggu gugat !! /calculator",{on_result:"/otw"});

