Package.describe({
  name: 'diem:components',
  version: '0.1.0',
  summary: 'Reusable components for the Diem Digital website',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('peerlibrary:blaze-components');
    api.use('mquandalle:stylus');
    api.use('kadira:flow-router');
    api.use('kadira:blaze-layout');
    api.use('diem:layout');

    // Routes
    api.addFiles([
        'both/routes.js'
    ]);

    // api.addFiles(['client/index.styl'], 'client', {isImport: true});

    api.addFiles([

        'navbar/navbar_dark.html',
        'navbar/navbar_dark.import.styl',
        'navbar/navbar_red.html',
        'navbar/navbar_red.import.styl',
        'navbar/navbar.js'

    ],'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('diem:components');
  // api.addFiles('front-page-tests.js');
});
