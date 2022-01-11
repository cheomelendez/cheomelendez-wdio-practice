import NavComponent from './components/nav-comp';

class HomePage {
    open() {
        return browser.url('/');
    }

    get btnGetStarted() {
        return $('#get-started');
    }

    get imgLogo() {
        return $('.custom-logo');
    }

    get txtHeading() {
        return $('.elementor-widget-container h1')
    }
    get NavComponent(){
        return NavComponent;
    }
}
export default new HomePage();
