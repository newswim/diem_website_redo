"use strict";
class PortfolioPage extends BlazeComponent {
    onCreated() {
        var me = this;

        me.portfolioImages = [
            {src: "img/portfolio/01TG1232.jpg",   alt: 'Custom installations'  },
            {src: "img/portfolio/02TG1232.jpg",   alt: 'Custom installations'  },
            {src: "img/portfolio/03TG1232.jpg",   alt: 'Custom installations'  },
            {src: "img/portfolio/04TG1232.jpg",   alt: 'Custom installations'  },
            {src: "img/portfolio/05TG1232.jpg",   alt: 'Custom installations'  }
        ];
    }

    /* events() {

    } */

    onDestroyed() {

    }

    onRendered() {
    }
}

PortfolioPage.register('PortfolioPage');
