import ContactPage from '../pages/contact-page';
import * as faker from 'faker';

describe('Exercise 1 - Contact', () => {
    it('Fill out a contact form, click on submit, and assert a success message', async() => {
        //await browser.url('/contact');
        await ContactPage.open();
        
        //await ContactPage.submitForm('Jose','email@jose.com', '1234567890', 'testing message');
        await ContactPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraph(2));

        //Printing elements out
        //console.log(await $('button[type=submit]'));
        await ContactPage.btnSubmit.click();
        // DEBUGGING CODE
        //await browser.debug();

        const confirmation = await ContactPage.alertSuccess;
        await expect(confirmation).toHaveTextContaining('We will be in touch ');
    });
});