// ==UserScript==
// @name            Spiegel redirect to Archive.today
// @name:de         Spiegel Weiterleitung auf Archive.today
// @namespace       https://greasyfork.org/en/users/20068-cuzi
// @version         2.2
// @description     Redirect spiegel.de paywall pages to archive.today
// @description:de  Leitet Spiegel.de Online Plus/Paywall/S+ Seiten automatisch auf archive.today
// @icon            https://spiegel.de/favicon.ico
// @author          cuzi
// @license         GPL-3.0-or-later
// @license         Unlicense
// @match           https://www.spiegel.de/*
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

  async function archivePage (url) {
    // Check which hostname of archive is currently available
    let workingHostname = null
    for (const hostname of hostnames) {
      try {
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
      document.location.href = `https://${workingHostname}/?url=${encodeURIComponent(url)}`
    } else {
      window.alert(scriptName + '\n\nSorry, all of the archive.today domains seem to be down.\n\nChecked:\n' + hostnames.join('\n'))
    }
  }

  GM.registerMenuCommand(scriptName + ' - Archive.today page', () => archivePage(document.location.href))

  if (document.location.hostname.indexOf('spiegel') !== -1 && document.querySelector('[data-area="paywall"]')) {
    archivePage(document.location.href)
  } else if (document.location.hostname.indexOf('archive') !== -1 && document.querySelector('form#submiturl [type=submit]')) {
    // Insert url and press submit button
    const m = document.location.search.match('url=([^&]+)')
    if (m) {
      const url = decodeURIComponent(m[1])
      document.querySelector('form#submiturl input#url').value = url
      document.querySelector('form#submiturl [type=submit]').click()
    }
  } else if (document.location.hostname.indexOf('archive') !== -1 && document.querySelector('[data-area="paywall"]')) {
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
})()
