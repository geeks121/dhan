/*CMD
  command: Edit akun
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m  = User.getProperty("msgid");

Api.sendChatAction({chat_id:chat.chatid, action : 'typing'});
Api.deleteMessage({chat_id: chat.chatid, message_id: m+1});
Api.deleteMessage({chat_id: chat.chatid, message_id: m});

Bot.sendKeyboard("🔙 Back", "Silahkan masukan alamat *EMAIL INDODAX* anda !!", {on_result:"/otw"});

Bot.runCommand("/idemail");




