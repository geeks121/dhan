/*CMD
  command: /joined
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

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let id = user.telegramid;
Api.getChatMember({
chat_id:"@zonachanger", user_id: id, on_result :"/oncheck_join"})
//Bot.sendMessage(inspect(options));


