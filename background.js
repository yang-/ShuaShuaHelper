chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, {
    url: tab.url.includes('leetcode.com')
      ? tab.url.replace('leetcode.com', 'leetcode-cn.com')
      : tab.url.replace('leetcode-cn.com', 'leetcode.com'),
  })
})
