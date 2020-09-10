/*CMD
  command: BANK
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m      = User.getProperty("msgid");
var stok   = User.getProperty("stok_voucher");
var rupiah = stok.toLocaleString('EN-en');

Api.sendChatAction({chat_id:chat.chatid, action: 'typing'});
Api.deleteMessage({chat_id: chat.chatid, message_id: m+1});


Bot.sendKeyboard("🔙 Back","Silahkan masukan kode *BANK* anda disini !!\nCek kode *BANK* anda [disini](https://telegra.ph/KODE-BANK-INDONESIA-06-28) !!",{ disable_web_page_preview: true , on_result:"/otw"});

return Bot.runCommand("/kode_bank");


