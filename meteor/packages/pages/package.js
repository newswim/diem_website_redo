Package.describe({
    name: 'diem:pages',
    version: '0.1.0',
    summary: 'Content for pages of Diem Digital website.',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('peerlibrary:blaze-components');
    api.use('mquandalle:stylus');
    api.use('kadira:flow-router');
    api.use('ecmascript');
    api.use('diem:google-maps');

    // Client imports
    api.addFiles([
        'client/about-us/about_us.html',
        'client/about-us/about_us.styl',
        'client/about-us/about_us.js',
        'client/contact-us/contact_us.html',
        'client/contact-us/contact_us.styl',
        'client/contact-us/contact_us.js',
        'client/home-page/home_page.html',
        'client/home-page/home_page.styl',
        'client/home-page/home_page.js',
        'client/partners/partners.html',
        'client/partners/partners.styl',
        'client/partners/partners.js',
        'client/services/services.html',
        'client/services/services.styl',
        'client/services/services.js',
        'client/careers/careers.html',
        'client/careers/careers.styl',
        'client/careers/careers.js',
        'client/portfolio/portfolio.html',
        'client/portfolio/portfolio.styl',
        'client/portfolio/portfolio.js',
        'client/testimonials/testimonials.html',
        'client/testimonials/testimonials.styl',
        'client/testimonials/testimonials.js',

    ],'client');
});

Package.onTest(function(api) {
    // api.use('ecmascript');
    // api.use('tinytest');
    // api.use('diem:pages');
    // api.addFiles('layouts-tests.js');
});
