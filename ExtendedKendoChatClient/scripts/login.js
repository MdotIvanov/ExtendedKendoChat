var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.loginService = kendo.observable({
        onLogin: function () {
            var that = this,
                username = that.get('username'),
                password = that.get('password');

            if (!username || !password) {
                navigator.notification.alert('Incorrect username or password!',
                    function () {}, "Login failed", 'OK');

                return;
            }

            window.everlive.Users.login(username, password)
                .then(function (data) { // success callback
                        //navigator.notification.alert(JSON.stringify(data), function () {}, "Logged", 'OK');
                        console.log(data);
                        navigator.navigate('#find');
                    },
                    function (error) { // error callback
                        //navigator.notification.alert(JSON.stringify(error), function () {}, "Login failed", 'OK');
                        console.log(error);
                    });

        },

        onRegister: function () {
            var that = this,
                username = that.get('username'),
                password = that.get('password');

            if (!username || !password) {
                navigator.notification.alert('Both fields are required!',
                    function () {}, "Registration failed", 'OK');

                return;
            }

            window.everlive.Users.register(username, password, { // additional fields
                    DispayName: username,
                },
                function (data) {
                    //navigator.notification.alert(JSON.stringify(data), function () {}, "Registered", 'OK');
                    console.log(data);
                    navigator.navigate('#find');
                },
                function (error) {
                    navigator.notification.alert(JSON.stringify(error), function () {}, "Registration failed", 'OK');
                    console.log(error);
                });
        }

    });
    //kendo.bind('login-view',scope.loginService);
}(app.viewmodels)); //app.viewmodels