/*CMD
  command: /on_success
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rowIndex = options.rowIndex;
User.setProperty("rowIndex", rowIndex, "integer");

Bot.sendMessage(inspect(rowIndex));
