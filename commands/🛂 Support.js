/*CMD
  command: 🛂 Support
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

Api.sendChatAction({chat_id: chat.chatid, action: 'typing'});
Api.deleteMessage({chat_id: chat.chatid, message_id: m+1});

if( !id ){

return Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun", {on_result:"/otw"});

}


return Bot.sendMessage("Live support [Telegram](https://t.me/dhanrks) & [Whatsapp](https://api.whatsapp.com/send?phone=+6283873563833)!!\nOnline pukul `08.00 s/d 21.00` WIB !!", {disable_web_page_preview:true, on_result:"/otw"});
