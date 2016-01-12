"use strict";
class NavBar extends BlazeComponent {
  template() {
    return 'NavBar';
  }

  // mixins() {
  //     // return [MobileNav];
  //   }

  value() {
    // var doc = Values.findOne(this.data().id);
    // if (doc) return doc.value;
  }

  events() {
    return [{
      // 'change input': this.onChange,
      'click .header-image': this.goHome
    }];
  }

  onChange(event) {
    // Values.upsert(this.data().id, {$set: {
    //   value: event.target.value
    // }});
  }

  goHome() {
      return FlowRouter.go( '/' );
  }

  onClick(event) {
    // $(event.target).select();
  }
}

NavBar.register('NavBar');
