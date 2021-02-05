chrome.runtime.onInstalled.addListener(function() {
  
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tabId, {
          message: 'TabUpdated'
        });
      }
    })

    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if(message.message == 'open-extension') {
            chrome.tabs.executeScript(null,{file:chrome.runtime.getURL("popup.html")})
        }

    });

  });

  