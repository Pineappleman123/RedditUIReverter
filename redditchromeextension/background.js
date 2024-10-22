chrome.webNavigation.onCompleted.addListener(function(details) {
    const redditHomepageUrls = ["https://www.reddit.com/", "https://new.reddit.com/"];
    
    if (redditHomepageUrls.includes(details.url)) {
      chrome.tabs.update(details.tabId, { url: "https://new.reddit.com/message/messages" });
    }
  }, { url: [{ hostEquals: 'www.reddit.com' }, { hostEquals: 'new.reddit.com' }] });
  