// ==UserScript==
// @name        RequestQueue
// @namespace   cuzi
// @oujs:author cuzi
// @description A simple queue for GM_xmlhttpRequests or other async functions
// @homepageURL https://openuserjs.org/libs/cuzi/RequestQueue
// @version     2
// @grant       GM_xmlhttpRequest
// ==/UserScript==
"use strict";


function RequestQueue(maxParallel,maxTotal) {
  // A simple queue for GM_xmlhttpRequests or other async functions
  
  maxParallel = parseInt(maxParallel)>0?parseInt(maxParallel):1;
  maxTotal = parseInt(maxTotal)>0?parseInt(maxTotal):Number.POSITIVE_INFINITY;
  
  var index = 0; // incrementing, used for unique ids
  var finished = 0; // Number of finished requests
  var pending = [];
  var running = [];
  
  /*
  The internal request Object extended by add(req,fun,thisArg)
  {
    __fun : fun, defaults to GM_xmlhttpRequest
    __thisArg : thisArg, the this object for the above function
    __result : the return value of __fun is saved in this property
  
    __org_onload : The original event callbacks of req
    __org_onerror
    __org_onabort
    
    onload : The new event callbacks that wrap the above callbacks
    onerror
    onabort
    
    ... and all the original properties of the "req" object
  }
  
  */
  
  var fire = function() {
    // Check for pending requests and send them.
    if(pending.length > 0 && running.length < maxParallel && finished < maxTotal) {
      var req = pending.shift();
      running.push(req);
      req.__result = req.__fun.call(req.__thisArg,req);
      fire();
    }
  };
  
  var remove = function(id) {
    // Remove the request with id from the the running array
    for(var i = 0; i < running.length; i++) {
      if(running[i].id == id) {
        running.splice(i, 1);
        finished++;
        fire();
        break;
      }
    }
  };
  
  this.add = function(req,fun,thisArg) {
    // Schedule a request: add(req[, fun[, thisArg]])
    // fun:      defaults to GM_xmlhttpRequest
    // thisArg:  The value of this provided for the call to fun. Keep strict mode in mind!
    req.id = index++;
    
    req.__fun = typeof(fun) === 'function'?fun:function(a,b,c,d) { return GM_xmlhttpRequest(a,b,c,d);}; // Wrap GM_xmlhttpRequest to avoid security exception
    req.__thisArg = thisArg;

    // Wrap events that indicate that the request has finished
    req.__org_onload = req.onload;
    req.onload = function(response) {
     if(response.status === 0) { // This is true if a request was aborted. This seems to happen only sporadically 
        this.onabort(response);
        return;
      }
      remove(this.id);
      if(this.__org_onload) this.__org_onload(response);
      };
      
    req.__org_onerror = req.onerror;
    req.onerror = function(response) {
      remove(this.id);
      if(this.__org_onerror) this.__org_onerror(response);
      };
      
    req.__org_onabort = req.onabort;
    req.onabort = function(response) {
      remove(this.id);
      if(this.__org_onabort) this.__org_onabort(response);
      };
    
    pending.push(req);
    fire();
  };
  
  this.abortRunning = function() {
    // For any added function that was already run: result = thisArg.fun(req)
    // it will call result.abort()
    // For GM_xmlhttpRequest this will subsequently fire an onabort event
    for(var i = 0; i < running.length; i++) {
      if(running[i] && typeof running[i].__result === 'function') {
        running[i].__result.abort();
      }
    }
  };
  
  this.abortPending = function() {
    // Clear the pending list
    pending = [];
  };
  
  this.abort = function() {
    // Abort both running and pending requests
    this.abortPending();
    this.abortRunning();
  };
}
