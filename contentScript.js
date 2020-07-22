const query =
  document.location.host === 'leetcode.com'
    ? '[data-cy="question-title"]'
    : '[data-cypress="QuestionTitle"]'

let title = ''
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (!mutation.addedNodes) return

    for (let i = 0; i < mutation.addedNodes.length; i++) {
      let node = mutation.addedNodes[i]
      const questionTitle = node.querySelector?.(query)
      if (questionTitle) {
        title = questionTitle.textContent
        document.title = title
        observer.disconnect()
        return
      }
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
})

const target = document.querySelector('title')
const changeObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // console.log('title changed to "%s"', document.title)
    if (title !== '' && document.title !== title) {
      document.title = title
    }
  })
})
changeObserver.observe(target, {
  childList: true,
})

setTimeout(() => {
  observer.disconnect()
  changeObserver.disconnect()
}, 5000)
