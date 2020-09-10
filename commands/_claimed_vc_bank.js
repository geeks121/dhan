/*CMD
  command: /claimed_vc_bank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m     = User.getProperty("msgid");
var json  = JSON.parse(data.content);
var error = json.error_description;
var date  = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time  = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" );

if( error == "Invalid token" ){

Bot.runCommand("/token");
return Bot.run({ command:"/claim_vc_bank", run_after:1});

}

if (error == "Voucher salah."){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Warning *VOUCHER INDODAX SALAH* !!",{on_result:"/otw"});

}

if( error == "Voucher sudah pernah digunakan!" ){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf kode *VOUCHER INDODAX* sudah pernah digunakan !!",{on_result:"/otw"});

}

var sukses = json.message;

if( sukses == "Voucher berhasil dicairkan!" ){

var amount     = parseInt(json.amount);
var min_trans  = 10000;
var max_trans  = amount*0.0025+10000;
var min_trims  = amount-min_trans;
var max_trims  = amount-max_trans;
var id_trans   = Libs.Random.randomInt(1000000, 100000000000);

User.setProperty("id_trans", id_trans, "string");

if( amount < 25000 ){

return Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf nominal *VOUCHER INDODAX* kurang dari Rp `25,000` !!",{on_result:"/otw"});

}

if( amount < 3000000 ){

var bank = User.getProperty("bank_number");
var rek  = User.getProperty("rekening_number");
User.setProperty("fee", min_trans, "integer");

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Kode *VOUCHER INDODAX BERHASIL DI CAIRKAN !!*, dengan nominal *Rp "+amount.toLocaleString('EN-en')+"*. Biaya transaksi *Rp "+min_trans.toLocaleString('EN-en')+"*. Nominal transfer di terima *Rp "+min_trims.toLocaleString('EN-en')+"* !!", {on_result:"/otw"});

return HTTP.post({url: "https://partner.oyindonesia.com/api/remit",headers:{"Content-Type" :"application/json","Acept" :"application/json","X-OY-Username":"jtchanger","X-Api-Key":"2e5d928f-33bb-473c-9691-4e2d85391a1c"},body:{"recipient_bank":bank, "recipient_account": rek,"amount":min_trims,"note":"ZONACHANGER","partner_trx_id":id_trans,"email": "" },success:"on_notif"});

}

if( amount > 2999999 ){

var bank = User.getProperty("bank_number");
var rek  = User.getProperty("rekening_number");
User.setProperty("fee", max_trans, "integer");

return HTTP.post({
url: "https://partner.oyindonesia.com/api/remit",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json","X-OY-Username": "jtchanger","X-Api-Key":"2e5d928f-33bb-473c-9691-4e2d85391a1c"},body:{"recipient_bank":bank,"recipient_account":rek,"amount": max_trims,"note":"ZONACHANGER","partner_trx_id":id_trans,"email": "" },success:"on_notif"});

}
}
