'use strict';

var used = [];
//var queue = [];
//var playing = false;

$('ul.chat-lines > div > li.chat-line').livequery(()=>{
  var e = $(this);
  if(used.indexOf(e.id) >= 0) {
    return;
  }
  used.push(e.id);
  chrome.tts.speak(e.one('.message:text'));
});
