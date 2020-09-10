/*CMD
  command: /bankid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m   = User.getProperty("msgid");
var msg = data.message;

if(msg == "🔙 Back"){

return Bot.runCommand("/start");

}

Api.deleteMessage({chat_id:chat.chatid,message_id: m+1})

Api.deleteMessage({chat_id:chat.chatid,message_id: m});

User.setProperty("kode_bank", data.message,"string");

Bot.sendKeyboard("🔙 Back","Silahkan masukan *Nomer Rekening* anda !!\n*Contoh*: 160901003336504",{on_result:"/otw"});

return Bot.runCommand("/rekid");
