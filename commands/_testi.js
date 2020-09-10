/*CMD
  command: /testi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var time = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time2 = Libs.DateTimeFormat.format(time, "dd - mm - yyyy" );
let time3 = Libs.DateTimeFormat.format(time, "dd-mm-yyyy || HH:MM:ss" )

let OBB = User.getProperty("history",{users:[]});

var arr=OBB.users

if(arr.length<=0){
Bot.sendMessage("⚠️ Sorry Signal is not found")
return
}

badUsers = Bot.getProperty("badUsers", { list: {} })

var max=arr.length*1
var min=max-3
var arr2=arr.slice(min,max)
msg=" "

for (var index in arr2){
let str=arr2[index]
var count=(index*1)+1

msg+=str+"\n\n"

}


Bot.sendMessage("📋 *List of the latest signals today "+time2+"*\n`"+msg+"`")


