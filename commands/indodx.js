/*CMD
  command: indodx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json    = JSON.parse(data.content);
var stok    = json.balance;
var balance = parseInt(stok)-4000;
var rupiah  = balance.toLocaleString('EN-en');

User.setProperty("stok_voucher", balance, "integer");

return Bot.sendKeyboard("BANK, DANA, OVO,\nGOPAY, LINKAJA,\n🔙 Back", "*JUAL VOUCHER INDODAX*\n\nSaat pembuatan *VOUCHER INDODAX* wajib memasukan email penerima `zonachanger@gmail.com` !!\n\nMinimal Jual *VOUCHER INDODAX* Rp `25,000` dengan maksimal jual Voucher sesuai stok tersedia Rp `"+rupiah+"` !!", {on_result:"/otw"});

