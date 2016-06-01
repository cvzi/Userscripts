// ==UserScript==
// @name        oujs - Issues in profile 
// @description Show latest issues in the list of scripts in a profile on openuserjs.org. Fetched from the last 25 issues from https://openuserjs.org/issues
// @namespace   cuzi
// @oujs:author cuzi
// @version     1
// @license     GNUGPL
// @include     /^https:\/\/openuserjs\.org\/users\/.+\/scripts.*/
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {  
'use strict';

function nextIssue(ev) {
  ev.stopPropagation();
  
  // Cycle through issues. Make next 5 <td> cells visible, hide the rest
  
  var tr = this.parentNode.parentNode.parentNode;
  var tdsHidden = tr.querySelectorAll("td.issueVisible ~ td.issueHidden");
  var tdsVisible = tr.querySelectorAll("td.issueVisible");
  if(tdsHidden.length === 0) {
    tdsHidden = tr.querySelectorAll("td.issueHidden");
  }
  if(tdsHidden.length === 0) {
    this.style.color = "#e74c3c";
    this.setAttribute("title", "Only one issue available");
    return;
  }
  for(let i = 0; i < 5; i++) {
    tdsHidden[i].style.display = 'table-cell';
    tdsHidden[i].setAttribute("class","issueVisible");
  }
  for(let i = 0; i < tdsVisible.length; i++) {
    tdsVisible[i].style.display = 'none';
    tdsVisible[i].setAttribute("class","issueHidden");
  }
}

function showIssues() {
  // Find unique URI of all scripts on this profile   
  var myscripts = {};
  document.querySelector("table.table thead tr").innerHTML += '<th></th><th class="text-center">Topic</th><th class="text-center td-fit">Users</th><th class="text-center td-fit">Replies</th><th class="text-center td-fit">Created</th><th class="text-center td-fit">Updated</th>';
  for each(var a in document.querySelectorAll("table.table tbody .tr-link-a")) { if(a instanceof Node) {
    var url = a.href.match(/(\/scripts\/.+\/.+)/);
      if(url && url[1]) {
        myscripts[url[1]] = { node: a.parentNode.parentNode, issueCounter: 0, naviTd : null};
      }
  } }
  // Get last 25 issues
  GM_xmlhttpRequest({
    url: "https://openuserjs.org/issues",
    method: "GET",
    onload: function (response) {
      var newDoc = document.implementation.createHTMLDocument();
      newDoc.documentElement.innerHTML = response.responseText;
      for each(var a in newDoc.querySelectorAll("table.table tbody tr td:nth-child(2) a")) { if(a instanceof Node) {
        var url = a.href.match(/(\/scripts\/.+\/.+)\/issues/);
        if(url && url[1] in myscripts) {
          var script = url[1];
          var i = 0;
          
          if(myscripts[script].issueCounter === 0) {
            // Add navigation arrow
            var tdn = document.createElement("td");
            myscripts[script].naviTd = tdn;
            tdn.innerHTML = "&#9660;";
            tdn.setAttribute("title", "Next issue");
            tdn.addEventListener("click", nextIssue);
            myscripts[script].node.appendChild(tdn);
          }
          
          // Append table columns from issues to the table
          for each(var td in a.parentNode.parentNode.parentNode.querySelectorAll("td")) {
            if(i++ != 1 && td instanceof Node) {
              if(myscripts[script].issueCounter > 0) { // Hide all issues except first one
                td.style.display = 'none';
                td.setAttribute("class","issueHidden");
              } else {
                td.setAttribute("class","issueVisible");
              }
              myscripts[script].node.appendChild(td);
            }
          }
          myscripts[script].issueCounter++;
        }
      } }
      // Remove navigation arrow if there's only one issue
      for each(let script in myscripts) {
        if(script.issueCounter > 0) {
          if(script.issueCounter == 1) {
            script.naviTd.innerHTML = script.issueCounter;
            tdn.removeEventListener("click", nextIssue);
          } else {
            script.naviTd.innerHTML += " " + script.issueCounter;
          }
        }
      }
    }
  });
}

showIssues();

})();