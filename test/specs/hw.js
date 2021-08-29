const surfPage = require('../pageobjects/surf.page');

describe('My home work', () => {
  
    it('element displayed', async () => {
        await browser.url(`http://surfer.by.tilda.ws/`);

        await expect(surfPage.button).toBeDisplayed()
});   
it('have text', async () => {
        
    const elem = $('.t388__title t-section__title t-title t-title_md')
    expect(elem).toHaveText('ОБУЧЕНИЕ СЕРФИНГУ')   

}); 
});
