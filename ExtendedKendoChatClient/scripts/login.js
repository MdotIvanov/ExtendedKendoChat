var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.loginService = kendo.observable({
        connection: 'ddas',
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
                .then(function (data) {
                        console.log(data.result['access_token']);
                        navigator.notification.vibrate(1000);
                        navigator.navigate('#find');
                    },
                    function (error) {
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

            window.everlive.Users.register(username, password, {
                    DispayName: username,
                },
                function (data) {
                    console.log(data);
                    navigator.navigate('#find');
                },
                function (error) {
                    navigator.notification.alert(JSON.stringify(error), function () {}, "Registration failed", 'OK');
                    console.log(error);
                });
        },
        checkConnection: function() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            
            var connectionType = "<strong>Connection type:</strong> " + states[networkState];
            
            return connectionType;
        }

    });
}(app.viewmodels));