var app = app || {};
app.viewmodels = app.viewmodels || {};

(function(scope){
    scope.find = kendo.observable({
        somevalue: 'some value',
    });
}(app.viewmodels))