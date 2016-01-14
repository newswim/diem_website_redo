"use strict";
class MainFooter extends BlazeComponent {
  template() {
    return 'MainFooter';
  }

  value() {
    // var doc = Values.findOne(this.data().id);
    // if (doc) return doc.value;
  }

  events() {
    return [{
    //   'change input': this.onChange,
    //   'click input': this.onClick
    }];
  }

  onChange(event) {
    // Values.upsert(this.data().id, {$set: {
    //   value: event.target.value
    // }});
  }

  onClick(event) {
    // $(event.target).select();
  }
}

MainFooter.register('MainFooter');
