// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.onCreated.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status != 'complete')
        return;
    chrome.tabs.executeScript(tab.ib, {
        file: 'inject.js'
    });
});