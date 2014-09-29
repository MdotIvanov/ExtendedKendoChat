var app = app || {};
app.viewmodels = app.viewmodels || {};

(function(scope){
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Friends'
        },
        schema: {
            model: {
                id: Everlive.idField,
                fields: {
                    'friendName': {
                        defaultValue: ''
                    }
                }
            }
        },
        serverFiltering: true,
        filter: { field: 'friendName', operator: 'contains', value: $('#tb-search').value }
    });
    
    scope.find = kendo.observable({
        friends : dataSource.get(),
        onSearch: function(){ dataSource.fetch(); }
    });
}(app.viewmodels))