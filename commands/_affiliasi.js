/*CMD
  command: /affiliasi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m   = User.getProperty("msgid")
var lib = Libs.ReferralLib
refList = lib.currentUser.refList.get();

if( refList.length > 0 ){

  var msg = "List user affiliasi anda:\n";
  for(i in refList){
    user = refList[i];
    msg+= "\n≡ *ID pelanggan*: `"+user.telegramid+"`";
  }

}else{

Api.answerCallbackQuery({callback_query_id: request.id,text: "😥 Mohon maaf saat ini anda tidak mempunyai affiliasi",show_alert: true
});
}

return Bot.editMessage(msg, m);

