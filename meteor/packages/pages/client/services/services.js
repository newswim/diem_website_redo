"use strict";
class ServicesPageComponent extends BlazeComponent {
    onRendered() {
        var me = this;

    }

    template() {
        return 'ServicesPage';
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

ServicesPageComponent.register('ServicesPageComponent');
