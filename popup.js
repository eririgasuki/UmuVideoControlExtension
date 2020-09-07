function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
var bg = chrome.extension.getBackgroundPage();
var select = document.getElementsByTagName('select')
select[0].options[bg.selectedIndexCache].selected = true
select[0].onchange = function(){
  var selectedValue = select[0].options[select[0].selectedIndex].value
  bg.selectedIndexCache = select[0].selectedIndex
  sendMessageToContentScript({
    cmd: 'test',
    value: selectedValue
  }, function (response) {
    console.log('来自content的回复：' + response);
  });

}

