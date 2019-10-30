// ==UserScript==
// @name        Multi-OCH Helper
// @namespace   cuzi
// @license     MIT
// @description nopremium.pl and premiumize.me. Inserts a direct download link on several one-click-hosters and some container/folder providers.
// @homepageURL https://openuserjs.org/scripts/cuzi/Multi-OCH_Helper
// @updateURL   https://openuserjs.org/meta/cuzi/Multi-OCH_Helper.meta.js
// @icon        https://greasyfork.org/system/screenshots/screenshots/000/003/479/original/icon.png
// @version     16.0

// @include     /^https:\/\/cvzi\.github\.io\/Userscripts\/index\.html\?link=.+/

// @include     /^https:\/\/www\.nopremium\.pl\/files.*$/
// @include     /^https:\/\/www\.premiumize\.me\/hosters\/?$/
// @include     /^https:\/\/www\.premiumize\.me\/downloader.*$/

// @include     http://download.serienjunkies.org/*
// @include     /^https?:\/\/(www\.)?filecrypt.cc\/Container\/\w+\.html.*$/
// @include     http*filecrypt.cc/helper.html*
// @include     /^http:\/\/www\.firedrive\.com\/share\/(\w|-)+$/
// @include     http://linkcrypt.ws/dir/*
// @include     http://linksave.in/*
// @include     /^http:\/\/ncrypt\.in\/folder\-\w+$/
// @include     http*://*uploaded.net/folder/*
// @include     http*://*uploaded.net/f/*
// @include     http*://rapidgator.net/folder/*
// @include     http://www.relink.us/view.php?id=*
// @include     https://safelinking.net/p/*
// @include     http://linkshield.org/p/*
// @include     http://share-links.biz/*
// @include     http*://relink.to/view.php?id=*
// @include     http://extreme-protect.net/*

// @include     /^http:\/\/180upload\.com\/\w+$/
// @include     /^https?:\/\/(www\.)?1fichier\.com\/\?.+$/
// @include     /^https?:\/\/\w+\.1fichier\.com\/?.*$/
// @include     /^http:\/\/www\.(2|4)shared\.com\/[a-z]+\/\w+\/?(.+\.html)?$/
// @include     /^https?:\/\/(www\.)?alfafile\.net\/file\/.+$/
// @include     /^https?:\/\/(www\.)?bayfiles\.(net|com)\/file\/\w+\/.+$/
// @include     /^http:\/\/billionuploads\.com\/\w+$/
// @include     /^http:\/\/bitshare\.com\/files\/\w+\/.+\.html$/
// @include     /^https?:\/\/(www\.)?catshare\.net\/.+$/
// @include     /^https?:\/\/(www\.)?clicknupload\.(link|info|org)\/\w+\/?.*$/
// @include     /^https?:\/\/www\.cwtv\.com\/cw-video\/.+$/
// @include     /^http:\/\/www\.datafile\.com\/d\/\w+.*$/
// @include     /^https?:\/\/www\.dailymotion\.com\/video\/\w+.*$/
// @include     /^https?:\/\/(www\.)?devilshare\.net\/view\/\w+\/?.*$/
// @include     http://filecloud.io/download.html
// @include     /^http:\/\/filecloud\.io\/\w+(\/.*)?$/
// @include     /^https?:\/\/(www\.)?filefactory\.com\/file\/.+$/
// @include     /^http:\/\/(www\.)?filefactory\.com\/stream\/.+$/
// @include     /^https?:\/\/www.filemonkey.in\/file\/.+$/
// @include     /^https?:\/\/fileom\.com\/\w+.*$/
// @include     /^https?\:\/\/(www\.)?fileparadox\.(in|com)\/\w+.*$/
// @include     /^http:\/\/www\.firedrive\.com\/file\/\w+$/
// @include     /^http:\/\/freakshare\.com\/files\/\w+\/.+\.html$/
// @include     /^http:\/\/dl\.free\.fr\/\w+$/
// @include     /^https?:\/\/(www\.)?gboxes\.com\/.+$/
// @include     /^https?\:\/\/(www\.)?hitfile\.net\/\w+.*$/
// @include     /^http:\/\/hugefiles\.net\/\w+\/?.*$/
// @include     /^https?:\/\/katfile\.com\/\w+\/?.*$/
// @include     /^https?:\/\/www\.kingfiles\.net\/\w+.*$/
// @include     /^https?:\/\/(\w+\.)?letitbit\.net\/download\/(\w|\.)+\/.*$/
// @include     /^https?:\/\/lunaticfiles\.com\/\w+\/?.*$/
// @include     /^https?:\/\/www\.mediafire\.com\/?\?.+$/
// @include     /^https?:\/\/www\.mediafire\.com\/download\/.+$/
// @include     /^https?:\/\/mega\.co\.nz\/\#\!\w+!*(\w|-)*$/
// @include     /^https?:\/\/mega\.nz\/\#\!\w+!*(\w|-)*$/
// @include     /^https?:\/\/netload.in\/\w+\/(\w|-|\.)+$/
// @include     /^https?:\/\/netload.in\/(\w|-|\.)+\.htm$/
// @include     /^https?:\/\/www\.oboom\.com\/\w+.*$/
// @include     /^https?:\/\/openload\.co\/f\/.+$/
// @include     /^https?:\/\/rapidgator\.net\/file\/.+$/
// @include     /^http:\/\/rg\.to\/file\/\w+\/.+\.html$/
// @include     /^https?:\/\/(\w+\.)?rapidu\.net\/\w+.*$/
// @include     /^http:\/\/www\.share-online\.biz\/dl\/\w+$/
// @include     /^https?\:\/\/(www\.)?rockfile\.eu\/\w+.*$/
// @include     /^http:\/\/www\.sockshare\.com\/file\/\w+$/
// @include     /^https?:\/\/soundcloud.com\/(\w|-)+\/(\w|-)+$/
// @include     /^https?:\/\/(www\.)?storbit\.net\/file\/.+$/
// @include     /^http:\/\/streamcloud\.eu\/\w+$/
// @include     /^https?:\/\/streamin\.to\/.+$/
// @include     /^https?:\/\/turbobit\.net\/\w+.*\.html.*$/
// @include     /^https?:\/\/(www\.)?tusfiles\.net\/\w+$/
// @include     /^http:\/\/(www\.)?uploadboy\.com\/\w+\.html$/
// @include     /^https?:\/\/uploaded\.(net|to)\/file\/.+$/
// @include     /^https?:\/\/uploadgig\.com\/file\/download\/\w+\/?.*$/
// @include     /^http:\/\/(www\.)?uploading\.site\/\w+.*$/
// @include     /^http:\/\/uploadrocket\.net\/\w+(\/|\w|-|\.)+(\.html)?$/
// @include     /^http:\/\/ul\.to\/.+$/
// @include     /^http:\/\/uppit\.com\/\w+(\/.*)?$/
// @include     /^http:\/\/uptobox.com\/\w+$/
// @include     /^https?:\/\/vidto\.me\/\w+\.?\w*$/
// @include     /^https?:\/\/vimeo\.com\/(.+\/)?\d+\/?$/
// @include     /^http:\/\/\w+.vip-file\.com\/downloadlib\/.*$/
// @include     /^https?:\/\/www\.youtube\.com\/watch(\?v=|\/).+$/
// @include     /^http:\/\/xerver\.co\/\w+.*$/
// @include     /^http:\/\/www\d*\.zippyshare\.com\/v\/\w+\/file\.html$/

// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require     https://greasyfork.org/scripts/13883-aes-js/code/aesjs.js
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @grant       GM_registerMenuCommand
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM.xmlHttpRequest
// @grant       GM.openInTab
// @grant       GM.setClipboard
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.listValues

// ==/UserScript==
(async function() {
"use strict";

// And to keep for myself whatever I may find? - Certainly. For yourself, and any friends you want to share with you.

// This program inserts a download link on One-Click-Hosters and a few folder services.
// If you click on the button, the current website address (or the links on the relink website) will be sent to nopremium.pl and you'll receive a nopremium.pl download link.
//
// Standard actions for the button are
// * left mouse click:                      copy the link to the clipboard
// * middle/wheel click:                    start download of the link
// * right mouse click:                     open the nopremium.pl website and insert the link in the text box
// * hovering the mouse over the button:    open a menu with all the above option
//

var s_myname = "Multi-OCH Helper";
var s_referer = "multiochhelper";
var h_myname = "Multi-OCH Helper Highlight links";

var chrome = ~navigator.userAgent.indexOf("Chrome")

var config = {
  position : [["bottom","top"],["left","right"]],
  position_desc : ['vertical','horizontal'],
  position_quest : 'Position of the Button. If you use "'+h_myname+'" this has to be set to bottom left',
  leftClick : ["clipboard","download","showLinks","openWebsite","menu","sendToJD","none"],
  leftClick_desc : ["Copy link to clipboard","Direct download","Show links like on website","Open the multihoster website","Show the extended menu","Send links to JDownloader","Do nothing"],
  leftClick_quest : "Action on left mouse click on button",
  middleClick : ["download","clipboard","showLinks","openWebsite","menu","sendToJD","none"],
  middleClick_desc : ["Direct download","Copy link to clipboard","Show links like on website","Open the multihoster website","Show the extended menu","Send links to JDownloader","Do nothing"],
  middleClick_quest : "Action on middle mouse/wheel click on button",
  rightClick : ["openWebsite","clipboard","showLinks","download","menu","sendToJD","none"],
  rightClick_desc : ["Show links like on website","Copy link to clipboard","Direct download","Open the multihoster website","Show the extended menu","Send links to JDownloader","Do nothing"],
  rightClick_quest : "Action on right mouse click on button",
  mouseOver : ["menu","clipboard","download","showLinks","openWebsite","sendToJD","none"],
  mouseOver_desc : ["Show the extended menu","Copy link to clipboard","Direct download","Show links like on website","Open the multihoster website","Send links to JDownloader","Do nothing"],
  mouseOver_quest : "Action on mouse hover over button",
  mouseOverDelay : 'int',
  mouseOverDelay_range : [0,700,3000],
  mouseOverDelay_quest : "Mouse hover time before action is executed.",
  mouseOverDelay_suffix : "milliseconds",
  newTab : 'bool',
  newTab_desc : ["Open in a new tab","Open in the same window"],
  newTab_quest : "Should websites be opened in a new tab?",
  updateHosterStatusInterval : 'int',
  updateHosterStatusInterval_range : [1,168,9999],
  updateHosterStatusInterval_quest : "How often should the status of the hosters be updated?",
  updateHosterStatusInterval_prefix : "Every",
  updateHosterStatusInterval_suffix : "hours",
  jDownloaderSupport : 'bool',
  jDownloaderSupport_desc : ["Show JDownloader button if JDownloader is runnning","Never show JDownloader button"],
  jDownloaderSupport_quest : ["Show a JDownloader button in the menu?"],

};
var settings = {};
// Load settings
var savedsettings = JSON.parse(await GM.getValue("settings","{}")); // e.g. {  position : [0,1], newTab : 1  }
for(var key in config) {
  if(key in savedsettings) { // Saved
    if(config[key] == 'int') { // Int
      settings[key] = parseInt(savedsettings[key],10);
    } else if(config[key] == 'string') { // String
      settings[key] = savedsettings[key].toString()
    } else if(config[key] == 'bool') { // Bool
      settings[key] = (savedsettings[key]=="true"||savedsettings[key]===true);
    } else if(Array.isArray(savedsettings[key])) { // Nested array
      settings[key] = [];
      for(var i = 0; i < savedsettings[key].length; i++) {
        settings[key].push(savedsettings[key][i]);
      }
    } else { // Array
      settings[key] = savedsettings[key];
    }
  } else { // Default
    if(config[key] == 'int') { // Int
      settings[key] = config[key+"_range"][1];
    } else if(config[key] == 'string') { // String
      settings[key] = '' // String defaults to empty string
    } else if(config[key] == 'bool') { // Bool
      settings[key] = true;
    } else if(Array.isArray(config[key][0])) { // Nested array defaults to first value for each array
      settings[key] = [];
      for(var i = 0; i < config[key].length; i++) {
        settings[key].push(config[key][i][0]);
      }
    } else {
      settings[key] = config[key][0]; // Array defaults to first value
    }
  }
}

var JDOWNLOADER = "http://127.0.0.1:9666/";
var SHAREBIZ_CNL2_URL = "http://share-links.biz/get/cnl2/";
var SHAREBIZ_RSDF_URL = "http://share-links.biz/get/rsdf/";
var SHAREBIZ_DLC_URL = "http://share-links.biz/get/dlc/";
var DCRYPTIT_UPLOAD_URL = "http://dcrypt.it/decrypt/upload";
var DCRYPTIT_CONTAINERLINK_URL = "http://dcrypt.it/decrypt/container";
var POSATIV_URL = "http://posativ.org/decrypt/rsdf";
var RELINKUS_GETFILE = "http://www.relink.us/frame.php?";
var SPINNERCSS =   "/* http://www.designcouch.com/home/why/2013/05/23/dead-simple-pure-css-loading-spinner/*/\
  .ochspinner {\
    height:16px;\
    width:16px;\
    margin:0px auto;\
    position:relative;\
    animation: rotation .6s infinite linear;\
    border-left:6px solid rgba(0,174,239,.15);\
    border-right:6px solid rgba(0,174,239,.15);\
    border-bottom:6px solid rgba(0,174,239,.15);\
    border-top:6px solid rgba(0,174,239,.8);\
    border-radius:100%;\
  }\
  @keyframes rotation {\
    from {transform: rotate(0deg)}\
    to {transform: rotate(359deg)}\
  }\
";
var LOADINGBARBG = "background: #b4e391;\
background: linear-gradient(to bottom,  #b4e391 0%,#61c419 50%,#b4e391 100%);"



var show_oneclick_button = false;
var show_oneclick_link = "";
var show_oneclick_FromHighlighScript_allLinks = document.location.host == "cvzi.github.io";
var show_oneclick_FromHighlighScript_allLinks_loc = false;
var show_oneclick_FromHighlighScript_allLinks_links = "";
var show_oneclick_FromHighlighScript_selectedLinks = false;
var show_oneclick_FromHighlighScript_selectedLinks_loc = false;
var show_oneclick_FromHighlighScript_selectedLinks_links = "";

var links_beforeSelection = false;


var multi = {
  'premiumize.me' : new (function() {
    var self = this;
    this.config = {
      'apikey' : 'string',
      'apikey_quest' : 'Enter your premiumize.me API key',
      'apikey_prefix' :  'API key: ',
      'apikey_suffix' :  ' find it under <a target="_blank" href="https://www.premiumize.me/account">https://www.premiumize.me/account</a>'
    };
    this.key = 'premiumize.me';
    this.name = 'premiumize';
    this.homepage =  'https://www.premiumize.me/';
    this.updateStatusURL = 'https://www.premiumize.me/hosters';
    this.updateStatusURLpattern = /https:\/\/www\.premiumize\.me\/hosters\/?/;
    this.updateDownloadProgressInterval = 5000;
    this.updateDownloadProgressInterfaceInterval = 500;

    this.status = {};
    this.init = async function() {
      self.status = JSON.parse(await GM.getValue(self.key+"_status","{}"));
      self.lastUpdate = new Date(await GM.getValue(self.key+"_status_time",0));
    };

    this.settings = {};
    this.loadSettings = async function(silent) {
      // Load settings, use first value as default
      var savedsettings = JSON.parse(await GM.getValue(self.key+"_settings","{}"));

      for(var key in self.config) {
         if(key.endsWith("desc") || key.endsWith("range") || key.endsWith("quest") || key.endsWith("prefix") || key.endsWith("suffix")) {
           continue;
         }
        if(key in savedsettings) { // Saved
          if(self.config[key] == 'int') { // Int
            self.settings[key] = parseInt(savedsettings[key],10);
          } else if(self.config[key] == 'string') { // String
            self.settings[key] = savedsettings[key].toString();
          } else if(config[key] == 'bool') { // Bool
            self.settings[key] = savedsettings[key]=="true"||savedsettings[key]===true;
          } else if(Array.isArray(savedsettings[key])) { // Nested array
            self.settings[key] = [];
            for(var i = 0; i < savedsettings[key].length; i++) {
              self.settings[key].push(savedsettings[key][i]);
            }
          } else { // Array
            self.settings[key] = savedsettings[key];
          }
        } else { // Default
          if(self.config[key] == 'int') { // Int
            self.settings[key] = self.config[key+"_range"][1];
          } else if(self.config[key] == 'string') { // String
            self.settings[key] = ''; // String defaults to empty string
          } else if(config[key] == 'bool') { // Bool
            self.settings[key] = true;
          } else if(Array.isArray(self.config[key][0])) { // Nested array defaults to first value for each array
            self.settings[key] = [];
            for(var i = 0; i < self.config[key].length; i++) {
              self.settings[key].push(self.config[key][i][0]);
            }
          } else {
            self.settings[key] = self.config[key][0]; // Array defaults to first value
          }
        }
      }

      if(!self.settings.apikey && !silent) {
        // Try to get the apikey from the website
        GM.xmlHttpRequest({
          method: "GET",
          url: self.homepage+"account",
          onerror: function(response) {
            console.log('premiumize.me API Key could not be loaded')
            setStatus('You have not set you premiumize.me Api key ')
          },
          onload: function(response) {
            let s = ''
            try {
              s = response.responseText.split('class="apipass"')[1].split('</')[0].split('>')[1]
            } catch(e) {
            }
            if (s) {
              self.settings.apikey = s
              GM.setValue(self.key+"_settings", JSON.stringify(self.settings));
              console.log('premiumize.me API Key was loaded from account and saved!')
            } else {
              setStatus('You need to set you premiumize.me Api key')
            }
          }
        });
      }
    };

    this.updateStatus = async function() { // Update list of online hosters
      if(document.location.href.match(self.updateStatusURL)) {
        // Read and save current status of all hosters
        self.status = {};

        $(".table.table-condensed tr>td:first-child").each(function() {
          var text = $(this).text();
          if(text.match(/^\s*[0-9a-z-]+\.\w{0,3}\s*$/)) {
            var name = text.match(/^\s*([0-9a-z-]+)\.\w{0,3}\s*$/)[1];
            self.status[name] = true;
          }
        });
        await GM.setValue(self.key+"_status",JSON.stringify(self.status));
        await GM.setValue(self.key+"_status_time",""+(new Date()));
        console.log(s_myname+": "+self.name+": Hosters updated");
      } else {
        alert(s_myname+"\n\nError: wrong update URL");
      }
    };
    this.isOnline = function(hostername) {
      return hostername in self.status && self.status[hostername];
    };

    this.getOpenWebsiteURL = function(urls) {
      // Return a link to the premiumize.me website that will insert the links
      var url = this.homepage+"downloader?link:"+encodeURIComponent(urls.join("\n"));
      return url;
    };

    this.checkLink = function(url,cb) { // check whether the link is supported and online
      var host = url.match(/https?:\/\/(.+?)\//)[1];
      var hoster = host.split(".");
      hoster.pop();
      hoster = hoster.pop().replace("-","");
      cb(this.isOnline(hoster));
    };

    this.getResults = function(urls,cb) {
      // cb($node,linkNumber) -- $node contains the result, linkNumber is the number of links that should be online i.e. number of hashes
      alert("This function does not work for "+this.name);
    };



    this._notLoggedIn = false;

    this.getLinks = async function(urls,cb) {
      await showConfirm("fairPointsWarning","You will be charged premiumize fair points for generating "+(urls.length>1?("<b>"+urls.length+"</b> files"):("<b>one</b> file"))+"!<br><br>Generate links?",function() { self._getLinks(urls, cb); },function() { setStatus("Operation canceled!",0); cb([],-1); },self);
    };

    this._getLinks = function(urls,cb) {

      var N = urls.length;
      var downloadLinks = [];
      var errors = [];
      for(var i = 0; i < urls.length; i++) {
        this._addSingleTransfer(urls[i], function(downloadlink, originallink, message) {
          if(downloadlink) {
            downloadLinks.push(downloadlink);
          } else {
            errors.push([originallink, message]);
          }
        });
      }

      var checkprogress = function() {
        if(self._notLoggedIn) {

          // Stop checking and open premiumize homepage
          setStatus(self.name+" error: Not logged in!",0);
          GM.openInTab(self.homepage);
          cb([], -1);
          return;
        }

        if(N == errors.length) { // All errors
          cb(false, -1);
          if (errors.length == 1 && errors[0][1]) {
            setStatus(errors[0][1], 0);
          } else {
            alert("Errors occured\n"+errors.length+" links failed:\n\n"+errors.join("\n"));
          }
        } else if(N == downloadLinks.length+errors.length) { // All finished
          cb(downloadLinks);
          if(errors.length > 0) { // Errors occured
            alert("Errors occured\n"+errors.length+" links failed:\n\n"+errors.join("\n"));
          }
        } else { // not finished yet
          window.setTimeout(checkprogress, self.updateDownloadProgressInterfaceInterval);
        }
      };
      window.setTimeout(checkprogress, self.updateDownloadProgressInterfaceInterval * Math.max(5, N));
    };


    this._addSingleTransfer = function(url, cb) {
      GM.xmlHttpRequest({
        method: "POST",
        url: self.homepage+"api/transfer/create",
        data: "apikey="+encodeURIComponent(self.settings.apikey)+"&src="+encodeURIComponent(url),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache"
        },
        onerror: function(response) {
          console.log("GM.xmlHttpRequest error: "+self.homepage+"api/transfer/create");
          console.log(response);
          cb(false, url, 'GM.xmlHttpRequest error: api/transfer/create');
        },
        onload: function(response) {
          console.log(response.responseText)
          var result = JSON.parse(response.responseText);
          /* 
          {"status":"success","type":"savetocloud","id":"gfwRtdgd5fgdfgfhgfhf","name":"test.zip"}
          {"status":"error","error":"duplicate","id":"gfdgd5fgFddfgfhgfhf","message":"You already have this job added."}
          {"status":"error","message":"This link is not available on the file hoster website"}
          */
          if("id" in result && result.id) {
            window.setTimeout(function() {
              self._getFileFromTransfer(url, result.id, cb)
            }, 1000)
            if("message" in result) {
              addStatus(result["message"],-1);
            }
          } else {
            if("message" in result && !self._notLoggedIn) {
              addStatus(result["message"],-1);
              if(~result["message"].indexOf("log")) {
                self._notLoggedIn = true;
              }
            }
            cb(false, url, "message" in result?result["message"]:response.responseText);
          }
        }
      });

    };
    
    this._getFileFromTransfer = function(url, transferId, cb) {
      GM.xmlHttpRequest({
        method: "GET",
        url: self.homepage+"api/transfer/list?apikey=" + encodeURIComponent(self.settings.apikey),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache"
        },
        onerror: function(response) {
          console.log("GM.xmlHttpRequest error: "+self.homepage+"api/transfer/list");
          console.log(response);
          cb(false, url, "GM.xmlHttpRequest error: /api/transfer/list");
        },
        onload: function(response) {
          console.log(response.responseText)
          var result = JSON.parse(response.responseText);
          /* 
          {
            "status": "success",
            "transfers": [
              {
                "id": "xXFDSXXFDSGD",
                "name": "test.zip",
                "message": null,
                "status": "finished",
                "progress": 0,
                "folder_id": "gfjdfsuigjfdoikfsadf",
                "file_id": "trhgf982u30fjklfsdag"
              }
            ]
          }
          {
            "status": "success",
            "transfers": [
              {
                "id":"xXFDSXXFDSGD",
                "name":"test.zip",
                "message":"Initializing Download...",
                "status":"running",
                "progress":0,
                "folder_id":"gfjdfsuigjfdoikfsadf",
                "file_id":null
              }
            ]
          }
          */
          if(result.status == "success" && "transfers" in result) {
            for(let i = 0; i < result.transfers.length; i++) {
              if (result.transfers[i].id == transferId) {

                if (result.transfers[i].file_id) {
                  // Finished
                  window.setTimeout(function() {
                    self._getSingleLink(url, result.transfers[i].file_id, cb)
                  }, result.transfers[i].status == "finished"?10:self.updateDownloadProgressInterval)
                } else {
                  // Downloading
                  if('message' in result.transfers[i] && result.transfers[i].message) {
                    setStatus(result.transfers[i].message,-1);
                  }
                  window.setTimeout(function() {
                    self._getFileFromTransfer(url, transferId, cb)
                  }, self.updateDownloadProgressInterval)
                }

                return
              }
            }
            
          }
          if('message' in result && result.message) {
            alert(s_myname+'\n\nCould not get /api/transfer/list\nError:\n'+result.message) 
          }
          cb(false, url, 'Could not find url in transfer list');
        }
      });

    };
    
    this._getSingleLink = function(url, fileId, cb) {
      GM.xmlHttpRequest({
        method: "POST",
        url: self.homepage+"api/item/details",
        data: "apikey="+encodeURIComponent(self.settings.apikey)+"&id="+encodeURIComponent(fileId),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache"
        },
        onerror: function(response) {
          console.log("GM.xmlHttpRequest error: "+self.homepage+"api/item/details");
          console.log(response);
          cb(false, url, "GM.xmlHttpRequest error: /api/item/details");
        },
        onload: function(response) {
          console.log(response.responseText)
          var result = JSON.parse(response.responseText);
          /* 
          {
            "id": "xxXxXxxxXxxx",
            "name": "test.zip",
            "size": 156,
            "created_at": 1572458477,
            "transcode_status": "not_applicable",
            "folder_id": "XxXXXxxxxxx",
            "ip": "1.1.1.1",
            "acodec": "",
            "vcodec": "",
            "mime_type": "application/zip",
            "opensubtitles_hash": "",
            "resx": "",
            "resy": "",
            "duration": "",
            "virus_scan": "ok",
            "type": "file",
            "link": "https://down.host.example.com/dl/abcdefg/test.zip",
            "stream_link": null
          }
          */
          if("link" in result && result.link) {
            cb(result.link, url);
          } else {
            window.setTimeout(function () {
              self._getSingleLink(url, fileId, cb)
            }, self.updateDownloadProgressInterval)
          }
        }
      });

    };
    
    


  })(),


  'nopremium.pl' : new (function() {
    var self = this;
    this.config = {
      'mode' : ['transfer','premium','none'],
      'mode_desc' : ['Transfer User (Pakiety Transferowe)','Premium User (Konta Premium)','No account'],
      'mode_quest' : 'What kind of account do you have at nopremium.pl',
      'downloadmode' : ['direct','server'],
      'downloadmode_desc' : ['Direct download (TRYB SZYBKIEGO POBIERANIA)','Downloading via NoPremium.pl server (TRYB POBIERANIA NA SERWERY)'],
      'downloadmode_quest' : ['Which download mode do you want to use?']
    };
    this.key = 'nopremium.pl';
    this.name = 'NoPremium.pl';
    this.homepage =  'https://www.nopremium.pl/';
    this.updateStatusURL = 'https://www.nopremium.pl/files';
    this.updateStatusURLpattern =/https?:\/\/www\.nopremium\.pl\/files\/?/;
    this.updateDownloadProgressInterval = 5000;
    var mapHosterName = function(name) {return name.replace("-","")};
    this.status = {};

    this.init = async function() {
      self.status = JSON.parse(await GM.getValue(self.key+"_status","{}"));

      self.lastUpdate = new Date(await GM.getValue(self.key+"_status_time",0));
    };

    this.settings = {};
    this.loadSettings = async function(silent) {

      // Load settings, use first value as default
      var savedsettings = JSON.parse(await GM.getValue(self.key+"_settings","{}"));

      for(var key in self.config) {
         if(key.endsWith("desc") || key.endsWith("range") || key.endsWith("quest") || key.endsWith("prefix") || key.endsWith("suffix")) {
           continue;
         }
        if(key in savedsettings) { // Saved
          if(self.config[key] == 'int') { // Int
            self.settings[key] = parseInt(savedsettings[key],10);
          } else if(self.config[key] == 'string') { // String
            self.settings[key] = savedsettings[key].toString();
          } else if(config[key] == 'bool') { // Bool
            self.settings[key] = savedsettings[key]=="true"||savedsettings[key]===true;
          } else if(Array.isArray(savedsettings[key])) { // Nested array
            self.settings[key] = [];
            for(var i = 0; i < savedsettings[key].length; i++) {
              self.settings[key].push(savedsettings[key][i]);
            }
          } else { // Array
            self.settings[key] = savedsettings[key];
          }
        } else { // Default
          if(self.config[key] == 'int') { // Int
            self.settings[key] = self.config[key+"_range"][1];
          } else if(self.config[key] == 'string') { // String
            self.settings[key] = ''; // String defaults to empty string
          } else if(config[key] == 'bool') { // Bool
            self.settings[key] = true;
          } else if(Array.isArray(self.config[key][0])) { // Nested array defaults to first value for each array
            self.settings[key] = [];
            for(var i = 0; i < self.config[key].length; i++) {
              self.settings[key].push(self.config[key][i][0]);
            }
          } else {
            self.settings[key] = self.config[key][0]; // Array defaults to first value
          }
        }
      }
    };

    this.updateStatus = async function() { // Update list of online hosters
      if(document.location.href.match(self.updateStatusURL)) {
        // Read and save current status of all hosters
        self.status = {};
        $("#servers a[title]").each(function() {
          var name = mapHosterName(this.title);
          self.status[name] = true;
        });
        await GM.setValue(self.key+"_status",JSON.stringify(self.status));
        await GM.setValue(self.key+"_status_time",""+(new Date()));
      } else {
        alert(s_myname+"\n\nError: wrong update URL");
      }
    };
    this.isOnline = function(hostername) {
      return hostername in self.status && self.status[hostername];
    };

    this.getOpenWebsiteURL = function(urls) {
      // Return a link to the nopremium.pl website that will insert the links
      var url = this.homepage+"files?link:"+encodeURIComponent(urls.join("\n"));
      return url;
    };

    var getHashs = function(urls,cb,silent) {
      // cb(hashes,sizestring)
      setStatus("Sending "+(urls.length===1?"one link":(urls.length+" links")),-1);
      GM.xmlHttpRequest({
        method: "POST",
        url: self.homepage+"files",
        data: "watchonline=&session="+(Math.round(Math.random()*1234567))+"&links="+encodeURIComponent(urls.join("\n")),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache",
          // "Referer" : "https://www.nopremium.pl/files" // FIREFOX57
        },
        onload: function(response) {
          if(response.responseText.indexOf('<input type="text" name="login" placeholder="Login"/>') != -1) {
            setStatus(self.name+" error: Not logged in!",0);
            GM.openInTab(self.homepage);
            return cb([],-1);
          }

          var hashes = [];
          // Find hashes
          var re = /name\=\"hash(\d+)\" value\=\"(\w+)\"/g; //<input type="checkbox" id="hash0" name="hash0" value="fab3c41988" onclick="UpdateCounter();" c
          var ma;
          while(ma = re.exec(response.responseText)) {
            hashes.push(ma[2]);
          }
          // Find errors
          if((ma = response.responseText.match(/Pliki nieprzetworzone \((\d+)\)/)) && !silent) {
            addStatus("Error: "+(parseInt(ma[1],10)===1?("One file is offline or unsupported"):(ma[1]+" files are offline or unsupported")),0);
          }


          // Find size
          var size = "0 Byte";
          if(response.responseText.indexOf('id="countSize"') !== -1) {
            ma = response.responseText.split('id="countSize"')[1].match(/value="(\d+.?\d*) (\w+)"/); // <input type="text" name="countSize" id="countSize" style="width:80px;" readonly="readonly" value="1.38 GB">
            size = ma[1]+" "+ma[2];
          }

          setStatus(self.name+" identified "+(hashes.length===1?"one online file":(hashes.length+" online files")),-1);

          cb(hashes,size);
        }
      });
    };


    this.checkLink = function(url,cb) { // check whether the link is supported and online
      // cb(boolresult)
      return getHashs([url],function(hashes,size) {
          cb(hashes.length === 1);
      },true);
    };

    this.getResults = function(urls,cb,hashes) {
      // cb($node,linkNumber) -- $node contains the result, linkNumber is the number of links that should be online i.e. number of hashes
      // Get download links from nopremium.pl and show the usual info about the file, that is normally shown on nopremium.pl

      if(typeof hashes == "undefined") {
        // 1. Get hashes and show transfer warning
        getHashs(urls,async function(hashes,size) {
          if(settings.mode == 'transfer') {
            await showConfirm("transferWarning","You will be charged <b>"+size+"</b> 'Transfer' for generating "+(hashes.length>1?("<b>"+hashes.length+"</b> files"):("<b>one</b> file"))+"!<br><br>Generate links?",function() { this.getResults(urls,cb,hashes); },null,self);
          } else if(hashes.length > 0) {
            self.getResults(urls,cb,hashes);
          } else if(size === -1) { // Error was already handled (probably not logged in)
            cb(false,0);
          } else { // No files found
            setStatus("No online/available files",0);
            cb(false,0);
          }
        });
        return;
      }

      // 2. Work with hashes
      var $resultContainer = $("<div></div>").attr('id','generated-links');
      var mode = self.settings.downloadmode == 'direct'?0:1; // 0 -> direct , 1  ->  via server
      GM.xmlHttpRequest({
        method: "POST",
        url: self.homepage+"files",
        data: "insert=1&mode="+mode+"&hh=0&hash[]="+hashes.join("&hash[]=")+"&",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache",
          // "Referer" : "https://www.nopremium.pl/files"  // FIREFOX57
        },
        onload: function(response) {
          GM.xmlHttpRequest({
            method: "POST",
            url: self.homepage+"files",
            data: "loadfiles=1",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Cache-Control" : "no-cache",
              // "Referer" : "https://www.nopremium.pl/files"  // FIREFOX57
            },
            onload: function(response) {
              if(mode === 0) {
                $resultContainer.append($("<div></div>").append(response.responseText).find("#fastFilesArea"));
              } else {
                $resultContainer.append($("<div></div>").append(response.responseText).find("#downloadFilesArea"));
              }
              $resultContainer.find("input[type=checkbox]").remove();
              cb($resultContainer,hashes.length);
            }
          });


        }
      });

    };
    this.getLinks = function(urls,cb) {
      // cb(downloadlinks)

      if(this.settings.downloadmode == "direct") {
        return this._getDirectLinks(urls,cb);
      } else {
        return this._getServerLinks(urls,cb);
      }

    };

    this._getDirectLinks = function(urls,cb) {
      // Get Direct download links

      this.getResults(urls,async function($node,N) {

        if(!$node || N < 1) {
          cb(false);
          return;
        }


        var text = $node.html();

        /*
        <td>16-08-2014 20:22</td>
        <td class="dlBox"><a href="http://direct.nopremium.pl/9091456/7895ca02bfcb2c2e43806f1079b7ff069129e/result.file"><img src="https://www.nopremium.pl/images/download_ico.png" alt="Sciagnij" title="Sciagnij"></a></td>
        */
        var files = [];
        var re = /\<td\>(\d+)\-(\d+)\-(\d+) (\d+)\:(\d+)\<\/td\>(\s|\n)+\<td class\=\"dlBox\"\>\<a href\=\"(.*?)\"/gm;
        var m; // wholeString, 16,08,2014,20,37,#newline#,http://direct.nopremium.pl/9091456/7895ca02bfcb2c2e43806f1079b7ff069129e/result.file
          while (m = re.exec(text)) {
            if(m[7].indexOf("//direct.nopremium.pl") === -1) {
              continue; // Skip files via server, only use direct download links
            }
            var d = new Date(m[3], m[2], m[1], m[4], m[5], 0, 0);
            files.push([d,m[7]]);
         }

        if(files.length === 0) {
          alert(s_myname+"\n\nAn error occured.\nCould not find download links in response.");
          cb(false);
          return;
        }
        // Find youngest files by comparing their ids
        var pattern = /\.pl\/(\d+)\//;
        files.sort(function(a, b) {
          var x = a[1].match(pattern)[1];
          var y = a[1].match(pattern)[1];
          return x>y ? -1 : x<y ? 1 : 0;
        });


        var result = [];
        for(var i = 0; i < N; i++) {
          result.push(files[i][1]);
          await cacheLink([urls[i]],files[i][0],[files[i][1]],self.key); // CACHE single URLs
        }

        await cacheLink(urls,new Date(),result,self.key); // CACHE all URLs

        cb(result);

      });



    };

    this._getServerLinks = function(urls,cb) {


      this.getResults(urls,function($node,N) {
        if(N == 0) {
          cb(false);
        } else {
          self._getProgress(cb,$node,N);
        }
      });

    };

    this._getProgress = function(cb,$node,N,ids) {
      GM.xmlHttpRequest({
        method: "POST",
        url: self.homepage+"files",
        data: "downloadprogress=1",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control" : "no-cache",
          // "Referer" : "https://www.nopremium.pl/files" // FIREFOX57
        },
        onerror: function() {
          self._getProgressBlocked = false;

          window.setTimeout(function() {
            self._getProgress(cb,$node,N,ids);
          },self.updateDownloadProgressInterval);

        },
        onload: function(response) {
          self._getProgressBlocked = false;

          var data;
          try {
            data = JSON.parse(response.responseText);
          } catch(e) {
            console.log(e);
            console.log(response.responseText);
            window.setTimeout(function() {
              self._getProgress(cb,$node,N,ids);
            },self.updateDownloadProgressInterval);
            return;
          }

           data.StandardFiles.sort(function(a, b) {
            var x = new Date(a.insert_date.split("-").join("/"));
            var y = new Date(b.insert_date.split("-").join("/"));
            return x>y ? -1 : x<y ? 1 : 0;
          });

          var result = [];
          var runnning = [];
          var percent = 0;
          var progess = [];

          if(!ids) {          // First run: Find the correct files: just use the first N files
            ids = [];
            for(var i = 0; i < data.StandardFiles.length &&  i < N; i++) {
              ids.push(data.StandardFiles[i].id)
              if(data.StandardFiles[i].status == "finish") {
                result.push(data.StandardFiles[i].download_url);
                progess.push(100);
                percent += 100;
              } else {
                runnning.push(data.StandardFiles[i]);
                if(parseInt(data.StandardFiles[i].status,10) > 0) {
                  progess.push(parseInt(data.StandardFiles[i].status,10));
                  percent += parseInt(data.StandardFiles[i].status,10);
                }
              }
            }
          } else {          // Consecutive runs: Use the ids from first run
            for(var i = 0; i < data.StandardFiles.length; i++) {
              if(ids.indexOf(data.StandardFiles[i].id) == -1) continue;
              if(data.StandardFiles[i].status == "finish") {
                result.push(data.StandardFiles[i].download_url);
                progess.push(100);
                percent += 100;
              } else {
                runnning.push(data.StandardFiles[i]);
                if(parseInt(data.StandardFiles[i].status,10) > 0) {
                  progess.push(parseInt(data.StandardFiles[i].status,10));
                  percent += parseInt(data.StandardFiles[i].status,10);
                }
              }
            }
          }


          /*
          Regarding caching in server mode:
            If you add a file, that is already on the server (or currently downloading), you will not be charged additional bandwith - therefore caching is not necessary at the moment.
          */

          if(result.length === N) {
            setStatus((result.length===1?"One file":(result.length+" files"))+" downloaded to server",1);
            cb(result);
          } else {
            // Waiting
            percent = percent/N;
            //setStatus('Download '+result.length+'/'+N+' ('+Math.floor(percent)+'%)\n<span title="'+round(percent,2)+'%" style="display:block; width:120px; height:18px; background:white; border:1px solid black; border-radius:5px;"><span style="display:block; border-radius:5px; height:18px; width:'+Math.ceil(percent*1.2)+'px; '+LOADINGBARBG+'"> </span></span>',-1);
            var dotheight = N > 2?2:4;
            var h = 'Download '+result.length+'/'+N+' ('+Math.floor(percent)+'%)\n<div style="display:block; width:130px; height:auto; background:white; border:1px solid black; border-radius:5px; padding:2px; ">';
            for(var i = 0;  i < N; i++) {
              if(progess[i]) {
                h += '<span style="display:block; width:'+Math.ceil(progess[i]*1.2)+'px; height:1px; background:white; border-top:'+dotheight+'px '+(progess[i]>99.9?'solid':'dotted')+' green; margin-bottom:1px;"></span>';
              } else {
                h += '<span style="display:block; width:0x; height:1px; background:white; border-top:'+dotheight+'px dotted silver; margin-bottom:1px;"></span>';
              }

            }
            h += '</div>';

            setStatus(h);
            showOnlyStatus();

            window.setTimeout(function() {
              self._getProgress(cb,$node,N,ids);
            },self.updateDownloadProgressInterval);
          }

        }
      });

    };



  })(),


};



var debridprovider = Object.keys(multi);
var currentdebrid = await GM.getValue("currentdebrid",debridprovider[0]);

for(var key in multi) {
  await multi[key].init();
  if(key == currentdebrid) {
      await multi[key].loadSettings();
      continue;
  }
  /*
  GM.registerMenuCommand(s_myname+" - Switch to "+multi[key].name, (function(key) { return async function() {
    if(!confirm(s_myname+"\n\nSet multi-download provider:\n"+multi[key].name)) return;

    await GM.setValue("currentdebrid",key);
    currentdebrid = key;
    document.location.reload();
  }})(key)
  );
  */
}
/*
GM.registerMenuCommand(s_myname+" - Delete cached links", async function() {
  if(!confirm(s_myname+"\n\nReally delete cached links?")) return;

  await GM.setValue("cachedDownloadLinks","{}")

  alert(s_myname+"\n\nCache is empty!");
});
GM.registerMenuCommand(s_myname+" - Restore dialogs and warnings", async function() {
  if(!confirm(s_myname+"\n\nReally restore all dialogs and warnings?")) return;

  await GM.setValue("dialogs","[]");

  alert(s_myname+"\n\nDialogs and warnings restored");
});
*/


function round(f,p) {
  // Round f to p places after the comma
  return parseFloat(parseFloat(f).toFixed(p));
}

function popUp(id,cb_close,thisArg,doNotCloseOnOutsideClick) {
  // Remove window scrolling
  $(document.body).css("overflow","hidden");
  var zi = getNextZIndex();
  var id = id?id:("popup"+(new Date).getTime());
  var $par = $('<div style="position:absolute; top:0px;"></div>').attr("id",id).appendTo(document.body);
  var $background = $('<div style="position:fixed; top:0px; left:0px; right:0px; bottom:0px; background:black; opacity:0.5; z-index:'+(zi++)+'"></div>').appendTo($par);
  var $div = $('<div style="position:fixed; top:50px; left:100px; overflow:auto; z-index:'+(zi++)+'; background:#E6E6E6; color:Black; border:#B555C5 2px solid;border-radius:5px; padding:10px; font-family: "Ubuntu",Arial,Sans-Serif"></div>').css('maxHeight',window.innerHeight-100).css('maxWidth',window.innerWidth-200).appendTo($par);

  var close = function() {
    $par.remove();
    if(cb_close) cb_close.call(thisArg);
    // Restore scrolling
    $(document.body).css("overflow","initial");

  };

  if(!doNotCloseOnOutsideClick) {
    $background.click(close);
  }


 return {"node": $div, "close": close};
}




function configForm($form,c,s,formid) {
  for(var key in c) {

    if(key.endsWith("desc") || key.endsWith("range") || key.endsWith("quest") || key.endsWith("prefix") || key.endsWith("suffix")) {
      continue;
    }

    var $p = $("<p>").appendTo($form);

    if(c[key+"_quest"]) {
      $p.append(c[key+"_quest"]);
    } else {
      $p.append(key);
    }

    $p.append("<br>");

    if(c[key+"_prefix"]) {
      $p.append(c[key+"_prefix"]+" ");
    }
    if(c[key] == 'int') { // Int
      var $input = $('<input type="number">').addClass("form_"+formid).data("key",key).data("parse","int").val(s[key]).appendTo($p);
      if(c[key+"_range"]) {
        $input.prop("min",c[key+"_range"][0]);
        $input.prop("max",c[key+"_range"][2]);
        $input.prop("title",c[key+"_range"][0]+" - "+c[key+"_range"][2]);
      }
    } else if(c[key] == 'string') { // String
      $('<input type="text">').addClass("form_"+formid).data("key",key).data("parse","string").val(s[key]).appendTo($p);
    } else if(c[key] == 'bool') { // Bool

      var $select = $('<select></select>').addClass("form_"+formid).data("key",key).data("parse","bool").appendTo($p);

      var $optionYes = $('<option></option>').val("true").appendTo($select);
      if(c[key+"_desc"]) {
        $optionYes.html(c[key+"_desc"][0]);
      } else {
        $optionYes.html("Yes");
      }
      if(s[key]) {
        $optionYes[0].selected = true;
      }

      var $optionNo = $('<option></option>').val("false").appendTo($select);
      if(c[key+"_desc"]) {
        $optionNo.html(c[key+"_desc"][1]);
      } else {
        $optionNo.html("No");
      }
      if(!s[key]) {
        $optionNo[0].selected = true;
      }
    } else if(Array.isArray(c[key][0])) { // Nested array
      for(var j = 0; j < c[key].length; j++) {
        if(c[key+"_desc"] && !Array.isArray(c[key+"_desc"][j])) {
          $p.append(c[key+"_desc"][j]+": ");
        }

        var $select = $('<select></select>').addClass("form_"+formid).data("key",key).data("index",j).appendTo($p);
        for(var i = 0; i < c[key][j].length; i++) {
          var $option = $('<option></option>').val(c[key][j][i]).appendTo($select);
          if(c[key+"_desc"] && Array.isArray(c[key+"_desc"][0])) {
            $option.html(c[key+"_desc"][j][i]);
          } else {
            $option.html(c[key][j][i]);
          }
          if(s[key][j] == c[key][j][i])
            $option[0].selected = true;

        }
        $p.append("<br>");
      }

    } else { // Array

      var $select = $('<select></select>').addClass("form_"+formid).data("key",key).appendTo($p);
      for(var i = 0; i < c[key].length; i++) {
        var $option = $('<option></option>').val(c[key][i]).appendTo($select);
        if(c[key+"_desc"]) {
          $option.html(c[key+"_desc"][i]);
        } else {
          $option.html(c[key][i]);
        }
        if(s[key] == c[key][i])
          $option[0].selected = true;
      }

    }

    if(c[key+"_suffix"]) {
      $p.append(" "+c[key+"_suffix"]);
    }

  }

}

async function saveSettings(ev) {
  var $body = ev.data;
  var $form = $body.find(".form");

  // Save preferred hoster:
  currentdebrid = $form.find('.debridhoster').val();

  // Save options:
  var newsettings = { 'general' : {} };
  for(var key in multi) {
    newsettings[key] = {};
  }

  $form.find('*[class^=form_]').each(function() {
    var $this = $(this);
    var namespace = $this.prop("class").split("_",2)[1];
    var key = $this.data("key");
    var index = $this.data("index");
    var value = $this.val();
    var parse = $this.data("parse");
    if(typeof index != 'undefined') { // Nested Array
      if(!Array.isArray(newsettings[namespace][key])) {
        newsettings[namespace][key] = [];
      }
      newsettings[namespace][key][index] = value;
    } else { // Normal

      if(parse == 'int') {
        value = parseInt(value,10);
      } else if(parse == 'bool') {
        value = (value == "true");
      }
      newsettings[namespace][key] = value;
    }
  });


  await GM.setValue("setup",true);
  await GM.setValue("currentdebrid",currentdebrid);
  await GM.setValue("settings",JSON.stringify(newsettings.general));
  for(var key in multi) {
    await GM.setValue(key+"_settings",JSON.stringify(newsettings[key]));
  }

  alert(s_myname+"\n\nSettings were successfully saved!");
  document.location.reload();
}


async function aboutMe() {
  var popup = popUp("multiochhelper_about",null,null,true);
  var $popup = popup.node;
  var $frame = $('<iframe width="'+(window.innerWidth-250)+'" height="'+(window.innerHeight-150)+'" style="border:0">').appendTo($popup);
  $frame.bind('load', async function(e) {
      // Load settings for all
      for(var key in multi) {
        await multi[key].loadSettings(true);
      }

      var $body = $($frame[0].contentDocument.getElementsByTagName('body')[0]);

      $body.css("fontFamily","Ubuntu,Arial,Sans-Serif");

      $('<div style="position:fixed; top:0px; right:5px; cursor:pointer; color:White; background:#b555c5; border: 1px solid White; border-radius:3px; padding:0px; font-weight:bold ; " title="Close menu">X</span>').click(function() { if(confirm("Settings will NOT be saved!")) popup.close(); }).appendTo($body);

      $body.append("<h2>"+s_myname+"</h2>");
      $("<a>").appendTo($body).attr('target','_blank').css("fontSize","small").html("https://openuserjs.org/scripts/cuzi/Multi-OCH_Helper").attr('href',"https://openuserjs.org/scripts/cuzi/Multi-OCH_Helper");

      var $form = $("<div class=\"form\">").appendTo($body);

      // General options
      $form.append("<h3>Settings</h3>");
      configForm($form,config,settings,"general");

      // Preferred multihoster
      var $p = $("<p>").appendTo($form);
      $p.append("Preferred multihoster:<br>");
      var $select = $('<select></select>').addClass("debridhoster").appendTo($p);
      for(var key in multi) {
        var $option = $('<option></option>').val(key).appendTo($select);
        $option.html(multi[key].name);
        $option[0].selected = key == currentdebrid;
      }

      // Options for multihosters
      for(var key in multi) {
        $("<h3>").appendTo($form).html(multi[key].name);
        $("<a>").appendTo($form).css("fontSize","small").attr('target','_blank').html(multi[key].homepage).attr('href',multi[key].homepage);
        if(multi[key].config) {
          configForm($form,multi[key].config,multi[key].settings,key);
        } else {
          $("<p>").appendTo($form).text("No settings available for this service.");
        }
      }

      $form.append("<br>");

      $('<input type="button">').val("Cancel").click(function() { if(confirm("Settings will NOT be saved!")) popup.close(); }).appendTo($form);
      $('<input type="button">').val("Save").click($body,saveSettings).appendTo($form);



      $form.append("<h3>Other options</h3>");

      $('<input type="button">').val("Clear cache ("+ humanBytes((await GM.getValue("cachedDownloadLinks","{}")).length-2)+")").appendTo($form).click(async function() {
        if(!confirm(s_myname+"\n\nReally delete cached links?")) return;

        await GM.setValue("cachedDownloadLinks","{}");

        this.value = "Clear cache ("+ humanBytes((await GM.getValue("cachedDownloadLinks","{}")).length-2)+")";
        alert(s_myname+"\n\nCache is empty!");
      });

      $form.append("<br>");
      $form.append("<br>");

      $('<input type="button">').val("Restore dialogs and warnings").appendTo($form).click(async function() {
        if(!confirm(s_myname+"\n\nReally restore all dialogs and warnings?")) return;

        await GM.setValue("dialogs","[]");

        alert(s_myname+"\n\nDialogs and warnings restored");
      });


      $('<div>\
      <br>\
      <br>\
      <h3>Known issues:</h3>\
      <ul>\
      <li>nopremium.pl sometimes omits a few links in folders</li>\
      <li>In Firefox the script sometimes does not work if the "Accept thid-parts cookies" policy is set to "Never".<br>\
      To resolve this problem open the Firefox options and go to the tab "Privacy". Set the "Accept thid-parts cookies" to "From visited" or "Always"<br>\
      Close and re-open Firefox. Log out and then log in your nopremium.pl account. Everything should work fine now.</li>\
      </ul>\
      <br>\
      <h3>dcrypt.it</h3>\
      This script uses an unrelated, external service to decrypt *.dlc files:<br>\
      <a href="http://dcrypt.it/">http://dcrypt.it/</a>.\
      </div><br><br><br>').appendTo($body);

      $('<input type="button">').val("Debug info").appendTo($body).click(inspectGMvalues);

  });
  if(chrome) {
    $frame.attr("src","about:blank");
  }

}


function inspectGMvalues() {
  var iv;
  var popup = popUp("multiochhelper_inspectGM",function() {
    clearInterval(iv);
  });
  var $popup = popup.node;
  var $frame = $('<iframe width="'+(window.innerWidth-250)+'" height="'+(window.innerHeight-150)+'" style="border:0">').appendTo($popup);
  $frame.bind('load', async function(e) {
      $($frame[0].contentDocument.getElementsByTagName('head')[0]).append('<style type="text/css">'+SPINNERCSS+'</style>');

      var $body = $($frame[0].contentDocument.getElementsByTagName('body')[0]);
      $body.append("<h2>"+s_myname+"</h2>");

      var keys = await GM.listValues();
      if(keys.length && typeof keys[0] == "undefined") { // Firefox 35+ workaround
        keys = cloneInto(await GM.listValues(), window);
      }

      var $table = $('<table>').appendTo($body);
      var $tr = $('<tr>').appendTo($table);
      $('<th>').html("Key").appendTo($tr);
      $('<th>').html("Value").appendTo($tr);
      $('<th>').html("Type").appendTo($tr);
      $('<th>').html("").appendTo($tr);


      var deleteValue = async function(ev) {
        var key = $(this).data("key");
        await GM.deleteValue(key);
        $(this).parent().parent().remove();
      };

      var total = 0;
      for(var i = 0; i < keys.length; i++) {
        var value = await GM.getValue(keys[i]);
        var svalue = ""+value;
        var len = 1;
        if(typeof value == "undefined") {
          svalue = "undefined";
        } else if(typeof value == 'string') {
          len = value.length;
        }
        total += len;
        var $tr = $('<tr>').appendTo($table);
        $('<td>').html(keys[i]).appendTo($tr);
        $('<td>').append($('<input type="text" style="width:600px">').val(svalue)).appendTo($tr);
        $('<td>').append(""+(typeof value)+(typeof value == "string"?("("+len+")"):"")).appendTo($tr);
        $('<td>').append($('<input type="button">').val("Delete").data("key",keys[i]).click(deleteValue)).appendTo($tr);
      }

      var $tr = $('<tr>').appendTo($table);
      $('<th>').html("Total").appendTo($tr);
      $('<th>').html(keys.length).appendTo($tr);
      $('<th>').html("approx. "+humanBytes(total)).appendTo($tr);

      var $reload = $('<div>').appendTo($body);
      var $loader = $('<div style="display:inline-block;width:20px; height:20px;" class="ochspinner"></div>').appendTo($reload);
      $reload.append(" Reload in ");
      var $timer = $('<span style="pointer:cursor;" title="Click to reload now"></span>').html("20 seconds").click(function() { this.innerHTML = 0; }).appendTo($reload);
      iv = window.setInterval(function() {
        var s = parseInt($timer.html(),10);
        if(s === 0) {
          clearInterval(iv);
          popup.close();
          inspectGMvalues();
        } else {
          s--;
          $timer.html(s+" seconds");
        }
      },1000);

  });
  if(chrome) {
    $frame.attr("src","about:blank");
  }
}




function hexToBytes(s) {
  return s.match(/([0-9a-fA-F]{2})/g).map(function(v) {
    return parseInt(v,16);
  });
}

function stringToBytes(s) {
  return s.split("").map(function(v) {
    return v.charCodeAt(0);
  });
}

function bytesToString(a) {
  return String.fromCharCode.apply(String,a)
}

function addCSSHead(body) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = body;
  document.head.appendChild(style);
}

function humanBytes(bytes, precision) {
  // http://stackoverflow.com/a/18650828
 bytes = parseInt(bytes,10);
 if(bytes === 0) return '0 Byte';
 var k = 1024;
 var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
 var i = Math.floor(Math.log(bytes) / Math.log(k));
 return parseFloat((bytes / Math.pow(k, i)).toPrecision(2)) + ' ' + sizes[i];
}


function xmlHttpRequestBinary(obj) {
  var sep = "-----987564176415";
  var res = "";
  var bytestring = function(s) {
    for(var i = 0; i < s.length; i++) {
      var v = s.charCodeAt(i);
      if(v > 255) {
        console.log("This is strange: "+s[i]+" => "+v);
      } else {
        res += s[i];
      }
    }
    return res;
  }

  var lines = [];
  for (var name in obj.data) {
    if (obj.data.hasOwnProperty(name)) {
      lines.push('--' + sep);
      var body = 'Content-Disposition: form-data; name="' + name + '"';
      if (typeof(obj.data[name]) == 'object') {
        var value = bytestring(obj.data[name].value);
        if (obj.data[name].filename)
          body += '; filename="' + obj.data[name].filename + '"';
        lines.push(body);
        lines.push('Content-type: application/force-download');
      } else {
        var value = obj.data[name];
        lines.push(body);
      }
      lines.push('');
      lines.push(value);
    }
  }
  lines.push('--' + sep + '--');

  var newdata = lines.join('\r\n');

  obj['binary'] = true;
  obj['headers'] = {
      "Content-Type": 'multipart/form-data; boundary=' + sep,
      "Content-Length": newdata.length
    };
  obj['data'] = newdata;
  return GM.xmlHttpRequest(obj);
}

function getNextZIndex() {
  // Calculate: max(zIndex) + 1
  var zIndexMax = 0;
  try {
    $('div').each(function () {
      var z = parseInt($(this).css('z-index'),10);
      if (z > zIndexMax) {
        zIndexMax = z;
      }
    });
  } catch(e) {} finally {
    if(zIndexMax < 20000) {
      zIndexMax = 20006;
    }
    return zIndexMax + 1;
  };
}

async function showConfirm(id,text,cb_yes,cb_no,thisArg) {
  // Skip
  var dialogs = JSON.parse(await GM.getValue("dialogs","[]"));
  if(dialogs.indexOf(id) !== -1) {
    cb_yes.call(thisArg);
    return;
  }

  var popup = popUp("confirm"+id,function(){},thisArg);
  var $div = popup.node;
  $div.append(text);
  $div.append("<br>");
  var $yes = $('<input type="button" value="Yes">').click(function() {
    popup.close();
    cb_yes.call(thisArg);
  }).appendTo($div);

  var $no = $('<input type="button" value="No">').click(function() {
    popup.close();
    if(cb_no) {
      cb_no.call(thisArg);
    }
  }).appendTo($div);

  $div.append("<br>");

  var $remember = $('<input type="checkbox" value="remember">').click(async function() {
    if(this.checked) {
      var dialogs = JSON.parse(await GM.getValue("dialogs","[]"));
      if(dialogs.indexOf(id) === -1) {
        dialogs.push(id);
        await GM.setValue("dialogs",JSON.stringify(dialogs));
      }
    } else {
      var dialogs = JSON.parse(await GM.getValue("dialogs","[]"));
      if(dialogs.indexOf(id) !== -1) {
        dialogs.splice(dialogs.indexOf(id), 1);
        await GM.setValue("dialogs",JSON.stringify(dialogs));
      }
    }
  }).appendTo($div);
  $div.append(' Always "Yes". Do not show this message again!');
}


function setStatus(text,success) {
  var $statustext = $('#multiochhelper_status_text');
  if(!$statustext) {
    alert(s_myname+"\n\n"+text);
    return;
  }
  $statustext.html("");
  addStatus(text,success);
}

function addStatus(text,success) {
  var $statustext = $('#multiochhelper_status_text');
  if(!$statustext.length) {
    alert(s_myname+"\n\n"+text);
    return;
  }
  $statustext.parent().show();
  if($statustext.html() != "") {
    $statustext.append("<br>");
  }
  $statustext.append(text);
  if(success === 1) {
     $statustext.css("color","#33FF99");
  } else if(success === 0) {
     $statustext.css("color","orange");
  } else if(success === -1) {
     $statustext.css("color","cyan");
  } else {
     $statustext.css("color","white");
  }
}

function showOnlyStatus() {
  var $status = $('#multiochhelper_status');
  $status.siblings().not("#multiochhelper_status").remove();
}

function getMultiOCHWebsiteURL(links) {
  return multi[currentdebrid].getOpenWebsiteURL(links);
}

function openWebsite(links,cb) {
  // Call cb() and navigate to the website
  if(!links) {
    cb(false);
    return;
  }

  if(cb) {
    cb();
  }
  var url = getMultiOCHWebsiteURL(links);

  if(settings.newTab) {
    if(typeof GM.openInTab == "undefined") {
      window.open(url);
    } else {
      GM.openInTab(url);
    }
  } else {
    document.location.href = url;
  }
}

async function useCache(urls,cb) {
  urls = ""+urls;
  var cachedDownloadLinks = JSON.parse(await GM.getValue("cachedDownloadLinks","{}")); // [datestring,downloadlink,multihoster]
  if(urls in cachedDownloadLinks) {
    if(confirm(s_myname+"\n\nLink was found in cache.\nUse cached link?\n\nFrom: "+(new Date(cachedDownloadLinks[urls][0]))+"\nWith: "+cachedDownloadLinks[urls][2]+"\n"+cachedDownloadLinks[urls][1].join("\n"))) {
      cb(cachedDownloadLinks[urls][1]);
      return true;
    }
  }
  return false;
}
async function cacheLink(urls,datetime,downloadLinks,multihoster) {
  if(!Array.isArray(downloadLinks)) {
    var parts = downloadLinks.split("\n");
    downloadLinks = [];
    for(var i = 0; i < parts.length; i++) {
      if($.trim(parts[i])) {
        downloadLinks.push($.trim(parts[i]));
      }
    }
  }
  if(downloadLinks.length === 0) return;

  urls = ""+urls;
  var cachedDownloadLinks = JSON.parse(await GM.getValue("cachedDownloadLinks","{}"));
  cachedDownloadLinks[urls] = [datetime,downloadLinks,multihoster];
  await GM.setValue("cachedDownloadLinks",JSON.stringify(cachedDownloadLinks));
}

async function generateLinks(urls,cb) {
  // Check cache
  if(await useCache(urls,cb)) {
    return;
  }

  await multi[currentdebrid].getLinks(urls,cb);
}


async function download(urls,cb) {
  // Get one/first download link and open it immediately/start download
  if(urls.length > 1) {
    alert(s_myname+"\n\nOnly the first link will be opened!");
  }

  await generateLinks(urls,function(result, code) {
    if(cb) cb();
    if(result && result[0]) {
      addStatus("Opening download...",-1);
      var oldlocation = document.location.href;
      document.location.href = result[0];
      if(oldlocation == document.location.href) { // Changing location was blocked by sandboxed iframe
        //GM_openInTab(result);
        top.location.href = result[0];
      }
    } else if(!code) {
      addStatus("An error occured: No downloadlink to open",0);
    }
  });
}

async function clipboard(urls,cb) {

  // Get download links and copy them into clipboard
  generateLinks(urls,function(result) {
    if(result) {
      try {
        GM.setClipboard(result.join("\r\n"));
        setStatus("Copied to clipboard",1);
      } catch(e) {
         setStatus("Clipboard not supported by this browser",0);
         alert(result.join("\n"));
      };
    } else {
      setStatus("An error occured: No downloadlinks found",0);
    }
    if(cb) cb();
  });
}

async function sendToJD(urls,cb) {

  // Get download links and send them to JDownloader
  generateLinks(urls,function(result) {
    if(result) {
      setStatus("Waiting for JDownloader",-1);

      // Comment should be the original page in case of multiple links
      var comment = urls[0];
      if(urls.length > 1) {
        if(show_oneclick_FromHighlighScript_allLinks_loc) {
          comment = show_oneclick_FromHighlighScript_allLinks_loc;
        } else if(show_oneclick_FromHighlighScript_selectedLinks_loc) {
          comment = show_oneclick_FromHighlighScript_allLinks_loc;
        } else {
          comment = document.location.href;
        }
      }

      GM.xmlHttpRequest({
        method: "POST",
        url: JDOWNLOADER+"flash/add",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Referer" : s_referer,
          "User-Agent" : s_referer
        },
        //data: "source="+encodeURIComponent(s_referer)+"&urls="+encodeURIComponent(result.join("\r\n")), // Moved "source" to Referer
        //data: "comment="+encodeURIComponent(comment)+"&urls="+encodeURIComponent(result.join("\r\n")), // See ExternInterfaceImpl.java
        data: "source="+encodeURIComponent(s_referer)+"&comment="+encodeURIComponent(comment)+"&urls="+encodeURIComponent(result.join("\r\n")), // See ExternInterfaceImpl.java
        onload: function (resp){
          if(cb) cb();
          if(resp.status == 204 || resp.responseText.startsWith("success")) {
            setStatus("Sent to JDownloader",1);
          } else {
            setStatus("JDownloader rejected the request",0);
          }
        },
        onerror: function(resp) {
          if(cb) cb();
          setStatus("JDownloader is not running",0);
        }


      });

    } else {
      if(cb) cb();
      addStatus("No links to send",0);

    }
  });
}




function showLinks(urls,cb,append,n) {
  var popup = popUp("showLinks");
  var $div = popup.node;
  var $loader = $('<div style="width:20px; height:20px;" class="ochspinner"></div>').appendTo($div);

  var $frame = $('<iframe width="900" height="500" style="border:0">').appendTo($div);
  $frame.bind('load', function(e) {
      $($frame[0].contentDocument.getElementsByTagName('head')[0]).append('<link rel="stylesheet" href="https://www.nopremium.pl/css/style.css" type="text/css" />');
      var $body = $($frame[0].contentDocument.getElementsByTagName('body')[0]);
      multi[currentdebrid].getResults(urls,function($node) {
        $loader.remove();
        $body.append($node);
        $body.find("a").each(function() {
          // Open links in new window
          this.setAttribute("target","_blank");
        });
        if(cb) cb();
      });

  });
  if(chrome) {
    $frame.attr("src","about:blank");
  }
}


function decryptClickNLoad(cb,jk,crypted_base64) {
  // Get all the links by decrypting the Click'n'Load form
  // return False for any error
  // return True, run cb() and open the menu if Click'n'Load was successfully decoded

  if(!crypted_base64 && !(document.getElementsByName('crypted').length && document.getElementsByName('jk').length)) {
    return false; // Click'n'Load not avaiblabe
  }

  setStatus("Trying to decrypt Click'n'Load",-1);

  try {
    // Key/IV
    if(!jk) {
      jk = document.getElementsByName('jk')[0].value;
    }
    if(jk.indexOf("return") != -1) {
      jk = eval(jk+"; f();");
    }

    var key = hexToBytes(jk);
    var iv = key.slice(0);

    // Text
    if(!crypted_base64) {
      crypted_base64 = document.getElementsByName('crypted')[0].value;
    }
    var crypted_string = atob(crypted_base64);
    var crypted_bytes = stringToBytes(crypted_string);

    // Decrypt
    var text_bytes = slowAES.decrypt(crypted_bytes,slowAES.modeOfOperation.CBC,key,iv);
    var text = bytesToString(text_bytes);

    text = text.replace("\r","");

    var splitted = text.split("\n");

    var links = [];
    for(var i = 0; i < splitted.length; i++) {
      // Remove any line that is not a http link
      var t = $.trim(splitted[i])
      if(t && t.substring(0,4) == "http") {
        links.push(t);
      }
    }

    var N = links.length;

    if(N === 0) {
      return false; // Click'n'Load probably failed, try another method...
    }

    if(cb) {
      cb();
    }
    menu(links);
    setStatus("Found "+(N===1?"one link":(N+" links")),1);
    return true;
  } catch(e) {
    alert("Click'N'Load failed:\n"+e);
    return false;  // Click'n'Load probably failed, try another method...
  }


  /*
  // Get all the links by decrypting the Click'n'Load form
  if(!document.getElementsByName('crypted').length || !document.getElementsByName('jk').length) {
    if(cb) {
      cb();
    }
    return;
  }

  setStatus("Trying linkdecrypter.com",-1);
  var crypted = document.getElementsByName('crypted')[0].value;
  var jk = document.getElementsByName('jk')[0].value;

  GM.xmlHttpRequest( {
    method: "POST",
    url: "http://linkdecrypter.com/api/?t=cnl2",
    data: 'crypted=' + encodeURIComponent(crypted) + '&jk=' + encodeURIComponent(btoa(jk)),
    headers: {
      "User-agent": "Mozilla/5.0 (X11;U;Linux i686;es-ES;rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8",
      "Accept": "application/atom+xml,application/xml,text/xml",
      "Content-type" : "application/x-www-form-urlencoded"
    },
    onload: function(response) {
      if(cb) {
        cb();
      }
      var N = response.responseText.split("\n").length;
      if(!response.responseText || response.responseText.indexOf("ERROR(CNL2)") !== -1 ||  N === 0) {
        setStatus("An error occurred while handling the response of linkdecrypter.com",0);
      } else {
        menu(response.responseText);
        setStatus("Found "+(N===1?"one link":(N+" links")),1);
      }
    }
  });
  */
}

function decryptDLContainer(url, cb) {
  // Get all the links by decrypting the DLC container at the given URL via dcrypt.it
  // run cb() and open the menu if Click'n'Load was successfully decoded

  GM.xmlHttpRequest( {
    method: "GET",
    url: url,
    binary: true,
    overrideMimeType: 'text/plain; charset=x-user-defined',
    onload: function(resp) {
      setStatus("Decrypting dlc container via dcrypt.it",-1);
      xmlHttpRequestBinary({
        method: 'POST',
        url: DCRYPTIT_UPLOAD_URL,
        onload:function(resp) {
          if(cb) {
            cb();
          }
          try {
            var obj = JSON.parse(resp.responseText.replace("<textarea>","").replace("</textarea>",""));

            if(obj.success) {
              obj.success.links.shift(); // Discard first link, it always has the same value
              var alllinks = '';
              for(var i = 0; i < obj.success.links.length; ++i) {
                alllinks += $.trim(obj.success.links[i])+"\n";
              }
              menu(alllinks);
              setStatus("Found "+(obj.success.links.length===1?"one link":(obj.success.links.length+" links")),1);
            } else {
              setStatus("No links found in dlc container",0);
            }
          } catch(e) {
            alert(e);
            setStatus("An error occurred while handling the response of dcrypt.it",0);
          }
        },
        data : {
          'dlcfile' : {
            'value': resp.responseText,
            'filename': 'test.dlc'
          }
        }

      });

    }
  } );
}






function getAllSerienjunkiesLinks(cb) {
  // Get all download links from a serienjunkies.org download page (i.e. the page right after the captcha)
  var urls = []; // [  [partnumber0,link0]  ,  [partnumber1,link1]  ,  .... ]
  var total = 0;

  var rap = document.getElementById('rap');
  var table = rap.getElementsByTagName('table')[0];
  var forms = table.getElementsByTagName('form');

  var j = 1; // part number, in order to make sure that sorting of the links is the same as on the page.
             // This is only a fallback in case there is no visible part number in the actual downloadlink/filename.
  for(var i = 0; i < forms.length; i++) {
    var url = forms[i].action;
    if(url.indexOf('mirror') !== -1 || url.indexOf('firstload') !== -1 ) {
      continue;
    }
    GM.xmlHttpRequest({
      method: "GET",
      url: url,
      onload: function (j){
        return function (response) {
          var loc = response.finalUrl; // Actual link after posible redirections
          if(response.finalUrl.match(/part*(\d+)\./)) { // Try to guess part number
            var part = response.finalUrl.match(/part*(\d+)\./)[1];
            urls.push([parseInt(part,10),loc]);
          } else { // fallback part number
            urls.push([j,loc]);
          }
          setStatus("Decrypting: "+urls.length+"/"+total, total === urls.length?1:-1);
          if(total === urls.length) {
            // Got all links
            cb(urls);
          }
        }
      }(j)
    });
    j++;
  }
  total = j-1;

};

function getSerienjunkiesLinks(cb) {
  // Get all the links from the page
  getAllSerienjunkiesLinks(function(urls) {
    if(cb) {
      cb();
    }

    urls = urls.sort(function(a,b) {
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
      return 0;
    });

    var alllinks = '';
    for(var i = 0; i < urls.length; ++i) {
      alllinks += urls[i][1]+"\n";
    }
    menu(alllinks);
  });

}

function reverseString(s) {
  return s.split("").reverse().join("");
}

function getShareBizLinks(cb,noClickNLoad) {
  // Decide whether to use the Click'n'Load, the dlc or the rsdf container

  // Try Click'n'Load
  if($("#swfcontainer") && $("#swfcontainer")[0] && !noClickNLoad) {


    var secret = $("#swfcontainer")[0].data.split("code=").pop();
    GM.xmlHttpRequest({
      method: "GET",
      url: SHAREBIZ_CNL2_URL+secret,
      onload: function (resp){
        var parts = resp.responseText.split(";;");

        var jk = "var a;"+reverseString(atob(parts[1])); // Strict mode
        var crypt = reverseString(atob(parts[2]));

        GM.setClipboard(resp.responseText);

        if(!decryptClickNLoad(cb,jk,crypt)) {
          // Click'n'Load did not work, try the containers:
          getShareBizLinks(cb,true);
        }
      }
    });
    return;
  }


  var cbutton = false;
  // Look for rsdf
  $('#cf img.pntr').each(function(){
    if($(this).attr('onclick').indexOf("'rsdf'") != -1) {
      cbutton = $(this);
    }
  });
  if(!cbutton) {
    // Now look for dlc
    $('#cf img.pntr').each(function(){
      if($(this).attr('onclick').indexOf("'dlc'") != -1) {
        cbutton = $(this);
      }
    });
    if(!cbutton) {
      if(cb) {
        cb();
      }
      setStatus("Could not find a container button",0);
      return;
    } else {
      // use dlc button
      getShareBizLinksDLC(cb);
    }
  } else {
    // use rsdf button
    getShareBizLinksRSDF(cb);
  }
}

function getShareBizLinksRSDF(cb) {
  // Get all the links by decrypting the rsdf container

  var cbutton = false;
  $('#cf img.pntr').each(function(){
    if($(this).attr('onclick').indexOf("'rsdf'") != -1) {
      cbutton = $(this);
    }
  });
  if(!cbutton) {
    if(cb) {
      cb();
    }
    setStatus("Could not find rsdf button",0);
    return;
  }

  var onclickstr = cbutton.attr('onclick'); // javascript:_get('VXlsd3B3QU80VU13UGRCN1lSbEJrMUYzYy8wZlVLVklNVFBHTG1BWkM4bz0=', 0, 'ccf');
  var lnk = onclickstr.match(/get\('(\S+)'/)[1];

  setStatus("Retrieving rsdf container",-1);

  var url = SHAREBIZ_RSDF_URL+lnk;

  GM.xmlHttpRequest({
    method: "GET",
    url: url,
    onload: function (resp){
      var data = resp.responseText;
      setStatus("Decrypting rsdf container",-1);
      GM.xmlHttpRequest({
        method: "POST",
        url: POSATIV_URL,
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        data: "data="+data,
        onload: function (resp){

          if(cb) {
            cb();
          }

          var urls = resp.responseText.split("\n");

          var alllinks = '';
          for(var i = 0; i < urls.length; ++i) {
            alllinks += $.trim(urls[i])+"\n";
          }
          menu(alllinks);
          setStatus("Found "+(urls.length===1?"one link":(urls.length+" links")),1);
        }
      });

    }
  });
}

function getShareBizLinksDLC(cb) {
  // Get all the links by sending the DLC container to http://dcrypt.it/

  var cbutton = false;
  $('#cf img.pntr').each(function(){
    if($(this).attr('onclick').indexOf("'dlc'") != -1) {
      cbutton = $(this);
    }
  });
  if(!cbutton) {
    if(cb) {
      cb();
    }
    setStatus("Could not find dlc button",0);
    return;
  }

  var onclickstr = cbutton.attr('onclick'); // javascript:_get('VXlsd3B3QU80VU13UGRCN1lSbEJrMUYzYy8wZlVLVklNVFBHTG1BWkM4bz0=', 0, 'ccf');
  var lnk = onclickstr.match(/get\('(\S+)'/)[1];

  setStatus("Retrieving dlc container",-1);

  var url = SHAREBIZ_DLC_URL+lnk;

  GM.xmlHttpRequest( {
    method: "GET",
    url: url,
    binary: true,
    overrideMimeType: 'text/plain; charset=x-user-defined',
    onload: function(resp) {
      setStatus("Decrypting dlc container via dcrypt.it",-1);
      xmlHttpRequestBinary({
        method: 'POST',
        url: DCRYPTIT_UPLOAD_URL,
        onload:function(resp) {
          if(cb) {
            cb();
          }
          try {
            var obj = JSON.parse(resp.responseText.replace("<textarea>","").replace("</textarea>",""));

            if(obj.success) {
              obj.success.links.shift(); // Discard first link, it always has the same value
              var alllinks = '';
              for(var i = 0; i < obj.success.links.length; ++i) {
                alllinks += $.trim(obj.success.links[i])+"\n";
              }
              menu(alllinks);
              setStatus("Found "+(obj.success.links.length===1?"one link":(obj.success.links.length+" links")),1);
            } else {
              setStatus("No links found in dlc container",0);
            }
          } catch(e) {
            alert(e);
            setStatus("An error occurred while handling the response of dcrypt.it",0);
          }
        },
        data : {
          'dlcfile' : {
            'value': resp.responseText,
            'filename': 'test.dlc'
          }
        }


      });

    }
  } );

}

function getLinkSaveInLinks(cb) {
  // Get all the links by sending the DLC container URL to http://dcrypt.it/

  if($('#container_loading').css('display') != 'none') {
    if(cb) {
      cb();
    }
    alert(s_myname+'\n\nSorry.\nYou are too quick for this website.\n\nPlease be patient until the container has loaded.');
    return;
  }

  var lnk = document.getElementById('dlc_link').href;

  setStatus("Decrypting dlc container via dcrypt.it",-1);
  GM.xmlHttpRequest({
    method: "POST",
    url: DCRYPTIT_CONTAINERLINK_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: "link="+encodeURIComponent(lnk),
    onload: function (resp){
      if(cb) {
        cb();
      }
      try {

        var obj = JSON.parse(resp.responseText);

        if(obj.success) {
          obj.success.links.shift(); // Discard first link, it always has the value "http://linksave.in"
          var alllinks = '';
          for(var i = 0; i < obj.success.links.length; ++i) {
            alllinks += $.trim(obj.success.links[i])+"\n";
          }

          menu(alllinks);
          setStatus("Found "+(obj.success.links.length===1?"one link":(obj.success.links.length+" links")),1);
        } else {
          setStatus("No links found in dlc container",0);
        }
      } catch(e) {
        alert(e);
        setStatus("An error occurred while handling the response of dcrypt.it",0);
      }
    }
  });

}

function getRelinktoLinks(cb) {
  // Get all the links
  if(decryptClickNLoad(cb)) { // Try Click'n'Load first, then fallback to DLC
    return;
  }

  // Else: get links by sending the DLC container to http://dcrypt.it/
  var cbutton = $(".dlc_button");
  if(!cbutton) {
    setStatus("Could not find dlc button or Click'n'Load",-1);
    if(cb) {
      cb();
    }
    return;
  }

  var url = cbutton.attr('href'); // URL of .dlc file

  decryptDLContainer(url, cb);
}

function getLinkcryptWsLinks(cb) {
  // Get all the links by sending the DLC container to http://dcrypt.it/

  if(decryptClickNLoad(cb)) { // Try Click'n'Load first, then fallback to DLC
    return;
  }


  var cbutton = false;
  $('#ad_cont a').each(function(){
    if($(this).html().indexOf("dlc.png") != -1) {
      cbutton = $(this);
    }
  });
  if(!cbutton) {
    setStatus("Could not find dlc button or Click'n'Load",-1);
    if(cb) {
      cb();
    }
    return;
  }

  var url = cbutton.attr('href');

  GM.xmlHttpRequest( {
    method: "GET",
    url: url,
    binary: true,
    overrideMimeType: 'text/plain; charset=x-user-defined',
    onload: function(resp) {
      setStatus("Decrypting dlc container via dcrypt.it",-1);
      xmlHttpRequestBinary({
        method: 'POST',
        url: DCRYPTIT_UPLOAD_URL,
        onload:function(resp) {
          if(cb) {
            cb();
          }
          try {
            var obj = JSON.parse(resp.responseText.replace("<textarea>","").replace("</textarea>",""));

            if(obj.success) {
              obj.success.links.shift(); // Discard first link, it always has the same value
              var alllinks = '';
              for(var i = 0; i < obj.success.links.length; ++i) {
                alllinks += $.trim(obj.success.links[i])+"\n";
              }
              menu(alllinks);
              setStatus("Found "+(obj.success.links.length===1?"one link":(obj.success.links.length+" links")),1);
            } else {
              setStatus("No links found in dlc container",0);
            }
          } catch(e) {
            alert(e);
            setStatus("An error occurred while handling the response of dcrypt.it",0);
          }
        },
        data : {
          'dlcfile' : {
            'value': resp.responseText,
            'filename': 'test.dlc'
          }
        }

      });

    }
  } );
}

function getLinkcryptWsLinks2(cb) {
  // Get all the links by decrypting the Click'n'Load form
  var r = decryptClickNLoad(cb);
  if(!r) {
    setStatus("Could not find Click'n'Load",-1);
    if(cb) {
      cb();
    }
  }
}

function getFilecryptcc(jddata, cb) {
  // Get all the links by decrypting the Click'n'Load form
  var field_jk = jddata[0];
  var field_crypted = jddata[1];

  var r = decryptClickNLoad(cb,field_jk,field_crypted);
  if(!r) {
    setStatus("Could not find Click'n'Load",-1);
    if(cb) {
      cb();
    }
  }
}


function getNCryptLinks(cb) {
  // Get all the links by sending the DLC container URL to http://dcrypt.it/


  // Get the currently selected mirror
  var mirrorid = false;
  for(var i = 0; i < 100; i++) {
    var div = document.getElementById('mirror_'+i);
    if(div && div.style.display != 'none') {
      mirrorid = i;
      break;
    }
  }
  if(mirrorid === false) {
    if(cb) {
      cb();
    }
    alert(s_myname+'\n\nSorry.\nPlease select a mirror first.');
    return;
  }

  var cbutton = false;
  $('#mirror_'+mirrorid+'_container a').each(function(){
    if($(this).html().indexOf("dlc.png") != -1) {
      cbutton = $(this);
    }
  });
  if(!cbutton) {
    if(cb) {
      cb();
    }
    setStatus("Could not find dlc button",0);
    return;
  }

  var lnk = "http://ncrypt.in"+cbutton.attr('href');

  setStatus("Decrypting dlc container via dcrypt.it",-1);
  GM.xmlHttpRequest({
    method: "POST",
    url: DCRYPTIT_CONTAINERLINK_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: "link="+encodeURIComponent(lnk),
    onload: function (resp){
      if(cb) {
        cb();
      }

      try {

        var obj = JSON.parse(resp.responseText);

        if(obj.success) {
          obj.success.links.shift(); // Discard first link, it always has the value "http://linksave.in"
          var alllinks = '';
          for(var i = 0; i < obj.success.links.length; ++i) {
            alllinks += $.trim(obj.success.links[i])+"\n";
          }
          menu(alllinks);
          setStatus("Found "+(obj.success.links.length===1?"one link":(obj.success.links.length+" links")),1);
        } else {
          setStatus("No links found in dlc container",0);
        }
      } catch(e) {
        alert(e);
        setStatus("An error occurred while handling the response of dcrypt.it",0);
      }
    }
  });

}

function getRelinkUsLinks(cb) {
  // Get all the links by following each link

  var cryptic_urls = [];
  $('#links a.submit').each(function(){
    if(this.getAttribute('onclick'))
      cryptic_urls.push(RELINKUS_GETFILE + this.getAttribute('onclick').split("'")[1]);
  });

  var captcha_info = false;
  var captcha_holder = $('<div style="position:absolute; top:10px; right:10px; overflow:auto; height:80%"></div>').appendTo(document.body);

  var urls = [];
  var total = 0;

  var j = 1;
  for(var i = 0; i < cryptic_urls.length; i++) {
    GM.xmlHttpRequest({
      method: "GET",
      url: cryptic_urls[i],
      onload: function (j){
        return function (response) {
          var loc = response.finalUrl; // Actual link after posible redirections
          if(response.responseText.indexOf('iframe') != -1) {
            loc = response.responseText.split('src="')[1].split('"')[0];
            urls.push(loc);
          } else {
            if(!captcha_info) {
              captcha_info = true;
              alert(s_myname+"\n\nSorry, this page is protected with captchas.\n\
              The captchas will appear in the RIGHT TOP corner.");
            }

            var div = $(response.responseText).appendTo(captcha_holder);
            div.css('marginTop','20px');
            div.css('marginLeft','auto');
            div.css('left','auto');
            div.css('top','auto');
            div.css('right','auto');
            div.css('position','relative');
            var form = $('form',div);
            $("input[type=image]",div).click(function(e) {
              e.preventDefault();
              var posX = $(this).offset().left;
              var posY = $(this).offset().top;
              var x = e.pageX - posX;
              var y = e.pageY - posY;
              $(this.parentNode.parentNode).remove();
              var data = form.serialize()+"&button.x="+x+"&button.y="+y;
              GM.xmlHttpRequest({
                method: "POST",
                url: "http://www.relink.us/frame.php",
                data : data,
                headers: {
                  "Host" : "www.relink.us",
                  // "Referer" : response.finalUrl,  // FIREFOX57
                  "Content-Type" : "application/x-www-form-urlencoded",
                  "Cache-Control" : "no-cache"
                },
                onload: function (r) {
                  if(r.responseText.indexOf('iframe') != -1) {
                    loc = r.responseText.split('src="')[1].split('"')[0];
                    urls.push(loc);
                  } else {
                    alert(s_myname+"\n\nAn error occured:\nCould not get link.");
                  }

                  setStatus("Decrypting: "+urls.length+"/"+total,-1);
                  if(total === urls.length) {
                    // Got all links
                    cb();
                    menu(urls);
                    setStatus("Found "+(total===1?"one link":(total+" links")),1);
                  }

                }
              });


            });


          }
          setStatus("Decrypting: "+urls.length+"/"+total,-1);
          if(total === urls.length) {
            // Got all links
            cb();
            menu(urls);
            setStatus("Found "+(total===1?"one link":(total+" links")),1);
          }
        }
      }(j)
    });
    j++;
  }
  total = j-1;

};


function getExtremeProtectLinks(cb) {
  var urls = [];
  var a = document.querySelectorAll(".all_liens a");
  for(var i = 0; i < a.length; i++) {
    urls.push(a[i].href);
  }

  cb();
  menu(urls);
}


function getSafeLinkingNetLinks(cb) {
  // Get all the links by following each link

  var cryptic_urls = [];
  $('div.links-container.result-form a.result-a').each(function(){
    if(this.getAttribute('href') && this.getAttribute('href').indexOf('/d/') != -1)
      cryptic_urls.push(this.getAttribute('href'));
  });

  var urls = [];
  var total = 0;

  var j = 1;
  for(var i = 0; i < cryptic_urls.length; i++) {
    GM.xmlHttpRequest({
      method: "GET",
      url: cryptic_urls[i],
      onload: function (j){
        return function (response) {
          var loc = response.finalUrl; // Actual link after posible redirections
          urls.push(loc);
          setStatus("Decrypting: "+urls.length+"/"+total,-1);
          if(total === urls.length) {
            // Got all links
            cb();
            menu(urls);
            setStatus("Found "+(total===1?"one link":(total+" links")),1);
          }
        }
      }(j)
    });
    j++;
  }
  total = j-1;
};


var linkSelectorFilter = {
  _filter : function(key) {
    var a = Array.prototype.slice.call(arguments,1);
    return function() {
      linkSelectorFilter[key].apply(linkSelectorFilter,a);
    }
  },

  all : function(trs) {
    for(var i = 0; i < trs.length; i++) {
      trs[i]["$check"].prop('checked', true);
    }
  },
  none : function(trs) {
    for(var i = 0; i < trs.length; i++) {
      trs[i]["$check"].prop('checked', false);
    }
  },
  flip : function(trs) {
    for(var i = 0; i < trs.length; i++) {
      trs[i]["$check"].prop('checked',!trs[i]["$check"].prop('checked'));
    }
  },

  has : function(trs,$inp_filter) {
    var s = $inp_filter.val();
    for(var i = 0; i < trs.length; i++) {
      if(trs[i].link.indexOf(s) != -1) {
        trs[i]["$check"].prop('checked',!trs[i]["$check"].prop('checked'));
      }
    }

  },

  host : function(trs,$sel_host) {
    var h = $sel_host.val();

    for(var i = 0; i < trs.length; i++) {
      if(trs[i].host == h) {
        trs[i]["$check"].prop('checked',!trs[i]["$check"].prop('checked'));
      }
    }

  },

  fromto : function(trs,$table,$thead,$th) {
    var _self = this;

    for(var i = 0; i < trs.length; i++) {
      trs[i].$check.prop('disabled',true);
    }
    $table.find("td").hover(function() {
      $(this).parent().find("td").each(function(i,e) {
        $(e).css("background","PaleGreen");
      });
    },function() {
      $(this).parent().find("td").each(function(i,e) {
        $(e).css("background","");
      });
    });
    $thead.find("th").css('display','none');
    $th.css("display","");
    $th.html("Select from where to start");

    $table.find("td").click(function() {
      var from = $(this.parentNode).data("index");
      $(this).parent().find("td").css("background","PaleGreen");
      $table.find("td").unbind('click mouseenter mouseleave');
      $th.html("Select where to stop");

      $table.find("td").hover(function() {
        var to = $(this.parentNode).data("index");
        $table.find("td").each(function(i,e) {
          var $e = $(e);
          var j = $e.parent().data("index");
          if(j > from && j <= to) {
            $e.css("background","DarkSeaGreen");
          } else if(j > from && j > to) {
            $e.css("background","");
          }
        });
        if($(this).parent().data("index") > from) $(this).parent().find("td").css("background","PaleGreen");
      });
      $table.find("td").filter(function(i,e) { return $(e.parentNode).data("index") > from;  }).click(function() {
        var to = $(this.parentNode).data("index")+1;

        $table.find("td").unbind('click mouseenter mouseleave');
        $(this).parent().find("td").css("background","PaleGreen");
        $table.find("td").each(function(i,e) {
          var $e = $(e);
          var j = $e.parent().data("index");
          if(j < from || j >= to) {
            $e.css("display","none");
          }
        });


        var ntrs = trs.slice(from,to);
        for(var i = 0; i < ntrs.length; i++) {
          ntrs[i].$check.prop('disabled',false);
        }

        $th.html("Select ");
        $("<button>").appendTo($th).text("all").click(_self._filter("all",ntrs));
        $("<button>").appendTo($th).text("none").click(_self._filter("none",ntrs));
        $("<button>").appendTo($th).text("flip").click(_self._filter("flip",ntrs));
        $("<button>").appendTo($th).text("return to all links").click(function() {
          $table.find("td").each(function(i,e) {
            var $e = $(e);
            $e.css("display","");
            $e.css("background","");
          });
          $thead.find("th").css("display","");
          $th.css("display","none");
          $th.html("");
          for(var i = 0; i < trs.length; i++) {
            trs[i].$check.prop('disabled',false);
          }
        });
        $th[0].scrollIntoView();

        return false;
      });



    });
  },

  every : function(trs,$table,$thead,$th) {
    var _self = this;

    for(var i = 0; i < trs.length; i++) {
      trs[i].$check.prop('disabled',true);
    }
    $table.find("td").hover(function() {
      $(this).parent().find("td").each(function(i,e) {
        $(e).css("background","PaleGreen");
      });
    },function() {
      $(this).parent().find("td").each(function(i,e) {
        $(e).css("background","");
      });
    });
    $thead.find("th").css('display','none');
    $th.css("display","");
    $th.html("Select from where to start");

    $table.find("td").click(function() {
      var from = $(this.parentNode).data("index");
      $(this).parent().find("td").css("background","PaleGreen");
      $table.find("td").unbind('click mouseenter mouseleave');
      $th.html("Select next");

      $table.find("td").hover(function() {
        var to = $(this.parentNode).data("index");
        var diff = to-from;
        if(to < from+2) {
          $table.find("td").filter(function(i,e) { return $(e.parentNode).data("index") > from+1;  }).css("background","");
        } else {
          $table.find("td").filter(function(i,e) { return $(e.parentNode).data("index") > from+1;  }).each(function(i,e) {
            var j = $(this.parentNode).data("index");
            if((j-from) % diff === 0 && j > from+1) {
              $(this).css("background","PaleGreen");
            } else {
              $(this).css("background","");
            }
          });
          $(this).parent().find("td").css("background","DarkSeaGreen");
        }
      }).click(function() {
        var to = $(this.parentNode).data("index");

        if(to < from+2) return false;

        $(this).parent().find("td").css("background","PaleGreen");

        var diff = to-from;


        $table.find("td").unbind('click mouseenter mouseleave');

        $table.find("td").each(function(i,e) {
          var $e = $(e);
          var j = $e.parent().data("index");
          if((j-from) % diff !== 0 || j < from) {
            $e.css("display","none");
          }
        });

        var ntrs = [];
        for(var i = 0; i < trs.length; i++) {
          if((i-from) % diff === 0 && i >= from) {
            trs[i].$check.prop('disabled',false);
            ntrs.push(trs[i]);
          }
        }

        $th.html("Select ");
        $("<button>").appendTo($th).text("all").click(_self._filter("all",ntrs));
        $("<button>").appendTo($th).text("none").click(_self._filter("none",ntrs));
        $("<button>").appendTo($th).text("flip").click(_self._filter("flip",ntrs));
        $("<button>").appendTo($th).text("return to all links").click(function() {
          $table.find("td").each(function(i,e) {
            var $e = $(e);
            $e.css("display","");
            $e.css("background","");
          });
          $thead.find("th").css("display","");
          $th.css("display","none");
          $th.html("");
          for(var i = 0; i < trs.length; i++) {
            trs[i].$check.prop('disabled',false);
          }
        });
        $th[0].scrollIntoView();

        return false;
      });



    });
  },



};


function linkSelector(links) {
  var filter = function(key) {
    var a = Array.prototype.slice.call(arguments,1);
    return function() {
      linkSelectorFilter[key].apply(linkSelectorFilter,a);
    }
  };

  var trs = [];

  var selectedLinks = [];
  // Coyp array and remove empty elements
  for(var i = 0,t; i < links.length; i++) {
    if(t = $.trim(links[i])) {
      selectedLinks.push(t);
    }
  }


  var allLinks;
  if(links_beforeSelection == false) {
    links_beforeSelection = links.slice(0); // Save all links for later selections
  }
  allLinks = links_beforeSelection.slice(0);

  var popup = popUp("linkSelector");
  var $div = popup.node;
  var $loader = $('<div style="width:20px; height:20px;" class="ochspinner"></div>').appendTo($div);
  $div.css("overflow","none");
  var $frame = $('<iframe style="border:0">').appendTo($div);
  $frame.attr('width',window.innerWidth-190);
  $frame.attr('height',window.innerHeight-120);
  $frame.bind('load', function(e) {
    var $body = $($frame[0].contentDocument.getElementsByTagName('body')[0]);

    var $main = $("<div>").appendTo($body);

    var $table = $("<table>").appendTo($main);
    var $thead = $("<thead>").appendTo($table);

    var $tr0 = $("<tr>").appendTo($thead);
    var $th0 = $("<th>").appendTo($tr0).attr("colspan",2);
    var $tr1 = $("<tr>").appendTo($thead);
    var $th1 = $("<th>").appendTo($tr1).attr("colspan",2);
    var $tr2 = $("<tr>").appendTo($thead);
    var $th2 = $("<th>").appendTo($tr2).attr("colspan",2);
    var $tr3 = $("<tr>").appendTo($thead);
    var $th3 = $("<th>").appendTo($tr3).attr("colspan",2);
    var $tr4 = $("<tr>").appendTo($thead);
    var $th4 = $("<th>").appendTo($tr4).attr("colspan",2);

    $("<span>Select: <span>").appendTo($th0);
    $("<button>").appendTo($th0).text("all").click(filter("all",trs));
    $("<button>").appendTo($th0).text("none").click(filter("none",trs));
    $("<button>").appendTo($th0).text("flip").click(filter("flip",trs));

    $("<button>").appendTo($th1).text("Select from ... to ...").click(filter("fromto",trs,$table,$thead,$th4));
    $("<button>").appendTo($th1).text("Select every ...").click(filter("every",trs,$table,$thead,$th4));;

    $("<span> Filter:<span>").appendTo($th2);
    var $inp_filter = $("<input>").appendTo($th2).attr("type","text");
    $("<button>").appendTo($th2).text("Flip with filter").click(filter("has",trs,$inp_filter));

    $("<span> Host filter:<span>").appendTo($th3);
    var $sel_host = $("<select>").appendTo($th3);
    $("<button>").appendTo($th3).text("Flip with host filter").click(filter("has",trs,$sel_host));



    var allhosts = [];
    for(var i = 0; i < allLinks.length; i++) {
      var $tr = $("<tr>").data("index",i).appendTo($table);
      var $td0 = $("<td>").appendTo($tr);
      var $check = $("<input>").appendTo($td0).attr("type","checkbox").attr("id","link_checkbox_"+i).prop('checked', selectedLinks.indexOf(allLinks[i]) != -1);
      var $td1 = $("<td>").appendTo($tr);
      $("<label>").attr("for","link_checkbox_"+i).text(allLinks[i]).css("font-family","monospace").appendTo($td1);

      var host = allLinks[i].split("/")[2].replace(/^www\./,"");
      if(allhosts.indexOf(host) == -1) {
        allhosts.push(host);
      }

      trs.push({"$tr":$tr,"$check":$check,"link":allLinks[i],"host":host});
    }

    for(var i = 0; i< allhosts.length; i++) {
      $("<option>").val(allhosts[i]).text(allhosts[i]).appendTo($sel_host);
    }

    var $apply = $("<button>").appendTo($main).text("Apply").click(function() {
      var nlinks = [];
      for(var i = 0; i < trs.length; i++) {
        if(trs[i]["$check"].prop('checked')) {
          nlinks.push(trs[i].link);
        }
      }
      if(nlinks.length === 0) {
        alert("No links selected?!");
        return;
      }
      menu(nlinks);
      setStatus((nlinks.length===1?"One link":(nlinks.length+" links"))+" selected",1);
      popup.close();
    });

    $loader.remove();
  });
  if(chrome) {
    $frame.attr("src","about:blank");
  }
}


function menu(links) {
  // normalize links:
  if(!Array.isArray(links)) {
    var parts = links.split("\n");
    links = [];
    for(var i = 0; i < parts.length; i++) {
      if($.trim(parts[i])) {
        links.push($.trim(parts[i]));
      }
    }
  }



  var $entry;
  var $c = $("#multiochhelper ul");
  $c.html("");

  var $select = $("<select>");
  var host = links[0].match(/https?:\/\/(.+?)\//)[1];
  var hoster = host.split(".");
  hoster.pop();
  hoster = hoster.pop().replace("-","");
  $.each(multi, function(key,val) {
    var $option = $('<option></option>').val(key).html(val.name).appendTo($select);
    if(key == currentdebrid) {
      $option[0].selected = true;
    }
    if(multi[key].isOnline(hoster)) {
      $option.css('color','green');
    } else {
      $option.css('color','#F00');
    }
  });
  $entry = menuentry($select);
  $select.bind("change",function(ev) {
    var $this = $(this);
    // Change hoster
    currentdebrid = $this.val();

    // Check general support
    if(multi[currentdebrid].isOnline(hoster)) {
      // Check first link for support on this multi hoster
      multi[currentdebrid].checkLink(links[0],function(result) {
        if(!result) {
          alert(s_myname+"\n\n"+host+" is not supported by this hoster or the file is offline.\n\nChecked: "+links[0]);
        }
      });
    } else {
      alert(s_myname+"\n\n"+host+" is not supported by "+multi[currentdebrid].name);
    }

    // Add "Remember" checkbox
    if(!$this.parent().find("#remember").length) {
      var $div = $("<div>");
      var $check = $('<input id="remember" type="checkbox" value="remember" title="Remember selection">').click(async function() {
        if(this.checked) {
          currentdebrid = $select.val();
          await GM.setValue("currentdebrid",currentdebrid);
          setStatus("Switched to "+multi[currentdebrid].name,1);
          $div.remove();
        }
      });
      $div.append($check).append("Remember");
      $this.parent().append($div);
    }
  });

  $entry = menuentry("Direct download");
  $entry.click(function() { mouse("download",links); });

  $entry = menuentry("Copy to clipboard");
  $entry.click(function() { mouse("clipboard",links); });

  if(settings.jDownloaderSupport) {
    $entry = menuentry("Send to JDownloader");
    $entry.attr("id","multiochhelperjdbutton");
    $entry.hide();
    $entry.click(function() { mouse("sendToJD",links); });
    GM.xmlHttpRequest({
      method : 'GET',
      url: JDOWNLOADER+"flash/",
      onload: function (resp){
        if(resp.responseText.startsWith("JDownloader")) {
          $("#multiochhelperjdbutton").show();
        }
      }
    });
}

  if(!show_oneclick_FromHighlighScript_allLinks) {
    $entry = menuentry("Show generated links");
    $entry.click(function() { mouse("showLinks",links); });
  }

  $entry = menuentry("Show extracted links");
  $entry.click(function() {
    alert(links.join("\n"));
    if(parent.parent != window) {
      parent.parent.postMessage({ "iAm": "Unrestrict.li", "type": "alert", "str" : links.join("\n")}, '*');
    }
  });

  if(!show_oneclick_FromHighlighScript_allLinks && (links.length > 1 || links_beforeSelection !== false)) {
    $entry = menuentry("Select links");
    $entry.click(function() { linkSelector(links); });
  }

  if(!show_oneclick_FromHighlighScript_allLinks) {
    $entry = menuentry();
    var $a = $('<a style="color:white !important;">Open Website</a>').attr("href",getMultiOCHWebsiteURL(links)).appendTo($entry);
  }

  if(show_oneclick_FromHighlighScript_allLinks && show_oneclick_FromHighlighScript_allLinks_links) {
    $entry = $(menuentry("Use all links on page..."));
    $entry.click(function() {
      // Switch to all links instead of one
      var links = show_oneclick_FromHighlighScript_allLinks_links;
      show_oneclick_FromHighlighScript_allLinks_links = "";
      menu(links);
      $("#multiochhelper div:empty:not(:first)").remove();
      setStatus("All links!",1);
    });
  }


  if(show_oneclick_FromHighlighScript_selectedLinks && show_oneclick_FromHighlighScript_selectedLinks_links) {
    $entry = $(menuentry("Use selected links..."));
    $entry.click(function() {
      // Switch to selected links instead of one
      var links = show_oneclick_FromHighlighScript_selectedLinks_links;
      show_oneclick_FromHighlighScript_selectedLinks_links = "";
      menu(links);
      $("#multiochhelper div:empty:not(:first)").remove();
      setStatus("Using selected links!",1);
    });
  }



  if(!show_oneclick_FromHighlighScript_allLinks) {
    $entry = menuentry($('<span style="cursor:default; color:silver">Userscript menu</span>').click(function(ev) { ev.stopPropagation(); aboutMe(); })).css("cursor","default");
    $('<span style="cursor:pointer; color:White; border: 1px solid White; border-radius:3px; padding:0px; margin-left:20px; font-weight:bold ; " title="Close menu">X</span>').click(function() {$("#multiochhelper").remove();}).appendTo($entry);
  }
}


function loader() {
  // Show an animation, return function to remove the loader
  $("#multiochhelper_status_loader").parent().show();
  var $div = $('<div class="ochspinner"></div>').appendTo($("#multiochhelper_status_loader"));
  return function() {
    $div.remove();
  };
}

async function mouse(action,linkText) {
  // decide what to do after a mouse click
  var removeImg = loader();
  if(action == "download") {
    await download(linkText,removeImg);
  } else if(action == "showLinks") {
    showLinks(linkText,removeImg);
  } else if(action == "openWebsite") {
    openWebsite(linkText);
  } else if(action == "clipboard") {
    await clipboard(linkText,removeImg);
  } else if(action == "menu") {
    removeImg();
    menu(linkText);
  } else if(action == "sendToJD") {
    await sendToJD(linkText,removeImg);
  }




}

function menuentry(html) {
  var $li = $("<li>");
  if(html) {
    $li.append(html);
  }
  $li.appendTo("#multiochhelper ul");
  return $li;
}

function button(label) {
  addCSSHead('\
  #multiochhelper,#multiochhelper * {\
    font-family:Sans-Serif !important;\
    padding:0px; margin:0px;\
  }\
  #multiochhelper a, #multiochhelper a:link,#multiochhelper a:visited {\
    text-decoration:underline !important;\
    color:#3788e8 !important;\
    font-style:none !important;\
  }\
  #multiochhelper a:hover {\
    text-decoration:none !important;\
    color:#3788e8 !important;\
    font-style:none !important;\
  }\
  #multiochhelper ul li,#multiochhelper_status {\
    margin:1px 1px;\
    padding:1px 5px;\
    font-size:13px;\
    text-shadow:0 -1px 0 #333333;\
    color:White;\
    border:1px solid #8B3D92;\
    background-color:#B555C5;\
    background:radial-gradient(ellipse at center, #B555C5, #8B3D92);\
    list-style:none outside;\
  }\
  #multiochhelper div#multiochhelper_status_loader {\
    float:left;\
  }\
  #multiochhelper div#multiochhelper_status_text {\
    float:left;\
  }\
  #multiochhelper div#multiochhelper_status_clear {\
    clear:left;\
  }\
  #multiochhelper ul li {\
    cursor:pointer;\
  }\
  #multiochhelper ul li:hover {\
    background-color:#CC6BDD;\
    background:radial-gradient(ellipse at center, #CC6BDD, #8B3D92); \
  }\
  #multiochhelper select,#multiochhelper input {\
    border-radius:0;\
    box-shadow:none;\
    text-shadow:none;\
    border:none;\
    background:white;\
    color:black;\
  }\
  \
  '+SPINNERCSS);

  // div container
  var zi = getNextZIndex();
  var $div = $("<div>").appendTo(document.body);
  $div.attr("id","multiochhelper");
  $div.attr("style",'z-index:'+zi+'; position:fixed; background:#E6E6E6; color:Black; border:#B555C5 2px solid;border-radius:5px; padding:3px;');
  if(settings.position[0] == "top") {
    $div.css('top',"0%");
  } else {
    $div.css('bottom',"0%");
  }
  if(settings.position[1] == "left") {
    $div.css('left',"0%");
  } else {
    $div.css('right',"0%");
  }
  // Status
  var $status = $("<div>").appendTo($div).hide();
  $status.attr("id","multiochhelper_status");
  var $loader = $("<div>").appendTo($status);
  $loader.attr("id","multiochhelper_status_loader");
  var $statustext = $("<div>").appendTo($status);
  $statustext.attr("id","multiochhelper_status_text");
  var $statusclear = $("<div>").appendTo($status);
  $statusclear.attr("id","multiochhelper_status_clear");

  var $ul = $("<ul>").appendTo($div);

  // Button
  var $entry = menuentry(label?label:(multi[currentdebrid].name.charAt(0).toUpperCase() + multi[currentdebrid].name.slice(1)));

  $ul.append($entry);

  return $entry
}

// Update hoster status
if(await GM.getValue("setup",false)) {
  var updatinghosters = false;
  for(var key in multi) {
    if(multi[key].updateStatusURLpattern.test(document.location.href)) { //  usually in this is true in the iframe which is defined below
      multi[key].updateStatus();
      updatinghosters = true;
      break;
    }
  }
}

// Create iframes to check hoster status:
if(!updatinghosters && await GM.getValue("setup",false)) {
  var now = new Date();
  for(var key in multi) {
    if((now - multi[key].lastUpdate) > (settings.updateHosterStatusInterval*60*60*1000) ) {
      var $iframe = $("<iframe>").appendTo(document.body);
      $iframe.bind("load",function() {
        var frame = this;
        window.setTimeout(function() { $(frame).remove(); },3000);
      });
      $iframe.attr("src",multi[key].updateStatusURL);
    }
  }
}

// Setup
if(!updatinghosters) {
  if(! await GM.getValue("setup",false)) {
    await aboutMe();
    if(!confirm(s_myname+" Setup\n\nPlease take some time to configure "+s_myname+" and then save the settings!\n\nPress cancel to continue with the default configuration!")) {
      await GM.setValue("setup",true);
      alert(s_myname+"\n\nDefault settings will be used.");
      document.location.reload();
    }
  }
}

if(document.location.href.indexOf("nopremium.pl") != -1) {
  // nopremium.pl Website
  if(document.location.search.substring(0,6) == "?link:") {
    // Insert link on nopremium.pl
    $('#filesList').val(decodeURIComponent(document.location.search.substring(6)));
  }
} else if(document.location.href.indexOf("www.premiumize.me") != -1) {
  // premiumize.me Website
  if(document.location.search.substring(0,6) == "?link:") {
    // Insert link on nopremium.pl
    $("textarea").val(decodeURIComponent(document.location.search.substring(6)));
  }
} else if(document.location.href.indexOf("download.serienjunkies.org") != -1) {
  // Serienjunkies
  if(!document.querySelector(".g-recaptcha")) { // if not on captcha page
    var $b = button("Decrypt links");
    $b.click(function(ev) {
      var removeImg = loader();
      getSerienjunkiesLinks(removeImg);
    });
  }
} else if (document.location.href == "http://filecloud.io/download.html") {
  // filecloud.io
  if(unsafeWindow.__currentUrl) {
    show_oneclick_button = true;
    show_oneclick_link = decodeURIComponent(unsafeWindow.__currentUrl);
  }
} else if (document.location.href.indexOf("share-links.biz") != -1) {
  // share-links.biz folder
  if(!document.getElementById('captchamap') && document.getElementById('cf')) { // if not on captcha page
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getShareBizLinks(removeImg);
    });
  }
} else if (document.location.href.indexOf("linksave.in") != -1) {
  // linksave.in folder
  if(document.getElementById('dlc_link')) { // if not on captcha page
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getLinkSaveInLinks(removeImg);
    });
  }
} else if (document.location.href.indexOf("filecrypt.cc") != -1) {
  // filecrypt.cc folder
  if(document.location.href.indexOf("helper.html") != -1) { // if not on captcha page
    window.addEventListener('message',function filecryptmessage(event) {
      if (event.data && typeof(event.data) == 'object') {
        window.opener.postMessage({ "filecryptData": JSON.stringify(event.data)}, '*'); // Send message back to the opening window
        window.removeEventListener("message",filecryptmessage); // Prevent further messages from creating several buttons
      }
    }, false);
  } else if(document.location.href.indexOf("Container") != -1) { // if not on captcha page
    var $b = button("Please open the Click'n'Load Popup (several times)");
    $b.click(function() {
      $("#cnl_btn").click();
    });
    window.addEventListener('message',function filecryptmessage2(event) { // Receive messages from the popup
      if (event.data && typeof(event.data) == 'object' && "filecryptData" in event.data) {
        window.removeEventListener("message",filecryptmessage2); // Prevent further messages from creating several buttons
        setStatus("Decrypting",-1);
        var removeImg = loader();
        getFilecryptcc(JSON.parse(event.data.filecryptData), removeImg);
      }
    }, false);

  }

} else if (document.location.href.substring(7,19) == "linkcrypt.ws") {
  // linkcrypt.ws folder
  if(document.getElementById('container_check') || document.getElementById('ad_cont')) { // If containers are present
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getLinkcryptWsLinks(removeImg);
    });
  } else if(document.querySelector("form[id^=f]")) {
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getLinkcryptWsLinks2(removeImg);
    });
  } else {
    var $b = button("Select hoster first!");
    $b.click(function(ev) {});
  }
} else if (document.location.href.substring(7,16) == "ncrypt.in") {
  // nCrypt.in folder
  if(document.getElementById('main') && document.getElementById('main').innerHTML.indexOf("Securitycheck:") === -1) { // If not on captcha page
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getNCryptLinks(removeImg);
    });
  }
} else if (document.location.href.substring(7,16) == "relink.to") {
  // http://relink.to folder
  if(document.getElementsByClassName("cnl_form") || document.getElementsByClassName("dlc_button")) { // If not on captcha page
    var $b = button("Decrypt links (via dcrypt.it)");
    $b.click(function(ev) {
      var removeImg = loader();
      getRelinktoLinks(removeImg);
    });
  }
} else if (document.location.href.substring(7,20) == "www.relink.us") {
  // relink.us folder
  if(document.getElementById('container_tabs')) {
    var $b = button("Decrypt links");
    $b.click(function(ev) {
      var removeImg = loader();
      getRelinkUsLinks(removeImg);
    });
  }
} else if (document.location.href.substring(7,26) == "extreme-protect.net") {
  // extreme-protect.net folder
  if(document.querySelectorAll(".all_liens a").length > 0) {
    var $b = button("Decrypt links");
    $b.click(function(ev) {
      var removeImg = loader();
      getExtremeProtectLinks(removeImg);
    });
  }
} else if (document.location.href.substring(8,23) == "safelinking.net" || document.location.host == "linkshield.org") {
  // safelinking.net and linkshield.org folder
  if(!document.getElementById('captcha-wrapper')) {
    var $b = button("Decrypt links");
    $b.click(function(ev) {
      var removeImg = loader();
      getSafeLinkingNetLinks(removeImg);
    });
  }
} else if (document.location.href.indexOf(".firedrive.com/share/") != -1) {
  // firedrive.com folder
  show_oneclick_button = true;
  show_oneclick_link = "";
  $("a.pf_item_link:visible").each(function() {
    show_oneclick_link += decodeURIComponent(this.href)+"\n";
  });
} else if (document.location.href.indexOf("uploaded.net/folder/") != -1 || document.location.href.indexOf("uploaded.net/f/") != -1) {
  // Uploaded folder
  show_oneclick_button = true;
  show_oneclick_link = "";
  $("#fileList a.file").each(function() {
    show_oneclick_link += decodeURIComponent(this.href)+"\n";
  });
} else if (document.location.href.indexOf("rapidgator.net/folder/") != -1) {
  // Rapidgator folder
  show_oneclick_button = true;
  show_oneclick_link = "";
  $("#grid tbody a").each(function() {
    show_oneclick_link += decodeURIComponent(this.href)+"\n";
  });
} else if(document.location.href.substring(0,51) == "https://cvzi.github.io/Userscripts/index.html?link=") {
   // Iframe for a X-Frame-Options website
  show_oneclick_button = true;
  show_oneclick_link = decodeURIComponent(document.location.search.match(/link=(.+)/)[1]);
} else {
   // One click hoster website
  show_oneclick_button = true;
  show_oneclick_link = decodeURIComponent(document.location.href);
}

if(show_oneclick_button) {
  var mouseOverAvailable = true;

  // Split links into array
  var splitted = show_oneclick_link.split("\n");
  var show_oneclick_link = [];
  for(var i = 0; i < splitted.length; i++) {
    if($.trim(splitted[i])) {
      show_oneclick_link.push($.trim(splitted[i]));
    }
  }

  var $b = button();

  $b.bind("mousedown",
  function(ev) {
    mouseOverAvailable = false;
    if(ev.which === 3) { // Right click
      mouse(settings.rightClick,show_oneclick_link);
    }
    else if(ev.which === 2) { // Middle click
      mouse(settings.middleClick,show_oneclick_link);
    }
    else if(ev.which === 1) { // Left click {
      mouse(settings.leftClick,show_oneclick_link);
    }
  });
  if(settings.mouseOver != 'none') {
    var ti = false;
    $b.on({
      'mouseover': function() {
        if(!mouseOverAvailable)
          return;
        ti = setTimeout(function(){
          if(!mouseOverAvailable)
            return;
          mouseOverAvailable = false;
          mouse(settings.mouseOver,show_oneclick_link);
        }, settings.mouseOverDelay);
      },
      'mouseout' : function(){
        if(ti !== false) clearTimeout(ti);
      }
    });
  }
  // Prevent context menu on right click
  var preventDefault = function(e) { e.preventDefault();};
  if(settings.rightClick != 'none') {
    $b[0].addEventListener('contextmenu', preventDefault , false);
  }
}

// Handle messages from the highlight script
window.addEventListener("message", function(e){
  if(typeof e.data != "object" || ! ("iAm" in e.data) || e.data.iAm != "Unrestrict.li") {
    return;
  }

  switch(e.data.type) {
    case "alllinks":
      if(show_oneclick_FromHighlighScript_allLinks) {
        return;
      }
      show_oneclick_FromHighlighScript_allLinks = true;
      show_oneclick_FromHighlighScript_allLinks_loc = e.data.loc;
      show_oneclick_FromHighlighScript_allLinks_links = e.data.links.join("\n");
      if($("#multiochhelper ul li").length > 1) { // Menu already opened
        menu(show_oneclick_link);
      }
      break;
    case "selectedlinks":
      if(show_oneclick_FromHighlighScript_selectedLinks) {
        return;
      }
      show_oneclick_FromHighlighScript_selectedLinks = true;
      show_oneclick_FromHighlighScript_selectedLinks_loc = e.data.loc;
      show_oneclick_FromHighlighScript_selectedLinks_links = e.data.links.join("\n");
      if($("#multiochhelper ul li").length > 1) { // Menu already opened
        menu(show_oneclick_link);
      }
      break;
  }


}, true);




})();