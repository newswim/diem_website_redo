FlowRouter.route('/main', {
  name: 'main',
  action: function (/*params, queryParams*/) {
    BlazeLayout.render('ColumnsLayoutComponent', {
    //   first: 'FirstComponent',
    //   second: 'SecondComponent',
    //   third: 'ThirdComponent'
    });
  }
});
