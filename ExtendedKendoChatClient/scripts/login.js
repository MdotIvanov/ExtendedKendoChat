(function (global) {
    var app = global.app = global.app || {};

    window.loginService = kendo.observable({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();
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

            that.set("isLoggedIn", true);
        },

        onRegister: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

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
            that.set("isLoggedIn", true);
        },
        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });
})(window);