// ==UserScript==
// @name        Share Bandcamp.com lyrics and songtexts on Genius.com
// @description Adds a link above the lyrics on bandcamp to share lyrics to genius.com. It then automatically copies all the available information (title, artist, release date, ...) to genius.com
// @updateURL   https://openuserjs.org/meta/cuzi/Share_Bandcamp.com_lyrics_and_songtexts_on_Genius.com.meta.js
// @homepageURL https://openuserjs.org/scripts/cuzi/Share_Bandcamp.com_lyrics_and_songtexts_on_Genius.com
// @namespace   cuzi
// @oujs:author cuzi
// @version     1
// @license     GNUGPL
// @license     MIT
// @include     https://*.bandcamp.com/*
// @include     http://genius.com/new
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js
// @grant       GM_openInTab
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       unsafeWindow
// ==/UserScript==

(function() {
"use strict";

var sid = 0;

function bc_start() {
  // Add links to lyrics info
  var lyricsdiv = document.querySelectorAll(".collapsibleLyrics.lyricsText");
  for(var i = 0; i < lyricsdiv.length; i++) {
      var a = $('<div><a href="#genius">Share on genius.com</a></div>').click(bc_openGenius).prependTo(lyricsdiv[i].parentNode);
  }
}

function bc_openGenius(ev) {
  // License
  if($("#license")) {
    if(!confirm("You need to respect the license of this work.\nIf in doubt, ask the copyright proprietor.\nShort version of the license:\n\n"+$.trim($("#license").text())+"\n\nMore info here:\n"+$("#license a").attr("href")+"\n\nOk?")) {
      return;
    }
  }
  
  // Identify song
  var tr_lyrics = $(this.parentNode.parentNode);
  var tr_song = tr_lyrics.prev("tr");
  
  // Initiate handshake
  GM_setValue("g_acknowledgement", 0); // Receive acknowledgement here
  GM_setValue("bc_waiting",true); // Request acknowledgement
  
  // Open tab 
  GM_openInTab("http://genius.com/new", false);
    
  // Wait for acknowledgement of handshake:
  var iv = window.setInterval(function() {
    sid = GM_getValue("g_acknowledgement", 0);
    if(sid) {
      clearInterval(iv);
      bc_sendData(tr_lyrics, tr_song);
      // Clean up:
      GM_setValue("g_acknowledgement", 0);
    }
  },100);
}

function bc_sendData(tr_lyrics, tr_song) {
  // Collect data and send to genius window

  var releaseDate = new Date(unsafeWindow.TralbumData.album_release_date);
  
  var direct = {
    "song_primary_artist" : unsafeWindow.TralbumData.artist,
    "song_title" : $.trim(tr_song.find('*[itemprop="name"]').text()),
    "song_lyrics" : $.trim(tr_lyrics.find(".lyricsText").text().replace(/\n\n/g, "\n")),
    "song_featured_artists" : "",
    "song_producer_artists" : "",
    "song_writer_artists" : "",
    "song_release_date_1i" : releaseDate.getFullYear(),
    "song_release_date_2i" : releaseDate.getMonth()+1,
    "song_release_date_3i" : releaseDate.getDate(),
  };
  var other = {
    "album_name" : unsafeWindow.TralbumData.current.title,
    "about" : $(".tralbumData.tralbum-about").html(),
    "credits" : $(".tralbumData.tralbum-credits").html(),
    "tags" : Array.map($(".tralbumData.tralbum-tags a"),e => e.text).join(", "),
    "albumart" : $(".popupImage").get(0).href
  };
  
  GM_setValue("bc_data",JSON.stringify({
    "sid" : sid,
    "direct" : direct,
    "other" : other
  }));
  
}



function g_start() {
  // Wait for a first message/handshake from bandcamp
  if(GM_getValue("bc_waiting", false)) {
    sid = 1+Math.random();
    GM_setValue("bc_waiting", false); // Clean up
    GM_setValue("g_acknowledgement", sid); // Send acknowledgement
    // Start receiving data
    g_receiveData();
  }
}

function g_receiveData() {
  // Wait for the data from bandcamp
  var iv = window.setInterval(function() {
    var response = JSON.parse(GM_getValue("bc_data", "{}"));
    if("sid" in response && response.sid == sid) {
      clearInterval(iv);
      
      g_fillForm(response);
      
      // Clean up
      GM_setValue("bc_data", "{}");
    }
  },100);
  
  // Click on "Add album" to generate a new album input field
  var evt = document.createEvent("MouseEvents");
  evt.initEvent("click", true, true);
  document.getElementById("add_album_name").dispatchEvent(evt);
}

function g_fillForm(rsp) {
  // Directly enter data by id
  for(var id in rsp.direct) {
    $(document.getElementById(id)).val(rsp.direct[id]);
  }
  
  // Create keyup event on song name, to generate the warning about duplicates

    var evt = document.createEvent("KeyboardEvent");
    evt.initKeyEvent ("keyup", true, true, window, 0, 0, 0, 0, 0, "e".charCodeAt(0)) 
    document.getElementById("song_primary_artist").dispatchEvent(evt);

  
  // Album name
  $(".album_name.add_album input").first().val(rsp.other.album_name);
  
  // Tags
  $("<div><b>Tags:</b><br>" +  rsp.other.tags + '<div style="position:absolute;font-size:xx-small;color:green;top:-5px; right:0px;">bandcamp info</div></div>').css({
    position:"absolute",
    left : 0,
    top : $(".primary_tag_chooser").offset().top,
    maxWidth: (($(document.body).width() - $("#container").width() - 15) / 2),
    background: "#DDB",
    color: "black",
    padding: "5px"
  }).appendTo(document.body);
  
  // Credits & About & Song title
  var credits = $("<div><b>Title:</b><br>" + rsp.direct.song_title + "<br><b>Credits:</b><div>" +  rsp.other.credits + "</div><b>About:</b><div>" +  rsp.other.about + '</div><div style="position:absolute;font-size:xx-small;color:green;top:-5px; right:0px;">bandcamp info</div></div>').css({
    position:"absolute",
    left : 0,
    top : $(".add_song_page-header:contains('Meta')").offset().top,
    maxWidth: (($(document.body).width() - $("#container").width() - 30) / 2),
    maxHeight: 500,
    overflow:"auto",
    background: "#DDB",
    color: "black",
    padding: "5px"
  }).appendTo(document.body);
  
  // Reposition credits on lyrics change
  var $song_lyrics = $("#song_lyrics");
  var oldheight = $song_lyrics.height();
  $song_lyrics.change(function() {
    if($song_lyrics.height() != oldheight) {
      oldheight = $song_lyrics.height();
      credits.css("top",$(".add_song_page-header:contains('Meta')").offset().top);
    }
  });
  
}


  if(document.location.href == "http://genius.com/new") {
    window.setTimeout(g_start,1000);
  } else if(unsafeWindow.TralbumData) {
    window.setTimeout(bc_start,1000);
  }
})();
