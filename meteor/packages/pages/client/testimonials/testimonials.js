"use strict";
class TestimonialsPage extends BlazeComponent {
    onCreated() {
        var me = this;

        me.testimonials = [
            {text: '“Diem Digital earned our respect and complete trust from the beginning. The creative and yet systematic approach to our complex project were met with a solution that is so easy to operate. Diem Digital continues to exceed our expectations as our business grows with each new location.”'},
            {text: '“Clean, efficient, and expert customer service long after our project was completed differentiates Diem Digital. Working at every level with their staff was fantastic and would highly recommend Diem Digital to anyone.”'},
            {text: '“Diem Digital did an outstanding job in solving our AV needs in our conference rooms. I am very pleased with the outcome. The flexibility and easy navigation adds so much to every meeting. We are very happy to have them as a part of our team.”'}
        ];
    }

    template() {
        return 'TestimonialsPage';
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

TestimonialsPage.register('TestimonialsPage');
