class ContactPage {
    
    open(){
        return browser.url('/contact');
    }

    get inputName(){
        return $('.contact-name input');
    }
    get inputPhone(){
        return  $('.contact-phone input');
    }
    get inputEmail(){
        return $('.contact-email input');
    }
    get txtAreaMessage(){
        return $('.contact-message textArea');
    }

    get btnSubmit(){
        return $('button[type=submit]');
    }

    get alertSuccess(){
        return $("[role='alert']");
    }

    async submitForm(name, email, phone, message){
        await this.inputName.addValue(name);
        await this.inputEmail.addValue(email);
        await this.inputPhone.addValue(phone);
        await this.txtAreaMessage.addValue(message);
    }
}

export default new ContactPage();