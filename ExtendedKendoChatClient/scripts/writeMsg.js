var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {

    scope.WriteMsg = kendo.observable({
        clicked: function() {
            alert('aaasdaa');
        }
    });
    //kendo.bind('login-view',scope.loginService);
}(app.viewmodels));//app.viewmodels