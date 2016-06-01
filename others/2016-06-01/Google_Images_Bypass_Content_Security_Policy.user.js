// ==UserScript==
// @name        Google Images Bypass Content Security Policy
// @description Bypasses the Content Security Policy of websites that are blocking the website preview view on Google Images results. Otherwise you only see the mesage: Blocked by Content Security Policy. This page has a content security policy that prevents it from being loaded in this way. Firefox prevented this page from loading in this way because the page has a content security policy that disallows it.
// @namespace   cuzi
// @oujs:author cuzi
// @version     2
// @license     GNUGPL
// @include     /^https?:\/\/images\.google\.\w{2,3}\//
// @grant       GM_xmlhttpRequest
// ==/UserScript==
(function() {
  function loadFrame(ev) {
    removeButton();
    var iframe = document.getElementById("il_f");
    GM_xmlhttpRequest({
      method: "GET",
      url: iframe.src,
      onload: function(response) { 
        var charset = "utf-8";
        var re = /<meta charset=\"(.*?)\">/;
        var m = response.responseText.match(re);
        if(m && m[1]) {
          charset = m[1];
        }        
        iframe.src = 'data:text/html;charset='+charset+',' + encodeURIComponent(response.responseText);
      }
    });
  }
  function addButton(ev) {
    button = document.createElement("button");
    button.appendChild(document.createTextNode("Bypass Content Security Policy"));
    button.setAttribute("style","font-size:150%; color:crimson;");
    button.addEventListener("click",loadFrame);
    document.getElementById("il_mi").insertBefore(button, document.getElementById("il_mi").firstChild);
  }
  function removeButton(ev) {
    if(button) {
      button.parentNode.removeChild(button);
      button = null;
    }
  }
  if(document.getElementById("il_f")) {
    var iframe = document.getElementById("il_f");
    var t0 = window.setTimeout(loadFrame,4000);
    var button;
    addButton();
    iframe.addEventListener("load",function(ev) {
       clearInterval(t0);
    });
  }
})();