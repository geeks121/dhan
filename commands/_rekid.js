/*CMD
  command: /rekid
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
var bank = User.getProperty("kode_bank").toLowerCase();


if(msg == "🔙 Back"){

return Bot.runCommand("/start");

}

var number = Number(msg);

if(!number){

Bot.sendKeyboard("🔙 Back","Mohon maaf, silahkan ulangi lagi dan masukan *HANYA ANGKA* saja!!\n*Contoh*: 160901003336504",{on_result:"/otw"});

return Bot.runCommand("/rekid");

}

Api.deleteMessage({chat_id:chat.chatid,message_id: m+1});

Api.deleteMessage({chat_id: chat.chatid, message_id: m});

User.setProperty("no_rekening", data.message, "string");

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});

return HTTP.post({
url: "https://partner.oyindonesia.com/api/inquiry",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{
 "recipient_bank": bank,
 "recipient_account":msg
},
success:"/result"
});
