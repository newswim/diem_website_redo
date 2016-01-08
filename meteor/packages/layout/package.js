Package.describe({
    name: 'diem:layout',
    version: '0.1.0',
    summary: '',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('peerlibrary:blaze-components');
    api.use('mquandalle:stylus');

    // New Meteor 1.2 sylus importing
    // api.addFiles([
    //     'client/index.styl'
    // ], 'client', {isImport: true});

    // api.addFiles(['client/index.styl'], 'client', {isImport: true});

    // Client imports
    api.addFiles([
        'main/border_layout.html',
        'main/border_layout.import.styl',
        'main/border_layout.js'
    ],'client');
});

Package.onTest(function(api) {
    // api.use('ecmascript');
    // api.use('tinytest');
    // api.use('diem:layouts');
    // api.addFiles('layouts-tests.js');
});
