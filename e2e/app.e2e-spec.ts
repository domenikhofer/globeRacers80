import { GlobeRacers80Page } from './app.po';
import { browser, by, element } from 'protractor';


describe('globe-racers80 App', () => {
  let page: GlobeRacers80Page;
  const startbtn = element(by.css('.start-container button.start_btn'));
  const car = element(by.css('.car'));
  const upgradeIcon = element(by.css('img.upgrade-icon'));
  const upgradeTitle = element(by.css('span.upgrade-title'));
  const upgradebtn = element(by.css('button.upgrade-btn'));
  const logout = element(by.css('div.username.logout'));
  const speedPerClick = element(by.css('div.meterPerClick'));

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new GlobeRacers80Page();
  });

  it('should display login title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('LOGIN');
  });

  it('should be able to login a user', () => {
    const newUsername = element(
      by.css('input[name=username]'));
    newUsername.sendKeys('new');

    const newUserPW = element(
      by.css('input[type=password]'));
    newUserPW.sendKeys('admin');

    const newUserSubmitButton = element(
      by.css('button.login-btn'));
    newUserSubmitButton.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/game');
  });

  /******** REGISTER
  it('should link to register, when register-link is clicked', () => {
    const registerLink = element(by.css('.register-link'));
    registerLink.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/register');
  });

  it('should be able to register a new user', () => {
    const newUsername = element(
      by.css('input[name=username]'));
    newUsername.sendKeys('121');

    const newUserPW = element(
      by.css('input[type=password]'));
    newUserPW.sendKeys('123456');

    const newUserSubmitButton = element(
      by.css('button.register-btn'));
    newUserSubmitButton.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/game');
  });

  it('should set the new user in localStorage', () => {
    const value = browser.executeScript("return window.localStorage.getItem('globeRacers80User');");
    expect(value).toEqual('"121"');
  });
****/

   it('should show first achievement on click', () => {
     startbtn.click();
     car.click();
     const achievement = element(by.css('td.achievement'));
     expect(achievement.getText()).toEqual('You started your journey!');
   });

  it('should show first upgrade after 20 clicks', () => {
    for (let i = 0; i < 21; i++) {
      car.click();
    }
    upgradeIcon.click();
    expect(upgradeTitle.getText()).toEqual('Protein Shake');
  });

  it('should upgrade when clicking on upgrade', () => {
    upgradeIcon.click();
    upgradebtn.click();
    car.click();
    expect(speedPerClick.getText()).toEqual('2m / Click');
  });

  it('should logout user when clicking on logout link', () => {
    logout.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
  });

});
