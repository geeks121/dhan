/*CMD
  command: /rekening_bank
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m      = User.getProperty("msgid");
var text   = data.message;
var bank   = User.getProperty("bank_number");
var number = Number(text);

Api.sendChatAction({ chat_id: chat.chatid, action:'typing'});
Api.deleteMessage({ chat_id: chat.chatid, message_id: m});
Api.deleteMessage({ chat_id: chat.chatid, message_id: m+1});

if( text == "🔙 Back" ){

return Bot.runCommand("/start");

}

if( !number ){

Bot.sendKeyboard("🔙 Back", "Format *Nomer Rekening* tidak *VALID*, silahkan masukan kembali *Nomer Rekening* anda !!", {on_result:"/otw"});

return Bot.runCommand("/rekening_bank");

}

User.setProperty("rekening_number", text, "string");

return HTTP.post({
url: "https://partner.oyindonesia.com/api/inquiry",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{"recipient_bank": bank, "recipient_account": text},
success:"/cek_bank"
});


