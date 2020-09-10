/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.runCommand("/joined")

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  //Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  //Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  let balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.chatId)
let ref = Libs.ResourcesLib.anotherUserRes("ref", refUser.chatId)

//ref.add(1)


//Bot.sendMessageToChatWithId(refUser.chatId, 
    //"✅ Congratulations you got *1.00 TRONc*" );
}

function doAlreadyAttracted(){
  //Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);


function onAttracted(refUser){
  // access to Bonus Res of refUser
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid); // add 100 bonus for friend
}



