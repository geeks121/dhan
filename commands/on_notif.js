/*CMD
  command: on_notif
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id   = User.getProperty("id_trans");

if( params == '1' ){

var json    = JSON.parse(data.content);
var date    = new Date().toLocaleString("en-US",{timeZone: "Asia/jakarta"});
let time    = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" );
var status  = json.status.code;
var nominal = json.amount;
var bank    = json.recipient_bank;
var name    = json.recipient_name;
var rekening= json.recipient_account;
var message = json.status.message;
var poin    = Libs.ResourcesLib.userRes("poin");
var total   = Libs.ResourcesLib.userRes("total_transaksi");
let volume  = Libs.ResourcesLib.userRes("volume");
var OBB     = User.getProperty("history");

poin.add(1);
total.add(1);
volume.add(nominal);

if(!OBB){ OBB = {  users:[] } };

OBB.users.push("Penarikan Rp `"+nominal.toLocaleString('EN-en')+" ke `"+bank+"/"+rekening+"/"+name+"` pada tanggal `"+time+"`" );
User.setProperty("history", OBB,'json');


Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
if( status == '000' ){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Status transaksi *ID "+id+"* telah *SUKSES* dikirimkan ke *"+bank+"/"+rekening+"/"+name+"* pada tanggal *"+time+"* !!\n\n@2020 *COPYRIGHT* @zonachangerBot",{on_result:"/otw"});

Api.sendMessage({ chat_id : "@jakalanang", text : "*INVOICE TRANSAKSI*\n\n⇛ *ID TRANSASKI*: ["+id+"](https://t.me/zonachangerbot)\n⇛ *RECIPIENT BANK*: `"+bank+"`\n⇛ *RECIPIENT NUMBER*: `"+rekening.slice(0,7)+"XXXXXX`\n⇛ *NOMINAL*: Rp `"+nominal.toLocaleString('EN-en')+"`\n⇛ *TANGGAL*: `"+time+"`\n\n@2020 *COPYRIGHT* @zonachangerBot ", parse_mode:"Markdown", disable_web_page_preview:true});

return
}else{
Bot.runCommand("on_notif");
return
}
}

HTTP.post({
url: "https://partner.oyindonesia.com/api/remit-status",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{
"partner_trx_id":id 
},
success:"on_notif 1"
//bacground:true
})



