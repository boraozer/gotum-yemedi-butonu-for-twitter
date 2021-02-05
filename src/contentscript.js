chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'url-change') {
        console.log(request.url) // new url is now in content scripts!
      }
  });