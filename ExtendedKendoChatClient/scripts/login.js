
    var app  = app || {};
    app.viewmodels = app.viewmodels || {};
(function (scope) {

    scope.loginService = kendo.observable({
        username: '',
        pasword: '',
        onLogin : function () {
            var that = this,
                username = that.get('username'),
                password = that.get('password');
            console.log(username);

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () {}, "Login failed", 'OK');

                return;
            }
            window.everlive.Users.login(username, password)
                .then(function (data) { // success callback
                        navigator.notification.alert(JSON.stringify(data), function () {}, "Logged", 'OK');
                        console.log(data);
                    },
                    function (error) { // error callback
                        navigator.notification.alert(JSON.stringify(error), function () {}, "Login failed", 'OK');
                        console.log(error);
                    });

        },

        onRegister : function () {
            var that = this,
                username = that.get('username'),
                password = that.get('password');

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () {}, "Registration failed", 'OK');

                return;
            }

            window.everlive.Users.register(username, password, { // additional fields
                    DispayName: username,
                },
                function (data) {
                    navigator.notification.alert(JSON.stringify(data), function () {}, "Registered", 'OK');
                    console.log(data);
                },
                function (error) {
                    navigator.notification.alert(JSON.stringify(error), function () {}, "Registration failed", 'OK');
                    console.log(error);
                });
        },
        
    });
    
}(app.viewmodels));