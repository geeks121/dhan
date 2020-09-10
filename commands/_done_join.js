/*CMD
  command: /done_join
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid, 
action:'typing'
})

var m = User.getProperty("msgid")

Api.deleteMessage({
chat_id:chat.chatid,
 message_id:m
})

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let id = user.telegramid;
Api.getChatMember({
chat_id:"@zonachanger", user_id: id, on_result :"/oncheck_joined"})
//Bot.sendMessage(inspect(options));


