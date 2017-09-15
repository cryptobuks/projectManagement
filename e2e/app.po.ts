import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getListSize() {
    let list = element.all(by.css('app-root li'));
    return list.count();
  }
  
}
