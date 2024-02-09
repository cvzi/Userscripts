// ==UserScript==
// @name            Paywall redirect to Archive.today
// @name:de         Paywall weiterleitung auf Archive.today
// @namespace       https://greasyfork.org/en/users/20068-cuzi
// @version         2.15
// @description     Redirect spiegel.de faz.net zeit.de zerohedge.com Süddeutsche Zeitung SZPlus tagesspiegel paywall pages to archive.today
// @description:de  Leitet Spiegel.de faz.net zerohedge.com zeit.de/ Online Plus/Paywall/S+ Süddeutsche Zeitung SZPlus tagesspiegel Seiten automatisch auf archive.today
// @icon            https://spiegel.de/favicon.ico
// @author          cuzi
// @license         GPL-3.0-or-later

// @match           https://www.spiegel.de/*
// @match           https://www.zeit.de/*
// @match           https://www.zerohedge.com/*
// @match           https://www.faz.net/*
// @match           https://m.faz.net/*
// @match           https://www.sueddeutsche.de/*
// @match           https://sz-magazin.sueddeutsche.de/*
// @match           https://www.tagesspiegel.de/*

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
/* jshint asi: true, esversion: 8 */

(async function () {
  'use strict'

  const scriptName = 'Paywall redirect to Archive.today'

  const hostnames = [
    'archive.is',
    'archive.ph',
    'archive.today',
    'archive.fp',
    'archive.li',
    'archive.md',
    'archive.vn'
  ]

  function sleep (t) {
    return new Promise(resolve => setTimeout(resolve, t))
  }

  function checkAvailability (hostname) {
    return new Promise(function (resolve, reject) {
      const onResponse = function (response) {
        if ((response.status >= 200 && response.status <= 400) || response.status === 429) {
          resolve(response)
        } else {
          reject(new Error('HOST_UNAVAILABLE'))
        }
      }
      GM.xmlHttpRequest({
        url: `https://${hostname}/`,
        method: 'GET',
        headers: {
          Range: 'bytes=0-63'
        },
        onload: onResponse,
        onerror: onResponse
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
        window.setTimeout(() => showSpinner(hostname), 0)
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
      window.alert(scriptName +
        '\n\nSorry, all of the archive.today domains seem to be down.\n\nChecked:\n' +
        hostnames.join('\n') +
        '\n\nIf you are using a Cloudflare DNS, try to switch to another DNS provider or use a VPN. Currently Cloudflare can\'t reliably resolve archive.today.')
    }
  }

  GM.registerMenuCommand(scriptName + ' - Archive.today page', () => archivePage(document.location.href))

  let running = false
  let firstRun = true
  async function main () {
    if (running) {
      return
    }
    if (
      document.location.hostname.indexOf('spiegel') !== -1 && document.location.pathname.length > 1 && (
        document.querySelector('[data-area="paywall"]') || (
          document.querySelector('#Inhalt article header #spon-spplus-flag-l') && document.querySelectorAll('article h2').length === 1
        )
      )
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('tagesspiegel') !== -1 && document.querySelector('#paywal').length !== 0) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('zeit.de') !== -1 &&
      document.location.pathname.length > 1 && (
        document.querySelector('.zplus-badge__link') ||
        document.getElementById('paywall') ||
        ('k5aMeta' in window && window.k5aMeta.paywall === 'hard')
      )
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('.faz.net') !== -1 &&
      document.location.pathname.endsWith('.html') &&
      document.querySelectorAll('.atc-HeadlineText').length === 1 && (
        document.querySelector('[class*=atc-ContainerPaywall]') || // desktop  www.faz.net
        document.querySelector('[id*=paywall]')) // mobile m.faz.net
    ) {
      if (firstRun) {
        // Wait a little the first time to let bypass-paywalls-firefox-clean do the job
        // if it fails to unblock the page, we will archive it in the second run
        firstRun = false
        await sleep(3000)
      } else {
        running = true
        archivePage(document.location.href)
      }
    } else if (
      document.location.hostname.indexOf('zerohedge.com') !== -1 &&
      document.location.pathname.length > 1 && (
        document.querySelector('[class*=PremiumOverlay] [class*=PremiumOverlay]') ||
        ('__NEXT_DATA__' in window && window.__NEXT_DATA__.props.pageProps.node.isPremium === true)
      )
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('sz-magazin.sueddeutsche.de') !== -1 &&
      document.location.search.indexOf('reduced=true') !== -1 &&
      document.querySelector('.articlemain__inner--reduced .paragraph--reduced')
    ) {
      running = true
      archivePage(document.location.href)
    } else if (
      document.location.hostname.indexOf('sueddeutsche.de') !== -1 &&
      document.location.search.indexOf('reduced=true') !== -1 &&
      document.querySelector('#sz-paywall iframe')
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
    firstRun = false
  }
  await main()
  await sleep(1000)
  await main()
  await sleep(5000)
  await main()
})()
