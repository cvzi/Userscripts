// ==UserScript==
// @name         IMDb.com enable right click on images
// @namespace    https://openuserjs.org/users/cuzi
// @license      GPL-3.0-or-later
// @copyright    2020, cuzi (https://openuserjs.org/users/cuzi)
// @version      1.0
// @description  Enable right click on images in the IMDb.com media viewer
// @author       cuzi
// @include      https://www.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    window.setInterval(function() {
      document.querySelectorAll('div[class*="PortraitContainer"],div[class*="LandscapeContainer"]').forEach(function (div){
        div.style.zIndex = 2
      })
    }, 1000)

})();