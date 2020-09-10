/*CMD
  command: ❓ Info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");
var m  = User.getProperty("msgid");
var id = User.getProperty("nama_pemilik");

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Api.deleteMessage({chat_id:chat.chatid, message_id:m+1});

if(!id){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

}

return Bot.sendMessage("*INFO BOT ZONACHANGER*\n\n≡ *Didirikan*: `September 2018`\n≡ *System Operasi*: `NodeJS`\n≡ *Database Server*: `Mysql`\n≡ *Bot Version*: `1.2.0`\n\n*Layanan Pertukaran Voucher Indodax Terpercaya, Termudah, Tercepat dan Termurah *!!", {on_result:"/otw"}); 
