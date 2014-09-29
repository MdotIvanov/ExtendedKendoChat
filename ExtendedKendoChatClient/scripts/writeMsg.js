var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {

    scope.WriteMsg = kendo.observable({
        text: 'write message here...'
        
    });
    //kendo.bind('login-view',scope.loginService);
}(app.viewmodels));//app.viewmodels