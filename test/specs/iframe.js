describe('IFrame', () => {
    it('Working with iFrame', async() => {
        //Open browser
        await browser.url ('/iframe-sample/');
        await browser.pause(3000);

        //Switch to iFrame
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);
    
        // verify logo exist
        await expect($('#site-logo')).toExist();

        // switch to Parent frame
        await browser.switchToParentFrame();

        //verify page title
        const title = await $('h1.tg-page-header__title');
        await expect (title).toHaveText('IFrame Sample');


    });
});