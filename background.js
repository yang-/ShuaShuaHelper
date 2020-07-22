chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { originAndPathMatches: 'leetcode(-cn)?.com/problems/.+' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ])
  })
})

chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, {
    url: tab.url.includes('leetcode.com')
      ? tab.url.replace('leetcode.com', 'leetcode-cn.com')
      : tab.url.replace('leetcode-cn.com', 'leetcode.com'),
  })
})
