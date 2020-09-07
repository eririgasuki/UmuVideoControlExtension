var controls = document.getElementsByClassName("player-controls")
if (controls) {
  var video = document.getElementsByTagName("video")
  video[0].click()

  setTimeout(() => {
    video[0].pause()
    video[0].setAttribute("controls", "true")
    video[0].setAttribute("controlslist", "nodownload")
    var parent = document.getElementsByClassName("video-player-main")
    parent[0].removeChild(controls[0])
  }, 500);

}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd == 'changeSpeed') console.log(request.value);
  video[0].playbackRate = parseFloat(request.value)
  sendResponse('我收到了你的消息！');
});
