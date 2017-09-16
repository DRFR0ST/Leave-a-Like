chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, {code:"if(document.getElementsByClassName('ytd-toggle-button-renderer')[1].getAttribute('aria-pressed') == 'false') { document.getElementsByClassName('ytd-toggle-button-renderer')[0].click() }"}); 
});