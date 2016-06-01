// ==UserScript==
// @name        openuserjs.org Autologin
// @namespace   openuserjs.org
// @oujs:author cuzi
// @version     3
// @include     /^https?:\/\/openuserjs\.org(\/.*)?$/
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_registerMenuCommand
// ==/UserScript==
"use strict";

var username = GM_getValue("username",false);
if(username) {
  GM_registerMenuCommand("openuserjs.org Autologin - "+username+" - Reset", function() {
    GM_setValue("username",false);
    GM_setValue("re",false);
    alert("Your username has been deleted.");
  });
}

if(document.title.indexOf("503 ") === 0) {
  // We're busy right now. Try again later.
}else if(document.location.href.match(/^https?:\/\/openuserjs\.org\/register\/?$/)) {
  if(username) {
    document.getElementsByName("username")[0].value = GM_getValue("username");
    document.getElementsByClassName("fa fa-sign-in fa-fw")[0].click();
  } else {
    var buttons = document.getElementsByClassName("btn btn-info");
    for(var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click",function(ev) {
        var inputs = document.getElementsByName("username");
        for(var j = 0; j < inputs.length; j++) {
          if(inputs[j].value) {
            GM_setValue("username",inputs[j].value);
             return;
          }
        }
      });
    }
  }
} else if(username && document.getElementsByClassName("fa fa-sign-in") && document.getElementsByClassName("fa fa-sign-in")[0]) {
  GM_setValue("re",document.location.href);
  document.location.href = "https://openuserjs.org/register";
} else if(username && document.location.href.match(/^https?:\/\/openuserjs\.org\/?$/) && GM_getValue("re",false)) {
  var re = GM_getValue("re",false);
  GM_setValue("re",false);
  if(document.location.href != re) {
    document.location.href = re;
  }
}

/*
  GM_xmlhttpRequest({
    method: "POST",
    url: "https://openuserjs.org/auth/",
    data: "username="+encodeURIComponent(username),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    onload: function(response) {
      document.location.href = re;
    }
  })
*/