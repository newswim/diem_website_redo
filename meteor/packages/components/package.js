"use strict";

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

    api.addFiles([

        'client/navbar/navbar.html',
        'client/navbar/navbar.styl',
        'client/navbar/navbar.js',
        
        'client/bottom-nav/bottom_nav.html',
        'client/bottom-nav/bottom_nav.styl',
        'client/bottom-nav/bottom_nav.js',

        'client/footer/main_footer.html',
        'client/footer/main_footer.js',
        'client/footer/main_footer.styl',

        'client/navbar/mobile_nav.html',
        'client/navbar/mobile_nav.js',

        'client/navbar/desktop_nav.html',
        'client/navbar/desktop_nav.js',

    ],'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('diem:components');
  // api.addFiles('front-page-tests.js');
});
