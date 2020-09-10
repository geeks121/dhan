/*CMD
  command: 📞 Kontak
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid");

Api.sendChatAction({chat_id:chat.chatid, action:'typing'});
Api.deleteMessage({chat_id: chat.chatid, message_id: m+1 });

return Bot.sendMessage("*KONTAK DUKUNGAN*\n\n≡ *Telegram*: @DhanRks\n≡ *WhatsApp*: [083873563833](https://api.whatsapp.com/send?phone=+6283873563833)\n≡ *ID Email*: zonachangerbot@gmail.com\n\n≡ Jl.Prof. Dr. Ir. Soetami Km.03 Kp. Cisalam Rt 03 Rw.08, Kec. Rangkasbitung, Desa. Cijoro Pasir, Kab. Lebak, Prov. Banten 42316", {disable_web_page_preview:true, on_result:"/otw"});


