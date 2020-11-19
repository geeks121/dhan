/*CMD
  command: on_claim
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content);

Bot.sendMessage(inspect(json));

Bot.runCommand("/claim");
