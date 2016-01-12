FlowRouter.route('/', {
  name: 'main',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'HomePage',
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
  name: 'about',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'ContactPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/partners', {
  name: 'about',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'PartnersPage',
      bottom: 'MainFooter'
    });
  }
});

FlowRouter.route('/services', {
  name: 'about',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('MainLayout', {
      top: 'NavBar',
      main: 'ServicesPage',
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
