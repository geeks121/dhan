/*CMD
  command: /cek_bank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json     = JSON.parse(data.content);

var status   = json.status.code;

if( status == "209" ){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Warning, Data penerima *TIDAK DITEMUKAN*", {on_result:"/otw"});

}

if( status == "000" ){

var bank     = json.recipient_bank;
var rekening = json.recipient_account;
var pemilik  = json.recipient_name;

User.setProperty("bank_number", bank, "string");
User.setProperty("rekening_number", rekening, "string");

Bot.sendKeyboard("✔ Benar,\n🔙 Back", "*DETAIL AKUN PENERIMA*\n\n≡ *ID BANK*: "+bank+"\n≡ *ID Rekening*: "+rekening+"\n≡ *ID Pemilik*: "+pemilik+"\n\nKonfirmasi jika data di atas sesuai dengan akun penerima anda !!",{on_result:"/otw"});

return Bot.runCommand("/cek_konfirm");

}
