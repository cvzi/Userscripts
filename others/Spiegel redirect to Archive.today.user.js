// ==UserScript==
// @name            Spiegel redirect to Archive.today
// @name:de         Spiegel Weiterleitung auf Archive.today
// @namespace       https://greasyfork.org/en/users/20068-cuzi
// @version         2.6
// @description     Redirect spiegel.de/zeit.de paywall pages to archive.today
// @description:de  Leitet Spiegel.de/zeit.de/ Online Plus/Paywall/S+ Seiten automatisch auf archive.today
// @icon            https://spiegel.de/favicon.ico
// @author          cuzi
// @license         GPL-3.0-or-later
// @match           https://www.spiegel.de/*
// @match           https://www.zeit.de/*
// @match           https://archive.today/*
// @match           https://archive.ph/*
// @match           https://archive.is/*
// @match           https://archive.fp/*
// @match           https://archive.li/*
// @match           https://archive.md/*
// @match           https://archive.vn/*
// @grant           GM.registerMenuCommand
// @grant           GM.xmlHttpRequest
// @connect         archive.today
// @connect         archive.ph
// @connect         archive.is
// @connect         archive.fp
// @connect         archive.li
// @connect         archive.md
// @connect         archive.vn
// ==/UserScript==

/* global GM */

(function () {
  'use strict'

  const scriptName = 'Spiegel redirect to Archive.today'

  const hostnames = [
    'archive.is',
    'archive.ph',
    'archive.today',
    'archive.fp',
    'archive.li',
    'archive.md',
    'archive.vn'
  ]

  function checkAvailability (hostname) {
    return new Promise(function (resolve, reject) {
      GM.xmlHttpRequest({
        url: `https://${hostname}/`,
        method: 'GET',
        headers: {
          Range: 'bytes=0-63'
        },
        onload: function (response) {
          if (response.status >= 200 && response.status <= 400) {
            resolve(response)
          } else {
            reject(new Error('HOST_UNAVAILABLE'))
          }
        },
        onerror: function (response) {
          reject(new Error('HOST_UNAVAILABLE'))
        }
      })
    })
  }

  function showSpinner (msg) {
    let style = document.getElementById('check_host_style')
    if (!style) {
      style = document.head.appendChild(document.createElement('style'))
      style.setAttribute('id', 'check_host_style')
      style.textContent = `
        #check_host_spinner {
          position: fixed;
          background: #fff;
          height: 2.2em;
          top: 1em;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 1000;
          border-radius: 5px;
          border: 1px solid black;
          color: black;
          min-width: 7em;
          padding:3px;
        }
        #check_host_spinner .spinner-element {
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-name: slide;
          animation-timing-function: linear;
          animation-direction: alternate-reverse;
          animation-play-state: running;
          background-color: #000;
          border-radius: 50%;
          border: 2px solid #fff;
          color: #fff;
          height: 1em;
          margin: auto;
          margin-left: 0;
          width: 1em;
          margin-top: -0.5em;
        }

        @keyframes slide {
          from {
            margin-left:0
          }
          to {
            margin-left:80%
          }
        }
      `
    }

    let div = document.getElementById('check_host_spinner')
    if (!div) {
      div = document.body.appendChild(document.createElement('div'))
      div.setAttribute('id', 'check_host_spinner')
      const text = div.appendChild(document.createElement('span'))
      text.setAttribute('id', 'check_host_text')
      const spinner = div.appendChild(document.createElement('div'))
      spinner.classList.add('spinner-element')
    }
    document.getElementById('check_host_text').innerHTML = msg || ''
    document.querySelector('#check_host_spinner .spinner-element').style.display = 'block'
  }

  function stopSpinner () {
    const e = document.querySelector('#check_host_spinner .spinner-element')
    if (e) {
      e.style.display = 'none'
    }
  }

  async function archivePage (url) {
    window.setTimeout(() => showSpinner('archive'), 0)

    // Check which hostname of archive is currently available
    let workingHostname = null
    for (const hostname of hostnames) {
      try {
        showSpinner(hostname)
        await checkAvailability(hostname)
        workingHostname = hostname
        break
      } catch (err) {
        if (err && 'message' in err && err.message === 'HOST_UNAVAILABLE') {
          console.debug(`${hostname} is NOT available`)
        } else {
          throw err
        }
      }
    }

    if (workingHostname) {
      document.location.href = `https://${workingHostname}/?run=1&url=${encodeURIComponent(url)}`
    } else {
      window.setTimeout(() => {
        showSpinner(`<a href="https://archive.today/?run=1&url=${encodeURIComponent(url)}">Try archive.today</a>`)
        stopSpinner()
      }, 200)
      window.alert(scriptName + '\n\nSorry, all of the archive.today domains seem to be down.\n\nChecked:\n' + hostnames.join('\n'))
    }
  }

  GM.registerMenuCommand(scriptName + ' - Archive.today page', () => archivePage(document.location.href))

  let running = false
  function main () {
    if (running) {
      return
    }
    if (
      document.location.hostname.indexOf('spiegel') !== -1 && document.location.pathname.length > 1 && (
        document.querySelector('[data-area="paywall"]') || (
          document.querySelector('article #spon-spplus-flag-l') && document.querySelectorAll('article h2').length === 1
        )
      )
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('zeit.de') !== -1 &&
      document.location.pathname.length > 1 &&
      document.querySelector('.zplus-badge__link')
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('archive') !== -1 &&
      document.querySelector('form#submiturl [type=submit]')
    ) {
      running = true
      // Insert url and press submit button
      const m = document.location.search.match('url=([^&]+)')
      if (m) {
        const url = decodeURIComponent(m[1])
        document.querySelector('form#submiturl input#url').value = url
        document.querySelector('form#submiturl [type=submit]').click()
      }
    } else if (
      document.location.hostname.indexOf('archive') !== -1 &&
      document.querySelector('[data-area="paywall"]')
    ) {
      running = true
      // Redirect to history of this page, if there is also a paywall in this archive
      // Only redirect once for this session
      const key = document.location.href
      const alreadyRedirected = window.sessionStorage.getItem(key)
      const historyLink = Array.from(document.querySelectorAll('#HEADER form a')).filter(e => e.textContent.indexOf('history') !== -1).shift()
      if (!alreadyRedirected && historyLink) {
        window.sessionStorage.setItem(key, '1')
        historyLink.click()
      }
    }
  }
  main()
  window.setTimeout(main, 1000)
  window.setTimeout(main, 5000)
})()
