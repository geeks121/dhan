/*CMD
  command: History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var History  = User.getProperty("history1",{users:[]});

var String   = History.users;

if( String.length < 0 ){
Bot.sendMessage("Tidak ada transaksi apapun disini !!",{on_result:"/otw"});
return
}

var max     = String.length*1;
var min     = max - 3;
var arr2    = String.slice(min,max);
msg         =" ";

for ( var index in arr2 ){

let str     = arr2[index];
var count   = (index*1)+1;
msg+= str+"\n\n";

}

Bot.sendMessage(msg,{on_result:"/otw"});
