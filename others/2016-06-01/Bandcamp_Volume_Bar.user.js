// ==UserScript==
// @name         Bandcamp Volume Bar
// @version      1.4
// @description  adds a volume bar to Bandcamp
// @author       @Mranth0ny62
// @match        *://*.bandcamp.com/*
// @exclude      *://bandcamp.com/
// @grant        GM_addStyle
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.js
// ==/UserScript==


//Awesome Tags!
var iv = setInterval(function() {
  if($("audio")) {
    $("audio").attr("id", "audioSource");
    clearInterval(iv);
  }
},500);
$("<div class='volumeControl'></div>").insertAfter(".inline_player");
$(".volumeControl").append("<div class='speaker'></div>");
$(".volumeControl").append("<div class='volume'></div>");
$(".volume").append("<span class='volumeInner'></span>");

//CSS Time!
var percentage = 75;
var speakerurl = "http://i.imgur.com/hRWrLHJ.png";
var muteurl = "http://i.imgur.com/5mxvYNN.png";
var color = $("#pgBd").css("background-color");
var css = ".volumeControl { margin-bottom: 10px; }"                                            +
          ".speaker {"                                                                         +
            "position: relative;"                                                              +
            "width: 50px;"                                                                     +
            "height: 50px;"                                                                    +
            "background: url('"+speakerurl+"') rgba(2,2,2,.1) 50% 50% no-repeat;"              +
            "border-radius: 3px;"                                                              +
            "cursor: pointer;"                                                                 +
          "}"                                                                                  +
          ".volumeInner {"                                                                     +
            "position: absolute;"                                                              +
            "bottom: 0;"                                                                       +
            "width: "+percentage+"%;"                                                          +
            "height: 20px;"                                                                    +
            "background-color: #fff;"                                                          +
          "}"                                                                                  +
          ".volume {"                                                                          +
            "position: relative;"                                                              +
            "width: 80%;"                                                                      +
            "height: 20px;"                                                                    +
            "margin-top: -35px;"                                                               +
            "float: right;"                                                                    +
            "cursor: pointer;"                                                                 +
            "background-color: rgba(2,2,2,.1);"                                                +
            "border: 1px solid rgba(190,190,190,.5);"                                          ;

GM_addStyle(css);


//Sexy Script!

function changeVolume(e) {
	var clickPos = (e.pageX) - $(".volume").offset().left;
	var maxWidth = $(".volume").width();
	percentage = Math.floor(clickPos / maxWidth * 100);
    if(percentage > 100) {
        percentage = 100;
        $(".volumeInner").css("width", "100%");
    } else if(percentage < 0) {
        percentage = 0;
        $(".volumeInner").css("width", "0%");
    } else {
        $(".volumeInner").css("width", percentage + "%");
    }
    
  document.getElementById("audioSource").volume = percentage/100;
}


$(".volume").mousedown(function(e){
    changeVolume(e);
    $("body").css({
        "-webkit-user-select": "none",
        "-moz-user-select": "none"
    });
    
	$("body").mousemove(function(e){ changeVolume(e); });
});

$(document).mouseup(function(){
    $("body").off("mousemove");
    
    $("body").css({
        "-webkit-user-select": "all",
        "-moz-user-select": "all"
    });
});

var mute = false;
$(".speaker").click(function(){
    if(mute) {
        mute = false;
        $(".speaker").css("background-image", "url('"+speakerurl+"')");
        $(".volumeInner").css("width", percentage + "%");
        document.getElementById("audioSource").volume = percentage/100;
    } else {
        mute = true;
        $(".speaker").css("background-image", "url('"+muteurl+"')");
        document.getElementById("audioSource").volume = 0;
        $(".volumeInner").css("width", "0%");
    }
});