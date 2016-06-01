// ==UserScript==
// @name           flickr Download Link
// @version        3.2
// @description    Adds a download link next to the Create link and enables right click on photos.
// @homepageURL    https://openuserjs.org/scripts/cuzi/flickr_Download_Link
// @namespace      cuzi
// @license        MIT
// @oujs:author    cuzi
// @grant          none
// @include        /^https?:\/\/www\.flickr\.com\/.*$/
// ==/UserScript==

(function() {
"use strict";

function page_photo() {

  var main_photo = document.getElementsByClassName('main-photo')[0];
  
  // Make the right click context menu available
  document.getElementsByClassName('main-photo')[0].style.zIndex = 10000;
  document.getElementsByClassName('main-photo')[0].parentNode.parentNode.appendChild( document.getElementsByClassName('main-photo')[0].parentNode); // Move photo a level up

  if(document.getElementsByClassName('facade-of-protection-neue').length > 0) { // Remove protection layer
    document.getElementsByClassName('facade-of-protection-neue')[0].setAttribute("style","display:inline; position:relative;");
  }

  var url = main_photo.src; // URL of currently shown image
    
  if(document.getElementsByClassName("all-sizes server-only-link").length > 0) {
    // Download link in ballon
    var balloon = document.getElementsByClassName("view photo-engagement-view")[0].getElementsByClassName("sizes")[0];

    if(balloon.children.length == 1 && !document.getElementById("idllusgm2")) {
      // Download is disabled -> add download link for current resolution
      var orga = document.getElementsByClassName("all-sizes server-only-link")[0];
      var a = orga.cloneNode();
      var li = document.createElement("li");
      a.setAttribute("id","idllusgm2");
      a.setAttribute("href",url);
      a.setAttribute("class","server-only-link");
      a.appendChild(document.createTextNode("Download current size"));
      a.dataset.track = "";
      a.dataset.rapid_p = "";
      li.appendChild(a);
      balloon.appendChild(li);
    } else if(balloon.getElementsByClassName("Original").length) {
      var original = balloon.getElementsByClassName("Original")[0];
      url = original.getElementsByTagName("a")[0].href; // Use "Original" as download link
    }
  }

  if(!document.getElementById("idllusgm")) {
    // Download link in nav bar
    var li = document.createElement('li');
    li.setAttribute('id','iddllusgm3')
    li.setAttribute("title","Download current size")
    li.setAttribute("role","menuitem")
    var a = document.createElement('a');
    li.appendChild(a);
    document.getElementsByClassName('nav-menu')[0].appendChild(li);
    a.setAttribute('class','gn-title');
    a.setAttribute('id','idllusgm');
    a.setAttribute('href',url);
    a.appendChild(document.createTextNode('Download'));
  } else {
    document.getElementById("idllusgm").setAttribute('href',url);
  }
}


function page_size_overview() {
  var allsizes;
  if((allsizes = document.getElementById("allsizes-photo")) && allsizes.getElementsByClassName("spaceball").length > 0) {
    // Size overview page
    var allsizes = document.getElementById("allsizes-photo");
    allsizes.removeChild(allsizes.getElementsByClassName("spaceball")[0]); // Remove protection layer -> make the right click context menu available
  }
}

function page_video() {
  if(document.getElementById("iddllusgm3")) { // Remove photo specific link from nav bar
    document.getElementById("iddllusgm3").parentNode.removeChild(document.getElementById("iddllusgm3"));
  }
}


function main() {
  
  if(document.getElementsByClassName('yui3-videoplayer-video').length > 0) {
    page_video();
  } else if(document.getElementsByClassName('main-photo').length > 0) {
    page_photo();
  } else if(document.getElementById("allsizes-photo")) {
    page_size_overview();
  }

}

window.setInterval(main, 1000);


})();