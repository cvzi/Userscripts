// ==UserScript==
// @name        Mydealz Script
// @description Versteckt abgelaufene Dealz, verbreitert die Seitenansicht, entfernt den Newsletterhinweis und entfernt einige Referrerlinks
// @namespace   cuzi
// @oujs:author cuzi
// @version     4
// @license     GNUGPL
// @include     /^https?:\/\/www\.mydealz\.de\/.*/
// @grant       none
// ==/UserScript==
(function main() {
'use strict';


function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  txt.innerHTML = txt.value;
  txt.innerHTML = txt.value;
  txt.innerHTML = txt.value;
  return txt.value;
}

function putDealzToSleep() {
  var lis = document.querySelectorAll('.thread--expired .thread-title'); 
  for(let i = 0; i < lis.length; i++) {
    let li = lis[i].parentNode.parentNode.parentNode.parentNode;
    let s = li.style;
    s.maxHeight = '10em';   
    s.overflow = 'auto';
    s.opacity = 0.5;
    li.addEventListener('click',reviveDeal);
  }
}

function reviveDeal() {
  this.removeEventListener('click',reviveDeal);
  this.style.maxHeight = "";
  this.style.opacity = 1.0;
}

function restoreLinks() {

  var patterns = [
    {
      pattern: /^http:\/\/www\.mydealz\.de\/visit\?.*&d=(.+)/,
      test: (a, pattern) => pattern.test(a.href), 
      decode: (a, pattern) => decodeHtml(decodeURIComponent(pattern.exec(a.href)[1])) 
    },
    {
      pattern: /&amp;redir=(http.+)"/,
      test: (a, pattern) => "track" in a.dataset && pattern.test(a.dataset.track), 
      decode: (a, pattern) => decodeHtml(decodeURIComponent(pattern.exec(a.dataset.track)[1])) 
    },
    {
      pattern: /"label":"(http.+)"/,
      test: (a, pattern) => "track" in a.dataset && pattern.test(a.dataset.track), 
      decode: (a, pattern) => decodeHtml(JSON.parse(a.dataset.track).label)
    }
  ];
  
  var a = document.querySelectorAll("a[target]");
  for(let i = 0; i < a.length; i++) {
    for(let j = 0, o = patterns[0]; j < patterns.length; o = patterns[++j]) {
      if(o.test(a[i], o.pattern)) {
        a[i].href = o.decode(a[i], o.pattern);
      }
    }
  }
}


// Widen page content
document.querySelector('.page-canvas>.page-content').style.maxWidth = '120em';

// Restore links
restoreLinks();

// Remove newsletter info
try {
  let n = document.querySelector('li.inline-newsletter');
  n.parentNode.removeChild(n); 
} catch(e) {}

// Semi-hide expired dealz
var exclude = [
  /^https?:\/\/www\.mydealz\.de\/(deals)|(freebies)|(gutscheine)\/.+-\d+/, 
  /^https?:\/\/www\.mydealz\.de\/profile\/.*/, 
  /^https?:\/\/www\.mydealz\.de\/search.*/];
if(!exclude.some((pattern) => document.location.href.match(pattern))) {
  putDealzToSleep();
}

// Change search form to https
var form = document.querySelectorAll("form.search");
for(let i = 0; i < form.length; i++) {
  form[i].setAttribute("action", form[i].getAttribute("action").replace(/^http:/,"https:"));
}

})();