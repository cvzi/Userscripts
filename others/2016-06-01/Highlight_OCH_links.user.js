<!DOCTYPE html>
<html>
<head>
  <title>429 | Too Many Requests. Try again in a few. | OpenUserJS</title>
  <meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Too Many Requests. Try again in a few.">
<meta name="keywords" content="userscript, userscripts, user script, user scripts, user.js, repository, Greasemonkey, Greasemonkey Port, Scriptish, TamperMonkey, Violent monkey, JavaScript, add-ons, extensions, browser">
<link rel="shortcut icon" href="/images/favicon.ico" >

<!-- Open Search -->
<link href="/xml/opensearch-groups.xml" type="application/opensearchdescription+xml" rel="search" title="OpenUserJS Groups">
<link href="/xml/opensearch-libraries.xml" type="application/opensearchdescription+xml" rel="search" title="OpenUserJS Libraries">
<link href="/xml/opensearch-userscripts.xml" type="application/opensearchdescription+xml" rel="search" title="OpenUserJS Userscripts">
<link href="/xml/opensearch-users.xml" type="application/opensearchdescription+xml" rel="search" title="OpenUserJS Users">

<!-- CSS -->
<link rel="stylesheet" type="text/css" media="all" href='/redist/npm/font-awesome/css/font-awesome.min.css'>
<link rel="stylesheet" type="text/css" media="all" href='/redist/npm/octicons/octicons/octicons.css'>
<link rel="stylesheet" type="text/css" media="all" href="/less/bootstrap/oujs.css">
<link rel="stylesheet" type="text/css" media="all" href="/redist/npm/highlight.js/styles/github.css">
<link rel="stylesheet" type="text/css" media="all" href="/css/common.css">


<!-- Google Analytics -->
<script type="text/javascript" src="//www.google-analytics.com/analytics.js" async="async"></script>


  <style>
    .status-code {
      font-size: 10em;
    }
  </style>
</head>
<body>
  <nav role="navigation" class="navbar navbar-default navbar-static-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" data-toggle="collapse" data-target=".navbar-collapse-top" class="navbar-toggle"><i class="fa fa-bars"></i></button>
      <a href="/" class="navbar-brand" title="A Presentational Userscripts Repository">OpenUserJS<span class="mode"></span></a>
    </div>
    <div class="navbar-collapse navbar-collapse-top collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/" title="Userscripts"><span class="visible-xs-inline"><i class="fa fa-file-code-o"></i> </span>Userscripts</a></li>
        <li><a href="/?library=true" title="Libraries"><span class="visible-xs-inline"><i class="fa fa-file-excel-o"></i> </span>Libraries</a></li>
        <li><a href="/groups" title="Userscript Groups"><span class="visible-xs-inline"><i class="fa fa-tag"></i> </span>Groups</a></li>
        <li><a href="/forum"><span class="visible-xs-inline"><i class="fa fa-commenting"></i> </span>Discussions</a></li>
        <li><a href="/users"><span class="visible-xs-inline"><i class="fa fa-user"></i> </span>Users</a></li>
        
        
        
        <!-- <li><a href="#" class="disabled"><i class="fa fa-envelope-o"></i> 0<span class="visible-xs-inline"> Unread Messages</span></a></li> -->
        <li><a href="/users/cuzi" title="My profile">cuzi</a></li>
        <li><a href="/logout" title="Logout"><span class="visible-xs-inline">Logout</span><i class="fa fa-sign-out"></i></a></li>
        
        
      </ul>
    </div>
  </div>
</nav>
<div class="reminders">

<!--
  <div class="alert alert-info alert-dismissible small fade in" role="alert">
    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <p><i class="fa fa-fw fa-exclamation-triangle"></i> <b>REMINDER:</b> Don't miss out reading the <a class="alert-link" href="/">descriptive</a> announcement.</p>
  </div>
  -->

</div>


  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <h1 class="status-code text-center">429</h1>
            <p class="text-center">
            
            
              Too Many Requests. Try again in a few.
            
            </p>
            <p class="text-center"> <a href="javascript: void(0);" onclick="history.go(-1);"><i class="fa fa-arrow-circle-left"></i>Go Back</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
  <nav role="navigation" class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" data-toggle="collapse" data-target=".navbar-collapse-bottom" class="navbar-toggle" onclick="$('html, body').animate({scrollTop: $(document).height()}, 'slow')"><i class="fa fa-bars"></i></button>
        <a href="https://github.com/OpenUserJs" class="navbar-brand">&copy; 2013+ <span class="hidden-xs">OpenUserJS</span><span class="visible-xs-inline">OUJS</span> Group</a>
      </div>
      <div class="navbar-collapse navbar-collapse-bottom collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/about">About</a></li>
          <li><a href="/about/Terms-of-Service">Terms of Service</a></li>
          <li><a href="/about/Digital-Millenium-Copyright-Act" title="Digital Millennium Copyright Act">DMCA</a></li>
          <li><a href="/about/Privacy-Policy">Privacy Policy</a></li>
          <li><a href="https://github.com/OpenUserJs/OpenUserJS.org">Development</a></li>
          <li><a href="https://github.com/orgs/OpenUserJs/people">Collaborators</a></li>
        </ul>
      </div>
    </div>
  </nav>
</footer>

<!-- JS -->
<script type="text/javascript" charset="UTF-8" src="/redist/npm/jquery/dist/jquery.js"></script>
<script type="text/javascript" charset="UTF-8" src="/redist/npm/bootstrap/dist/js/bootstrap.js"></script>

<script type="text/javascript">
  (function () {

    var events = 'focus resize scroll';
    var handler = null;
    var didCallback = false;

    function callback(aEl) {
      if (!didCallback) {
        didCallback = true;

        setTimeout(function () {
          $('.reminders .alert .close').each(function () {
            this.click();
          });
        }, 7000);
      }
    }

    function isElementInViewport(aEl) {
  var rect = null;

  if (aEl instanceof jQuery) {
    aEl = aEl[0];
  }

  rect = aEl.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // or $(window).height()
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // or $(window).width()
  );
}


    function fireIfElementVisible(aEl, aCallback) {
      return function () {
        if (isElementInViewport(aEl)) {
          $(window).off(events, handler);

          aCallback(aEl);
        }
      }
    }

    handler = fireIfElementVisible($('.reminders'), callback);
    $(window).on(events, handler);

  })();
</script>



<!-- Google Analytics -->
<script type="text/javascript">
  (function () {

    var win = window;
    win['GoogleAnalyticsObject'] = 'ga';
    win['ga'] = win['ga'] || function () {
        (win['ga'].q = win['ga'].q || []).push(arguments);
    }

    win['ga'].l = 1 * new Date();

    ga('create', 'UA-59965387-1', 'auto');
    ga('send', 'pageview');

  })();
</script>



</body>
</html>
