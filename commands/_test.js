/*CMD
  command: /test
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let History = User.getProperty("history1");
let mus = "kontol";

if(!History){ History = {  users:[] } };

History.users.push(mus);
User.setProperty("history1", History,'json');

Bot.sendMessage("✅ Success sent to user VIP\n\n`"+mus+"`")



