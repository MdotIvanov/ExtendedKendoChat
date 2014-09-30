
(function (scope) {

var app = scope.app = app || {};
    document.addEventListener('deviceready', function () {

        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat',
            initial: 'views/login.html'
        });

        window.everlive = new Everlive("vl0divDi3u14z9Cq");
        
	    var connectionInfo = new ConnectionApp();
	    connectionInfo.run();

    }, false);


}(window));