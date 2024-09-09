chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') {
        chrome.tabs.query({ url: tab.url, currentWindow: true }, function (tabs) {
            if (tabs.length > 1) {
                chrome.windows.create({
                    url: chrome.runtime.getURL('popup.html'),
                    type: 'popup',
                    width: 220,
                    height: 180
                });
            }
        });
    }
});
