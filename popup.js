document.addEventListener('DOMContentLoaded', function () {
    var newTabBtn = document.getElementById('newTabBtn');
    var existingTabBtn = document.getElementById('existingTabBtn');

    newTabBtn.addEventListener('click', openNewTab);
    existingTabBtn.addEventListener('click', navigateToExistingTab);
});

function openNewTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.create({ url: activeTab.url });
        window.close();
    });
}

function navigateToExistingTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.update(activeTab.id, { active: true });
        window.close();
    });
}
