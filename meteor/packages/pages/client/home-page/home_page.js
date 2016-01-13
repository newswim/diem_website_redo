"use strict";
class HomePageTemplate extends BlazeComponent {
    onCreated() {
        var me = this;
        me.sliderImages = [
            {src: "img/slider_optimized/05_bar.jpg",           alt: "Simplify the complex",   slide: "12", annot: "........"},
            {src: "img/slider_optimized/03_boardroom.jpg",     alt: "Simplify the complex",   slide: "11", annot: "......"},
            {src: "img/slider_optimized/01_house.jpg",         alt: "Simplify the complex",   slide: "10", annot: "...."},
            {src: "img/slider_optimized/06_lounge.jpg",        alt: "Simplify the complex",   slide: "09", annot: ".."},
            {src: "img/slider_optimized/04_pub.jpg",           alt: "Simplify the complex",   slide: "08", annot: "Something"},
            {src: "img/slider_optimized/02_restaurant.jpg",    alt: "Simplify the complex",   slide: "07", annot: "Of"},
            {src: "img/slider_optimized/07_upscalebar.jpg",    alt: "Simplify the complex",   slide: "06", annot: "Explanation"}
        ]
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
