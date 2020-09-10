/*CMD
  command: 📈 Statistik
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m  = User.getProperty("msgid");
var id = User.getProperty("nama_pemilik");
var st = data.statistics;
var total  = st.total;
var active = st.active_during_last_day;
var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi");
var transaksi = Libs.ResourcesLib.anotherChatRes("total", "transaksi");
var rupiah = volume_transaksi.value().toLocaleString('EN-en');
var tp = transaksi.value().toLocaleString('EN-en');
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" );

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Api.deleteMessage({chat_id:chat.chatid, message_id:m+1});

if(!id){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

}

return Bot.sendMessage("*INFO STATISTIK BOT*\n\n≡ *User joined*: `"+total+"` USER\n≡ *Volume Transaksi*: Rp `"+rupiah+"`\n≡ *Total Transaksi*: `"+tp+"` TRANSAKSI\n≡ *Server Time*:\n≡ `"+time+"` WIB\n\n©️ 2020 COPYRIGHT @zonachangerBot !!",{on_result:"/otw"});


