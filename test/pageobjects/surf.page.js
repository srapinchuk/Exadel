const Page = require('./page');


class surfPage extends Page {

    get button () {
        return $('//*[@data-elem-id="1473846124811"]') }

}

module.exports = new surfPage();

