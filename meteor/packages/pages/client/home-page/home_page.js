"use strict";
class HomePageTemplate extends BlazeComponent {
    onCreated() {
        var me = this;
        me.sliderImages = [
            {
                src: "img/slider_optimized/07_upscalebar.jpg",
                alt: "Cost-Effective",
                topic: "Cost-Effective",
                annot: ""
            },
            {
                src: "img/slider_optimized/05_bar.jpg",
                alt: "Professional",
                topic: "Professional",
                annot: ""
            },
            {
                src: "img/slider_optimized/01_house.jpg",
                alt: "Complexity Made Simple",
                topic: "Complexity Made Simple",
                annot: ""
            },
            {
                src: "img/slider_optimized/04_pub.jpg",
                alt: "Clean",
                topic: "Clean",
                annot: ""
            },
            {
                src: "img/slider_optimized/06_lounge.jpg",
                alt: "Efficient",
                topic: "Efficient",
                annot: ""
            },
            {
                src: "img/slider_optimized/03_boardroom.jpg",
                alt: "Integrated",
                topic: "Integrated",
                annot: ""
            },
            // {
            //     src: "img/slider_optimized/02_restaurant.jpg",
            //     alt: "",
            //     topic: "6",
            //     annot: ""
            // },
        ];
    }

    onRendered() {
        $('.diem-slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 400,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            fade: true,
            useCSS: true,
            useTransform: true,
            cssEase: 'linear',
            adaptiveHeight: true

            // autoplay:true,
            // autoplaySpeed:10000,
            // speed:900,
            // slidesToShow:1,
            // slidesToScroll:1,
            // pauseOnHover:false,
            // dots:true,
            // pauseOnDotsHover:true,
            // cssEase:'linear',
            // fade:true, // Disable This And Watch
            // draggable:false,
            // prevArrow:'<button class="PrevArrow"></button>',
            // nextArrow:'<button class="NextArrow"></button>',
        });
    }

    // template() {
    //     return 'HomePageTemplate';
    // }

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

HomePageTemplate.register('HomePageTemplate');
