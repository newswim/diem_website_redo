FlowRouter.route('/', {
  name: 'main',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'HomePageTemplate',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'AboutUsPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/contact', {
  name: 'contact',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'ContactPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/partners', {
  name: 'partners',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'PartnersPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/services', {
  name: 'services',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'ServicesPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/careers', {
  name: 'careers',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'CareersPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/portfolio', {
  name: 'portfolio',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'PortfolioPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/testimonials', {
  name: 'testimonials',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'TestimonialsPage',
      bottom: 'MainFooter'
    });
  }
});


FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {

    }
};
