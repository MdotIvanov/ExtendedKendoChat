var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.writeMsg = kendo.observable({
        source: [ "foo", "bar" ],
        newItemValue: "",
        add: function(e) {
            var val = this.get("message");
            if (val) {
                this.source.push(val);
            }
            
            e.preventDefault();
        },

        onClick: function(e) {
            alert(source);
        }
    });
}(app.viewmodels));