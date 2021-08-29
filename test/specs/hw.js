const surfPage = require('../pageobjects/surf.page');

describe('My home work', () => {
  
    it('element displayed', async () => {
        await browser.url(`http://surfer.by.tilda.ws/`);

        await expect(surfPage.button).toBeDisplayed()
});   
it('have text', async () => {
        
    await expect(surfPage.lesson).toHaveText('ОБУЧЕНИЕ СЕРФИНГУ')   

}); 
});

