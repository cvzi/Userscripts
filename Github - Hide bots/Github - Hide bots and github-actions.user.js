// ==UserScript==
// @name         Github - Hide bots and github-actions from dashboards
// @description  Minimizes pushs and commits from github actions and bots from github.com dashboard
// @namespace    cuzi
// @author       cuzi
// @version      1.1
// @description  Hide bot's and github-actions' push from dashboard news
// @copyright    2020, cuzi (https://openuserjs.org/users/cuzi)
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @match        https://github.com/
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

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
  }

  function hideBots () {
    document.querySelectorAll('#dashboard div.push:not(.shotBot)').forEach(function (div) {
      const label = div.querySelector('.body .d-flex .d-flex .Label')
      const a = div.querySelector('.body .d-flex .d-flex a')
      if ((label && label.textContent === 'bot') || (a && a.textContent === 'github-actions')) {
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
      }
    })
  }

  hideBots()
  const iv = window.setInterval(hideBots, 200)
  window.setTimeout(() => window.clearInterval(iv), 5000)
  window.setInterval(hideBots, 4000)
})()
