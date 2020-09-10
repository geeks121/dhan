/*CMD
  command: ⚙ Ekstra
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = User.getProperty("nama_pemilik");
var m  = User.getProperty("msgid");

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Api.deleteMessage({chat_id:chat.chatid, message_id: m});
Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});

if(!id){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

return
}

return Bot.sendKeyboard("❓ Info, 📈 Statistik,\n🖱 Tutorial, 📞 Kontak,\n🔙 Back", "*Ekstra Menu !!*",{on_result:"/otw"})

