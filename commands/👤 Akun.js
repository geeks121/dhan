/*CMD
  command: 👤 Akun
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});

var m = User.getProperty("msgid");

Api.deleteMessage({chat_id:chat.chatid,message_id:m+1});
Api.deleteMessage({chat_id:chat.chatid,message_id:m+1});


var pemilik = User.getProperty("nama_pemilik");

if(pemilik == undefined){

Bot.sendMessage("Silahkan perbaharui info akun anda terlebih dahulu! /editakun",{on_result:"/otw"});

return
}

var email = User.getProperty("email_indodax").toLowerCase()

var bank = User.getProperty("kode_bank").toUpperCase()

var rekening= User.getProperty("no_rekening")

var an = User.getProperty("nama_pemilik").toUpperCase()

var saldo = Libs.ResourcesLib.userRes("saldo")
var poin = Libs.ResourcesLib.userRes("poin")
var total = Libs.ResourcesLib.userRes("total_transaksi")
let volume_user = Libs.ResourcesLib.userRes("volume")
var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

var format = saldo.value().toLocaleString('EN-en')
var poin_format = parseInt(poin.value()*1000).toLocaleString('EN-en')

var format4 = 
volume_user.value().toLocaleString('EN-en')

var buttons = [
[{title:"Edit akun", command:"/editakun"}]
];

var keyboard = "Edit akun, History, \n🔙 Back";

return Bot.sendKeyboard(keyboard, "*INFORMASI AKUN SAYA*\n\n≡ *ID pelanggan*: `"+user.telegramid+"`\n≡ *Saldo akun*: Rp `"+format+"`\n\n≡ *ID Bank*: `"+bank+"`\n≡ *ID Number*: `"+rekening+"`\n≡ *ID Name*: `"+an+"`\n≡ *ID Email*: "+email+"\n\n≡ *Total transaksi*: `"+total.value().toFixed(0)+"` Transaksi\n≡ *Volume*: Rp `"+format4+"`",{on_result:"/otw"});




