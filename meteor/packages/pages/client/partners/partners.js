"use strict";
class PartnersPage extends BlazeComponent {
    onCreated() {
        var me = this;

        me.partners = [
            {src: "img/partners/audiocontrol.jpg",          alt: 'Custom installations'  },
            {src: "img/partners/biamp.png",                 alt: 'Custom installations'  },
            {src: "img/partners/boragear.jpg",              alt: 'Custom installations'  },
            {src: "img/partners/clearone.jpg",              alt: 'Custom installations'  },
            {src: "img/partners/control4.png",              alt: 'Custom installations'  },
            {src: "img/partners/denon.png",                 alt: 'Custom installations'  },
            {src: "img/partners/klipsch.png",               alt: 'Custom installations'  },
            {src: "img/partners/middleatlantic.png",        alt: 'Custom installations'  },
            {src: "img/partners/zeevee1.jpg",               alt: 'Custom installations'  }
        ];
    }

    template() {
        return 'PartnersPage';
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

PartnersPage.register('PartnersPage');
