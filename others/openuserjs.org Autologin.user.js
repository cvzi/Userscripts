// ==UserScript==
// @name        openuserjs.org Autologin
// @description Login and redirect to last viewed page
// @namespace   openuserjs.org
// @license     MIT
// @version     14.2
// @match       https://openuserjs.org/*
// @exclude     /^https?:\/\/openuserjs\.org\/auth\/.*$
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM.getValue
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require     https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@1.3.0/dist/es5/detectIncognito.min.js
// @icon        https://www.google.com/s2/favicons?sz=64&domain=openuserjs.org
// @sandbox     JavaScript
// ==/UserScript==

/* global GM, detectIncognito */

/* jshint asi: true, esversion: 8 */

(function () {
  'use strict'

  function sleep (t) {
    return new Promise(resolve => setTimeout(resolve, t))
  }

  const main = () => {
    GM.getValue('username', false).then(function (username) {
      if (username && !document.getElementById('clearAutoLogin')) {
        const li = document.createElement('li')
        li.setAttribute('id', 'clearAutoLogin')
        li.innerHTML = '<a href="#forget" title="Forget autologin"><span class="visible-xs-inline">Forget autologin</span><i class="fa fa-chain-broken"></i></a>'
        document.querySelector('.navbar-nav').insertBefore(li, document.querySelector('.navbar-nav li:last-child'))
        li.addEventListener('click', async function () {
          if (window.confirm('Forget autologin?')) {
            await GM.setValue('username', false)
            window.alert('Your autologin username has been deleted.')
          }
        })
      }

      if (document.title.indexOf('503 ') === 0) {
        // We're busy right now. Try again later.
      } else if (document.location.href.match(/^https?:\/\/openuserjs\.org\/login\/?$/)) {
        if (username) {
          document.getElementsByName('username')[0].value = username
          document.getElementsByName('consent')[0].checked = true
          sleep(500).then(() => {
            document.getElementById('action').click()
          })
        } else {
          const button = document.getElementById('action')
          button.addEventListener('click', async function (ev) {
            const inputs = document.getElementsByName('username')
            for (let j = 0; j < inputs.length; j++) {
              if (inputs[j].value) {
                await GM.setValue('username', inputs[j].value)
                return
              }
            }
          })
        }
      } else if (username && document.getElementsByClassName('fa fa-sign-in') && document.getElementsByClassName('fa fa-sign-in')[0]) {
        sleep(500).then(() => {
          document.getElementsByClassName('fa fa-sign-in')[0].click()
        })
      }
    })
  }

  detectIncognito().then((result) => {
    if (!result.isPrivate) {
      main()
    }
  }).catch((e) => {
    console.error(e)
    main()
  })
})()
