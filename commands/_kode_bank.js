/*CMD
  command: /kode_bank
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

Api.sendChatAction({chat_id: chat.chatid, action: 'typing' });
Api.deleteMessage({ chat_id: chat.chatid, message_id : m});
Api.deleteMessage({ chat_id: chat.chatid, message_id : m+1});
Api.deleteMessage({ chat_id: chat.chatid, message_id : m-1});

if( text == "🔙 Back" ){

return Bot.runCommand("/start");

}

User.setProperty("bank_number", text, "string");

Bot.sendKeyboard("🔙 Back", "Silahkan masukan *Nomer Rekening* anda disini !!",{on_result:"/otw"});

return Bot.runCommand("/rekening_bank");
