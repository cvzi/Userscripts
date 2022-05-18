// ==UserScript==
// @name         Github - Hide bots and github-actions from dashboards
// @description  Minimizes pushs and commits from github actions and bots from github.com dashboard
// @namespace    cuzi
// @author       cuzi
// @version      1.3
// @description  Hide bot's and github-actions' push from dashboard news
// @copyright    2020, cuzi (https://openuserjs.org/users/cuzi)
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @match        https://github.com/
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  document.head.appendChild(document.createElement('style')).innerHTML = `
  .Details:hover .newexpanderbutton .Link--secondary {
    color: var(--color-accent-fg) !important;
  }
  `

  function unhideBot (ev) {
    const div = this
    div.classList.add('shotBot')
    div.removeEventListener('click', unhideBot)
    div.style.fontSize = ''
    if (div.querySelector('.no-border-bottom')) {
      div.querySelector('.no-border-bottom').classList.replace('no-border-bottom', 'border-bottom')
    }
    div.querySelector('.Box').style.display = ''
    div.querySelector('.body').style.height = ''
    div.querySelector('.body .d-flex').style.padding = ''
    div.querySelector('img.avatar').height = '32'
    div.querySelector('img.avatar').width = '32'
    if (div.querySelector('.newexpanderbutton')) {
      div.querySelector('.newexpanderbutton').remove()
    }
  }

  function hideBots () {
    const expandButton = document.querySelector('button.js-details-target:not(.Header-link)[aria-expanded="false"]')
    document.querySelectorAll('#dashboard div.push:not(.shotBot)').forEach(function (div) {
      const label = div.querySelector('.body .d-flex .d-flex .Label')
      const isAppUrl = div.querySelector('.body .d-flex .d-flex a.Link--primary[href^="/apps/"]')
      if (isAppUrl || (label && label.textContent === 'bot')) {
        div.style.fontSize = '10px'
        if (div.querySelector('.border-bottom')) {
          div.querySelector('.border-bottom').classList.replace('border-bottom', 'no-border-bottom')
        }
        div.querySelector('.Box').style.display = 'none'
        div.querySelector('.body').style.height = '22px'
        div.querySelector('.body .d-flex').style.padding = '0px'
        div.querySelector('img.avatar').height = '20'
        div.querySelector('img.avatar').width = '20'
        div.addEventListener('click', unhideBot)
        const line = div.querySelector('.Details .flex-column .flex-justify-between.flex-items-baseline')
        if (line && expandButton && !line.querySelector('button.js-details-target')) {
          const newExpandButton = document.createElement('button')
          line.appendChild(newExpandButton)
          newExpandButton.outerHTML = expandButton.outerHTML.replace('js-details-target', 'js-details-target newexpanderbutton')
        }
      }
    })
  }

  hideBots()
  const iv = window.setInterval(hideBots, 200)
  window.setTimeout(() => window.clearInterval(iv), 5000)
  window.setInterval(hideBots, 4000)
})()
