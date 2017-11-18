// ==UserScript==
// @name        iframe embed Test Greasemonkey 4
// @include     /^https:\/\/cvzi\.github\.io\/Userscripts\/index\.html\?link=.+/
// @include     /^https:\/\/cvzi\.github\.io\/Userscripts\/index\.html/
// ==/UserScript==

if(document.location.search) {
  alert(document.location.search);
} else {

  var url = "https://cvzi.github.io/Userscripts/index.html"

  var iframe = document.createElement("iframe");
  iframe.src = url + "?iframeWorks";

  document.body.appendChild(iframe);


  var embed = document.createElement("embed");
  embed.src = url + "?embedWorks";


  document.body.appendChild(embed);
}
