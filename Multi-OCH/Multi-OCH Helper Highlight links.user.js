// ==UserScript==
// @name        Multi-OCH Helper Highlight links
// @namespace   cuzi
// @license     MIT
// @copyright   2014, cuzi (https://openuserjs.org/users/cuzi)
// @description nopremium.pl and premiumize.me. Highlight one-click-hoster links and include Multi-OCH Helper button
// @homepageURL https://openuserjs.org/scripts/cuzi/Multi-OCH_Helper_Highlight_links
// @updateURL   https://openuserjs.org/meta/cuzi/Multi-OCH_Helper_Highlight_links.meta.js
// @icon        https://greasyfork.org/system/screenshots/screenshots/000/003/478/original/icon_ampel.png
// @include     *
// @exclude     *.yahoo.*
// @exclude     *.google.*
// @exclude     *.youtube.*
// @exclude     *.bing.com*
// @exclude     *duckduckgo.com*
// @exclude     *bandcamp.com*
// @exclude     *.tumblr.com*
// @version     10.7
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM.getValue
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require     https://openuserjs.org/src/libs/cuzi/OCH_List.js
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

(async function() {
"use strict";

const MAXTEXTNODES = 10000;

const s_myname = "Multi-OCH Helper Highlight links";
const s_topname = "Multi-OCH Helper";
const syncHostersHost = "https://cvzi.github.io/"
const syncHostersUrl = syncHostersHost + "Userscripts/index.html?link=sync"
const ignoreList = [["some.love.txt",30]]
const chrome = ~navigator.userAgent.indexOf("Chrome")

var $J = $.noConflict(true);

var config = {
  mouseOverDelay : 700,
  frameWidth : "170px",
  frameHeight : "200px",
  colorHosterAvailableBG : 'green',
  colorHosterAvailableFG : 'white',
  colorHosterUnavailableBG : 'rgba(255,0,0,0.5)',
  colorHosterUnavailableFG : 'white',
  colorLinkOfflineBG : 'rgba(255,0,0,0.5)',
  colorLinkOfflineFG : 'silver',
  maxRequestsPerPage : 2,
  updateHosterStatusInterval :  24*7 // weekly update
};


// These hosters are supported by but have a X-Frame-Options enabled or simply do not work without javascript.
var noframeHosters = [
  '1fichier',
  'clicknupload',
  'filecloud',
  'filefactory',
  'firedrive',
  'mega',
  'rapidgator',
  'uploaded',
  'uploadrocket',
  'uptobox'
];



var multi = {
  'nopremium.pl' : new (function() {
    var self = this;
    this.key = 'nopremium.pl';
    this.name = 'NoPremium.pl';
    this.homepage = 'https://www.nopremium.pl/';

    var mapHosterName = function(name) {return name.replace("-","")};

    this.updateStatusURL = 'https://www.nopremium.pl/';
    this.updateStatusURLpattern =/https?:\/\/www\.nopremium\.pl.*/;

    this.status = {};
    this.init = async function() {
      self.lastUpdate = new Date(await GM.getValue(self.key+"_status_time",0));
      self.status = JSON.parse(await GM.getValue(self.key+"_status","{}"));
    };

    this.updateStatus = async function() { // Update list of online hosters
      if(document.location.href.match(self.updateStatusURL)) {
        // Read and save current status of all hosters
        self.status = {};
        $J("#servers a[title]").each(function() {
          var name = mapHosterName(this.title);
          self.status[name] = true;
        });
        await GM.setValue(self.key+"_status",JSON.stringify(self.status));
        await GM.setValue(self.key+"_status_time",""+(new Date()));
        console.log(s_myname+": "+self.name+": Hosters ("+Object.keys(self.status).length+") updated");
      } else {
        alert(s_myname+"\n\nError: wrong update URL");
      }
    };
    this.isOnline = function(hostername) {
      return hostername in self.status && self.status[hostername];
    };
  })(),
  'premiumize.me' : new (function() {
    var self = this;
    this.key = 'premiumize.me';
    this.name = 'premiumize';
    this.homepage = 'https://www.premiumize.me/';

    var mapHosterName = function(name) { return name.replace("-","")};

    this.updateStatusURL = 'https://www.premiumize.me/hosters';
    this.updateStatusURLpattern = /https:\/\/www\.premiumize\.me\/hosters\/?/;

    this.status = {};
    this.init = async function() {
      self.lastUpdate = new Date(await GM.getValue(self.key+"_status_time",0));
      self.status = JSON.parse(await GM.getValue(self.key+"_status","{}"));
    };

    this.updateStatus = function() { // This works only with api key, which only the main script has

    };
    this.isOnline = function(hostername) {
      return hostername in self.status && self.status[hostername];
    };
  })()
};

function matchHoster(str) {
  // Return name of first hoster that matches, otherwise return false
  for(let i in ignoreList) {
    if (str.indexOf(...ignoreList[i]) !== -1) {
      return false;
    }
  }

  for(var name in OCH) {
    for(var i = 0; i < OCH[name].pattern.length; i++) {
      if(OCH[name].pattern[i].test(str)) {
        return name
      }
    }
  }
  return false;
}


// All suitable urls are saved in this array:
var alllinks = [];

function frameSrc(src) {
  // Prevent websites from busting the iframe by using a second "sandboxed" iframe
  // It's a kind of magic.
  var framesrc = 'data:text/html,';
  framesrc += encodeURIComponent('<!DOCTYPE html>\
  <html lang="en">\
    <head>\
      <meta charset="utf-8">\
      <title>HTML5</title>\
      <style>* { margin:0px; padding:0px; }</style>\
      <script>\
      function addlistener() {\
        window.addEventListener("message", function(e){\
          if(! "iAm" in e.data || e.data.iAm != "Unrestrict.li") return; \
          document.getElementById("mysandyframe").contentWindow.postMessage(e.data,\'*\');\
        }, true);\
      }\
      </script>\
    </head>\
    <body onload="addlistener();">\
      <iframe\
      id="mysandyframe"\
      sandbox\
      scrolling="no"\
      frameborder="0"\
      seamless="seamless"\
      src="'+src+'"\
      style="border: 0; width:'+config.frameWidth+'; height:'+config.frameHeight+';">\
    </body>\
  </html>');
  return framesrc;
}


function showMenu(jlink,textContent)  {
  // Show the button

  var link;
  if(textContent) {
    link = jlink.text();
  } else {
    link = jlink.attr("href");
  }

  /*
  if(noframeHosters.indexOf(jlink.data('hoster')) != -1) {
    link = 'https://cvzi.github.io/Userscripts/index.html?link='+encodeURIComponent(link);
  }
*/

  // Create iframe
  // var frame = $J("<iframe></iframe>"); // GREASEMONKEY4
  var frame = $J("<embed></embed>");




  //if(noframeHosters.indexOf(jlink.data('hoster')) != -1) { // GREASEMONKEY4
  if(true) {
    frame.attr("src", 'https://cvzi.github.io/Userscripts/index.html?link='+encodeURIComponent(link));
  } else {
    frame.attr("src", frameSrc(link));
  }

  frame.attr("scrolling","no");
  frame.attr("frameborder","no");
  frame.attr("seamless","seamless");
  var p = jlink.offset();
  frame.css({
    "position":"absolute",
    "background" : "white",
    "width":config.frameWidth,
    "height":config.frameHeight,
    "top" : p.top+15,
    "left" : p.left,
    "padding":"1px",
    "boxShadow" : "3px 3px 5px #444",
    "border" : "4px solid #9055c5",
    "borderRadius" : "0 5px 5px 5px"
    });
  frame.appendTo(document.body);

  // Send all links on this page to the "Multi-OCH Helper"
  setInterval(function() {
    if(frame[0].contentWindow)
      frame[0].contentWindow.postMessage({ "iAm": "Unrestrict.li", "type": "alllinks", "links" : alllinks, "loc": document.location.href}, '*');
  },500);

  // Check whether more links are selected
  var sel = window.getSelection();
  var selelected_links = [];
  if(!sel.isCollapsed) {
    for(var j = 0; j < sel.rangeCount; j++) {
      var frag = sel.getRangeAt(j).cloneContents();
      var span = document.createElement("span");
      span.appendChild(frag);
      var a = span.getElementsByTagName("a");
      for(var i = 0; i < a.length; i++) {
        var url = a[i].href;
        var m = matchHoster(url);
        if(url && m !== false) {
          selelected_links.push(url);
        }
      }
    }
  }
  if(selelected_links.length > 0) {
    setInterval(function() {
      if(frame[0].contentWindow)
        frame[0].contentWindow.postMessage({ "iAm": "Unrestrict.li", "type": "selectedlinks", "links" : selelected_links, "loc": document.location.href}, '*');
    },500);
  }

  // Close frame on first click and prevent the <a>-element from opening a new window
  jlink.data('onclick', jlink[0].onclick);
  jlink[0].onclick = null;
  jlink.one( "click", function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    let jthis = $J(this);

    // Close frame
    frame.remove();
    // Restore onclick event
    this.onclick = jthis.data('onclick');
    // Restore mouseover event
    jthis.data('mouseOverAvailable',true);
    jthis.data('mouseOverTimeout',false);

    return false;
  });

}

var firstAttach = true;
var attachEvents = function() {
  let links = [];


  // Normalize hoster object: Replace single patterns with arrays [RegExp]
  if(firstAttach) {
    for(let name in OCH) {
      if(!Array.isArray(OCH[name].pattern)) {
        OCH[name].pattern = [ OCH[name].pattern ];
      }
    }
    firstAttach = false;
  }

  // Find all text nodes that contain "http://"
  let nodes = [];
  let walk = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{ acceptNode: function(node) {
    if(node.parentNode.href || node.parentNode.parentNode.href || node.parentNode.parentNode.parentNode.href)
      return NodeFilter.FILTER_REJECT;
    if(node.parentNode.tagName == "TEXTAREA" || node.parentNode.parentNode.tagName == "TEXTAREA")
      return NodeFilter.FILTER_REJECT;
    if(node.data.match(/(\s|^)https?:\/\/\w+/))
      return NodeFilter.FILTER_ACCEPT;
  } },false);
  let node = walk.nextNode();
  while(node) {
      nodes.push(node);
      node = walk.nextNode();
  }

  // For each found text nodes check whether the URL is a valid OCH URL
  for(var i = 0; i < nodes.length && i < MAXTEXTNODES; i++) {
    if("" === nodes[i].data) {
      continue;
    }
    var httpPosition = nodes[i].data.indexOf("http");
    if(httpPosition == -1) {
      continue;
    }

    var urlnode;
    if(httpPosition > 0) {
      urlnode = nodes[i].splitText(httpPosition); // Split leading text
    } else {
      urlnode = nodes[i];
    }
    var stop = urlnode.data.match(/$|\s/)[0]; // Find end of URL
    if("" !== stop) { // If empty string, we found $ end of string
      var nextnode = urlnode.splitText(urlnode.data.indexOf(stop)); // Split trailing text
      if("" !== nextnode.data && nextnode.data.indexOf("http") != -1) {// The trailing text might contain another URL
        nodes.push(nextnode);
      }
    }

    // Check whether the URL is a OCH. If so, create an <a> element
    var url = urlnode.data;
    var m = matchHoster(url);
    if(url && url && m !== false) {
      // Create <a> element
      var a = document.createElement("a");
      a.href = url;
      a.appendChild(urlnode.parentNode.replaceChild(a, urlnode));

      var li = $J(a);
      links.push( {
        'hoster' : m,
        'url' : url,
        'element' : li
      });
      alllinks.push(url);
    }

  }

  // Find actual <a> links
  let al = document.getElementsByTagName('a');
  for(var i = 0; i < al.length; i++) {
    if(al[i].dataset && al[i].dataset.linkValidatedAs) {
      continue; // Link was already checked
    }
    var url = al[i].href;
    var mH = matchHoster(url);
    if(mH !== false) {

      let li = $J(al[i]);
      links.push( {
        'hoster' : mH,
        'url' : url,
        'element' : li
      });
      alllinks.push(url);
    }
  }

  // Attach mouseover/out events to all the links
  for(var i = 0; i < links.length; i++) {
    var a = links[i].element;
    var hoster = links[i].hoster;

    if("attached" in links[i] || a.data('hoster')) // Already attached
      continue;

    if(OCH[hoster].multi.length == 0) // Not supported by nopremium.pl according to hardcoded rules
      continue;

    var notsupported = true;
    for(var debrid in multi) {
      if(multi[debrid].isOnline(hoster)) {
        notsupported = false;
        break;
      }
    }

    if(notsupported) {
      continue; // Not supported by nopremium.pl according to status
    }

    links[i].attached = true;

    //if(links[i].data('hosterAvailable')) {
    //  links[i].attr("style","background:"+config.colorHosterAvailableBG+"; color:"+config.colorHosterAvailableFG+";");
    //} else {
    //  links[i].attr("style","background:"+config.colorHosterUnavailableBG+"; color:"+config.colorHosterUnavailableFG+";");
    //}
    a.attr("style","background:"+config.colorHosterAvailableBG+"; color:"+config.colorHosterAvailableFG+";");

    a.data('hoster',hoster);

    a.data('mouseOverAvailable',true);
    a.data('mouseOverTimeout',false);
    a.on({
      'mouseover': function() {
        var link = $J(this);

        if(!link.data('mouseOverAvailable'))
          return;
        link.data('mouseOverTimeout',setTimeout(function(){
          if(!link.data('mouseOverAvailable'))
            return;
          link.data('mouseOverAvailable',false)
          showMenu(link);
        }, config.mouseOverDelay));
      },
      'mouseout' : function(){
        var link = $J(this);

        if(link.data('mouseOverTimeout') !== false) {
          clearTimeout(link.data('mouseOverTimeout'));
          link.data('mouseOverTimeout',false);
        }
      }
    });

  }



  return links.length;
}

// Get OCH list
const OCH = getOCH();


// Init hosters
for(let key in multi) {
  await multi[key].init();
}

// This is the start of everything
var numberFoundLinks = 0;
window.setTimeout(function() { numberFoundLinks = attachEvents(); }, 0);
window.setTimeout(function() { if(numberFoundLinks == 0) numberFoundLinks = attachEvents(); }, 1500); // Let's try again.


// Update hoster status
for(let key in multi) {
  if(multi[key].updateStatusURLpattern.test(document.location.href)) {
    multi[key].updateStatus();
    break;
  }
}

// Create iframes to update hoster status:
let now = new Date();
for(let key in multi) {

  if((now - multi[key].lastUpdate) > (7*24*60*60*1000) ) {
    if(document.getElementById('multiochhelper')) {
      // Button is visible on this page
      window.setTimeout(function() {
        window.postMessage({ "iAm": "Unrestrict.li", "type": "requesthosterstatus"}, '*');
      }, 1000)
    } else if (chrome) {
      // Chrome: we can use iframe to load Multi-OCH_Helper script in the frame
      let $iframe = $J("<iframe>").appendTo(document.body);
      $iframe.bind("load",function() {
        let frame = this;
        window.setTimeout(function() { $J(frame).remove(); }, 4000);

        if($iframe[0].contentWindow) {
          $iframe[0].contentWindow.postMessage({ "iAm": "Unrestrict.li", "type": "requesthosterstatus"}, '*');
        }

      });
      $iframe.attr("src", syncHostersUrl);
    } else {
      // Firefox: we need to open a new tab to communicate with the Multi-OCH_Helper script
      if (document.location.href.startsWith(syncHostersHost)) {
        window.setTimeout(function() {
          window.postMessage({ "iAm": "Unrestrict.li", "type": "requesthosterstatus"}, '*');
        }, 1000)
      } else {
        const w = window.open(syncHostersUrl)
        window.setTimeout(function() {
          if(w) {
            w.postMessage({ "iAm": "Unrestrict.li", "type": "requesthosterstatus"}, '*');
          }
          window.setTimeout(function() {
            if(w) w.close()
          }, 3000)
        }, 1000)
      }
    }
    break
  }
}

// Handle messages from the button script
window.addEventListener("message", async function(e){
  if(typeof e.data != "object" || ! ("iAm" in e.data) || e.data.iAm != "Unrestrict.li") {
    return;
  }

  switch(e.data.type) {
    case "alert":
      // Alert on page, not in frame
      alert(e.data.str);
      break;

    case "findLinks":
      // Research links
      window.setTimeout(function() { numberFoundLinks = attachEvents(); }, 0);
      break;

    case "hosterstatus": {
      // Update hoster status, this script has no API access on premiumize, so it cannot update the hosters itself
      const data = JSON.parse(e.data.str)
      const result = {}
      for(let key in multi) {
        if(data && key in data) {
          await GM.setValue(key+"_status",JSON.stringify(data[key]));
          result[key] = Object.keys(data[key]).length
          multi[key].status = data[key]
        }
        await GM.setValue(key+"_status_time",""+(new Date()));
      }
      console.log(s_myname+": Received hoster status from "+s_topname + ": "+JSON.stringify(result))
      break
    }
  }

}, true);




})();


