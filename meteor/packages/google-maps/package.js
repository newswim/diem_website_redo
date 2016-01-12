Package.describe({
  name: 'diem:google-maps',
  version: '0.1.0',
  summary: 'Show the location for and directions to Diem Digital',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.use('mquandalle:stylus');
    api.use('peerlibrary:blaze-components');
    api.use('kadira:flow-router');

    api.addFiles([
        'client/map-template/map_template.html',
        'client/map-template/map_template.styl',
        'client/map-template/map_template.js'
    ],'client');

});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('diem:google-maps');
    api.addFiles('google-maps-tests.js');
});
