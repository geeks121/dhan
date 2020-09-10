/*CMD
  command: 👥 Affiliasi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m      = User.getProperty("msgid");
var id     = User.getProperty("nama_pemilik");
var reff   = Libs.ResourcesLib.userRes("affiliasi");
var link   = Libs.ReferralLib.currentUser.getRefLink("zonachangerbot",+user.telegramid);
refList    = Libs.ReferralLib.currentUser.refList.get();
var rupiah = reff.value().toLocaleString('EN-en');

Api.sendChatAction({chat_id:chat.chatid, action:'typing'});
Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});

if( !id ){

return Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun", {on_result:"/otw"});

}

if(refList.length > 0){
  totalRef = refList.length;
  for(i in refList){
    user = refList[i];
  }
}else{
  totalRef = "0";
}

return Bot.sendInlineKeyboard([{title:"👥 Affiliasi saya", command:"/affiliasi"}],"*REWARDS AFFILIASI SAYA*\n\n≡ *Total affiliasi*: `"+totalRef+"` Affiliasi\n≡ *Penghasilan anda*: Rp `"+rupiah+"`\n≡ *Link affiliasi*:\n≡ "+link+"\n≡ *Komisi Affiliasi*: `0.05%`\n\nUndang teman sebanyak banyaknya menggunakan link affiliasi anda !!",{disable_web_page_preview:true,on_result:"/otw"});

