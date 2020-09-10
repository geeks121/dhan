/*CMD
  command: /cek_konfirm
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m    = User.getProperty("msgid");
var text = data.message;

Api.sendChatAction({ chat_id: chat.chatid, action : 'typing'});
Api.deleteMessage({ chat_id : chat.chatid, message_id : m+1});
Api.deleteMessage({ chat_id : chat.chatid, message_id : m});

if( text == "🔙 Back" ){

return Bot.runCommand("/start");

}

if( text == "✔ Benar" ){

Bot.sendMessage("Silahkan masikan kode *VOUCHER INDODAX* anda disini !!", {on_result:"/otw"});

Bot.runCommand("/voucher_bank");

}






