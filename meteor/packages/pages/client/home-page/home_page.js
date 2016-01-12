"use strict";
class HomePageComponent extends BlazeComponent {
    onCreated() {
        var me = this;
        me.transitionables = [
            {src: "img/transition/01Image01.jpg",     alt: "Simplify the complex",   slide: "12", annot: "........"},
            {src: "img/transition/02Image07.jpg",     alt: "Simplify the complex",   slide: "11", annot: "......"},
            {src: "img/transition/03Image07a.jpg",    alt: "Simplify the complex",   slide: "10", annot: "...."},
            {src: "img/transition/04Image07.jpg",     alt: "Simplify the complex",   slide: "09", annot: ".."},
            {src: "img/transition/05Image02.jpg",     alt: "Simplify the complex",   slide: "08", annot: "Something"},
            {src: "img/transition/06Image06.jpg",     alt: "Simplify the complex",   slide: "07", annot: "Of"},
            {src: "img/transition/07Image06a.jpg",    alt: "Simplify the complex",   slide: "06", annot: "Explanation"},
            {src: "img/transition/08Image06.jpg",     alt: "Simplify the complex",   slide: "05", annot: "Of"},
            {src: "img/transition/09Image04.jpg",     alt: "Simplify the complex",   slide: "04", annot: "Example"},
            {src: "img/transition/010Image03.jpg",    alt: "Simplify the complex",   slide: "03", annot: "Text"},
            {src: "img/transition/011Image03a.jpg",   alt: "Simplify the complex",   slide: "02", annot: "Some"},
            {src: "img/transition/012Image03.jpg",    alt: "Simplify the complex",   slide: "01", annot: "Here's"}
        ]
        // $('#carousel').slick({
        //     dots: true,
        //     infinite: true,
        //     speed: 300,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //     adaptiveHeight: true
        // });
    }

    template() {
        return 'HomePage';
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

HomePageComponent.register('HomePageComponent');
