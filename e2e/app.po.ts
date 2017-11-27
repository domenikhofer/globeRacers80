import { browser, by, element } from 'protractor';

export class GlobeRacers80Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-login .login-title')).getText();
  }
}
