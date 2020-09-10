/*CMD
  command: /idemail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m    = User.getProperty("msgid");
var msg  = data.message;

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Api.deleteMessage({chat_id:chat.chatid, message_id: m});
Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});

if(msg == "🔙 Back"){

return Bot.runCommand("/start");

}

function validateEmail(email) {

var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return validate.test(String(email).toLowerCase());

}

if(validateEmail(msg)){

User.setProperty("email_indodax", msg, "string");

Bot.sendKeyboard("🔙 Back", "Silahkan Masukan *Kode Bank* anda !!\n*Contoh*: 002, ovo, linkaja, gopay!!\nCek *Kode Bank* [disini](https://telegra.ph/KODE-BANK-INDONESIA-06-28) !!",{on_result:"/otw", disable_web_page_preview:true});

return Bot.runCommand("/bankid");

}

Bot.sendKeyboard("🔙 Back", "Mohon maaf format Email tidak *DIKENALI* !!\nSilahkan masukan Ulang alamat *Email Indodax* anda !!", {on_result:"/otw"});

return Bot.runCommand("/idemail");




