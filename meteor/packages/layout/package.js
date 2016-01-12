Package.describe({
    name: 'diem:layout',
    version: '0.1.0',
    summary: 'Layouts',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('peerlibrary:blaze-components');
    api.use('peerlibrary:blaze-layout-component');
    api.use('mquandalle:stylus');
    api.use('kadira:flow-router');
    api.use('ecmascript');
    // api.use('diem:components');
    // api.use('diem:pages');


    // New Meteor 1.2 sylus importing
    // api.addFiles([
    //     'client/index.styl'
    // ], 'client', {isImport: true});

    // Client imports
    api.addFiles([
        'border-layout/border_layout.html',
        'border-layout/border_layout.import.styl',
        'border-layout/border_layout.js',

        'main/main_layout.html',
        'main/main_layout.js',
        // TODO: figure out the performance costs of not calling .import
        // calling .import.styl prevents Meteor from processing the file independently
        'main/main_layout.styl',

        'both/routes.js'

    ],'client');

});

Package.onTest(function(api) {
    // api.use('ecmascript');
    // api.use('tinytest');
    // api.use('diem:layouts');
    // api.addFiles('layouts-tests.js');
});
