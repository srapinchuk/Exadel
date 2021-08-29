const Page = require('./page');


class surfPage extends Page {

    get button () {
        return $('//*[@data-elem-id="1473846124811"]') }

    get lesson() {
        return $('.t388__title.t-section__title.t-title.t-title_md')
    }    

}

module.exports = new surfPage();

// const elem = $('.t388__title.t-section__title.t-title.t-title_md')