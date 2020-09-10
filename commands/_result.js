/*CMD
  command: /result
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json   = JSON.parse(data.content);
var status = json.status.code;
var m      = User.getProperty("msgid");

Api.deleteMessage({chat_id:chat.chatid, message_id: m+1});
Api.deleteMessage({chat_id:chat.chatid, message_id: m});

if(status == '000'){

var rekid    = json.recipient_account;
var bank     = json.recipient_bank;
var name     = json.recipient_name;
var email    = User.getProperty("email_indodax");
rowIndex     = User.getProperty("rowIndex");
var saldo    = Libs.ResourcesLib.userRes("saldo");
var volume   = Libs.ResourcesLib.userRes("volume");

User.setProperty("nama_pemilik", name, "string");

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "*AKUN BERHASIL DI PERBAHARUI !!*\n\n≡ *ID Nama*: `" +name+ "`\n≡ *ID Number*: `" +bank.toUpperCase()+ "/" +rekid+ "`\n≡ *ID Email*: `" +email.toLowerCase()+ "`\n\n© 2020 Copyright @zonachangerBot !!", { on_result: "/otw" });

let newRow = {

'User ID': user.telegramid,
'Username': "@" + user.username + "/" + user.first_name,
'Email': email,
'Bank/E-money': bank.toUpperCase(),
'Pemilik Rekening': name,
'No Rekening': rekid,
'Volume Transaksi': volume.value().toFixed(0),
'Saldo': saldo.value().toFixed(0)

}

let prms = {
sheetName: "ValidateUser",
row: newRow,
onSuccess: "/on_success",
onError: "_9"
}

if(rowIndex){

prms.rowIndex = rowIndex;
return Libs.GoogleSpreadSheet.editRow(prms);


 }else{

return Libs.GoogleSpreadSheet.addRow(prms)
 }
}

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Akun *GAGAL* di Perbaharui, invalid akun *BANK* !!", { on_result: "/otw" });

