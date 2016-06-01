// ==UserScript==
// @name        Auto reload image after error, Referral Denied
// @description Avoids error: Referral Denied You don't have permission to access xyz on this server
// @namespace   cuzi
// @oujs:author cuzi
// @version     1
// @license     GNUGPL
// @include     /^http.+\.jpg$/
// @include     /^http.+\.jpeg$/
// @include     /^http.+\.png$/
// @include     /^http.+\.gif$/
// @grant       none
// ==/UserScript==
(function() {
"use strict";
  if(!document.querySelector("img")) {
    document.location.href += "";
  }
})();