/*CMD
  command: Sell Voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m   = User.getProperty("msgid");

Api.sendChatAction({chat_id:chat.chatid, action: 'typing'});
Api.deleteMessage({chat_id: chat.chatid, message_id: m+1});
Api.deleteMessage({chat_id: chat.chatid, message_id: m});

HTTP.get({
url:"https://partner.oyindonesia.com/api/balance",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
success:"indodx"
});



