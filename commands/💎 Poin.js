/*CMD
  command: 💎 Poin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");
var poin = Libs.ResourcesLib.userRes("poin");
var rupiah = parseInt(poin.value()*1000).toLocaleString('EN-en');
var pemilik = User.getProperty("nama_pemilik");

if(pemilik == undefined){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

return
}


if( poin.value() < 10 ){

Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});
Api.deleteMessage({chat_id:chat.chatid, message_id: m});
Api.sendChatAction({chat_id:chat.chatid, action:'typing'});

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi,💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*REWARDS POIN SAYA*\n\n≡ *ID pelanggan*: `"+user.telegramid+"`\n≡ *Rewards POIN*: `"+poin.value().toFixed(0)+"` POIN\n≡ *Rate POIN*: Rp `"+rupiah+"`\n\nDapatkan *POIN* lebih banyak lagi dengan melakuakn transaksi di @zonachangerBot sebanyak-banyaknya!!", {on_result:"/otw"});

}

if( poin.value() > 9 ){

Api.sendChatAction({chat_id:chat.chatid, action:'typing'});
Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});
//Api.deleteMessage({chat_id:chat.chatid, message_id: m});

var buttons = [
[{title:"Tukar POIN", command:"/redeem"}]
];

return Bot.sendInlineKeyboard(buttons,"*REWARDS POIN SAYA*\n\n≡ *ID pelanggan*: `"+user.telegramid+"`\n≡ *Rewards POIN*: `"+poin.value().toFixed(0)+"` POIN\n≡ *Rate POIN*: Rp `"+rupiah+"`\n\nDapatkan *POIN* lebih banyak lagi dengan melakuakn transaksi di @zonachangerBot sebanyak-banyaknya!!", {on_result:"/otw"}); 

}


