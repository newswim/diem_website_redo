if (Meteor.isClient) {
    // Template.HomePageTemplate.rendered = function() {
    //     $('#carousel').slick({
    //         dots: true,
    //         infinite: true,
    //         speed: 300,
    //         // slidesToShow: 1,
    //         // slidesToScroll: 1,
    //         fade: true,
    //         cssEase: 'linear',
    //         adaptiveHeight: true
    //     });
    // }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
