// ==UserScript==
// @name        Bandcamp download mp3s
// @description Shows download links for the preview files on bandcamp albums
// @namespace   cuzi
// @oujs:author cuzi
// @homepageURL https://openuserjs.org/scripts/cuzi/Bandcamp_download_mp3s
// @version     1
// @license     GNUGPL
// @include     https://*.bandcamp.com/*
// @grant       none
// ==/UserScript==
(function() {
  if(TralbumData && TralbumData.hasAudio && !TralbumData.freeDownloadPage && TralbumData.trackinfo) {
    var i = 1;
    var div = document.createElement("div");
    document.body.appendChild(div);
    TralbumData.trackinfo.forEach(function(t) {
      for (var prop in t.file) {
        var mp3 = t.file[prop].replace("//","http://");
        var a = document.createElement("a");
        a.href = mp3;
        a.appendChild(document.createTextNode(mp3));
        div.appendChild(document.createTextNode(i+++" "));
        div.appendChild(a);
        div.appendChild(document.createElement("br"));
      }
    });
  }
})();