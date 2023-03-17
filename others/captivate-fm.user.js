// ==UserScript==
// @name         captivate.fm player download link
// @namespace    https://openuserjs.org/users/cuzi
// @version      0.1
// @description  Show a download link in the captivate.fm player
// @author       cuzi
// @license      MIT
// @copyright    2023, cuzi (https://openuserjs.org/users/cuzi)
// @match        https://player.captivate.fm/*
// @icon         https://icons.duckduckgo.com/ip2/captivate.fm.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const source = document.querySelector('audio source[src]')
    if (source && source.src) {
      const url = source.src
      const a = document.querySelector('button.sound').parentNode.appendChild(document.createElement('a'))
      a.target = '_blank'
      a.href = url
      const button = a.appendChild(document.createElement('button'))
      button.appendChild(document.createTextNode('⍗'))
      button.style.fontSize = '18pt'
    }
})();
