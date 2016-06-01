// ==UserScript==
// @name        Multi-OCH Helper Highlight links
// @namespace   cuzi
// @oujs:author cuzi
// @description nopremium.pl and premiumize.me. Highlight one-click-hoster links and include Multi-OCH Helper button
// @homepageURL https://openuserjs.org/scripts/cuzi/Multi-OCH_Helper_Highlight_links
// @icon        https://greasyfork.org/system/screenshots/screenshots/000/003/478/original/icon_ampel.png
// @include     *
// @exclude     *.yahoo.*
// @exclude     *.google.*
// @exclude     *.youtube.*
// @exclude     *.bing.com*
// @exclude     *duckduckgo.com*
// @exclude     *bandcamp.com*
// @version     8.9
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js
// @require     https://openuserjs.org/src/libs/cuzi/OCH_List.js
// ==/UserScript==
"use strict";


const s_myname = "Multi-OCH Helper Highlight links";
const MAXTEXTNODES = 10000;

var $J = $.noConflict(true);

var config = {
  mouseOverDelay : 700,
  frameWidth : "170px",
  frameHeight : "190px",
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
// These hosters will only work, if "extensions.greasemonkey.dataIsGreaseable" in about:config is set to "true"
var noframeHosters = [
  'filecloud',
  'firedrive',
  'mega',
  'rapidgator'
];



var multi = {
  'nopremium.pl' : new (function() {
    var self = this;
    this.key = 'nopremium.pl';
    this.name = 'NoPremium.pl';
    this.homepage =  'https://www.nopremium.pl/';
    this.status = JSON.parse(GM_getValue(this.key+"_status","{}"));
    var mapHosterName = function(name) {return name.replace("-","")};

    this.updateStatusURL = 'https://www.nopremium.pl/';
    this.updateStatusURLpattern =/https?:\/\/www\.nopremium\.pl.*/;
    this.lastUpdate = new Date(GM_getValue(this.key+"_status_time",0));
    this.updateStatus = function() { // Update list of online hosters
      if(document.location.href.match(this.updateStatusURL)) {
        // Read and save current status of all hosters
        this.status = {};
        $J("#servers a[title]").each(function() {
          var name = mapHosterName(this.title);
          self.status[name] = true; 
        });
        GM_setValue(this.key+"_status",JSON.stringify(this.status));
        GM_setValue(this.key+"_status_time",""+(new Date()));
        console.log("Hoster status updated!");
      } else {
        alert(s_myname+"\n\nError: wrong update URL");
      }
    };
    this.isOnline = function(hostername) {
      return hostername in this.status && this.status[hostername]; 
    };
  })()
};

// GM values
var hosters_time = new Date(""+GM_getValue("hosters_time","Thu Jan 01 1970 01:00:00 GMT+0100"));
var hosters_status = JSON.parse(GM_getValue("hosters_status","{}"));


function matchHoster(str) {
  // Return name of first hoster that matches, otherwise return false
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

  if(noframeHosters.indexOf(jlink.data('hoster')) != -1) {
    link = 'https://cvzi.github.io/Userscripts/index.html?link='+encodeURIComponent(link);
  }


  // Create iframe
  var frame = $J("<iframe></iframe>");
  frame.attr("src",frameSrc(link));
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
    var jthis = $J(this);

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
  var links = [];
    
    
  // Normalize hoster object: Replace single patterns with arrays [RegExp]
  if(firstAttach) {
    for(var name in OCH) {
      if(!Array.isArray(OCH[name].pattern)) {
        OCH[name].pattern = [ OCH[name].pattern ];
      }
    }
    firstAttach = false;
  }
    
  // Find all text nodes that contain "http://"
  var nodes = [];
  var walk = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{ acceptNode: function(node) {
    if(node.parentNode.href || node.parentNode.parentNode.href || node.parentNode.parentNode.parentNode.href)
      return NodeFilter.FILTER_REJECT;
    if(node.parentNode.tagName == "TEXTAREA" || node.parentNode.parentNode.tagName == "TEXTAREA")
      return NodeFilter.FILTER_REJECT;
    if(node.data.match(/(\s|^)https?:\/\/\w+/))
      return NodeFilter.FILTER_ACCEPT; 
  } },false);
  var node = walk.nextNode();
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
  var al = document.getElementsByTagName('a');
  for(var i = 0; i < al.length; i++) {
    if(al[i].dataset && al[i].dataset.linkValidatedAs) {
      continue; // Link was already checked
    }
    var url = al[i].href;
    var mH = matchHoster(url);
    if(mH !== false) {
      
      var li = $J(al[i]);
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
      console.log(s_myname+": No support for "+hoster);
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




// This is the start of everything
if(attachEvents() == 0) {
  setTimeout(attachEvents,1000); // Let's try again. Some "dynamic" pages are not dynamic but dead slow
}
// Update hoster status
for(var key in multi) {
  if(multi[key].updateStatusURLpattern.test(document.location.href)) { 
    multi[key].updateStatus();
    break;
  }
}
// Create iframes to update hoster status:
var now = new Date();
for(var key in multi) {
  if((now - multi[key].lastUpdate) > (7*24*60*60*1000) ) {
    var $iframe = $J("<iframe>").appendTo(document.body);
    $iframe.bind("load",function() {
      var frame = this;
      window.setTimeout(function() { $J(frame).remove(); },3000);
    });
    $iframe.attr("src",multi[key].updateStatusURL);
  }
}

