/*CMD
  command: /token
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if( params == 'akses' ){

var json  = JSON.parse(data.content);
var token = json.access_token;
Bot.setProperty("token", token, "string");

return
}

HTTP.post({
url:"https://btcapi.net/mobileApiV1/token",
headers:{
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent":"Dalvik/2.1.0 (Linux; U; Android 9; SM-J530Y Build/PPR1.180610.011)"
        },
body:"refresh_token=1e0a46e456bcf6b34ce596418090a171a25baddb&device_info=SM-J530Y%252C%2BAndroid%2B9%2B%2528API%2B28%2529%2B&device_id=0a7fa26c5d3e737e7b5642addc21bfb3c13e54251d5806cf729438df7f0ca16f&grant_type=refresh_token&refresh_pin=220396&fcm_token=&client_secret=&gps=&lang=indonesia&client_id=androidclient&",
success:"/token akses"
});
