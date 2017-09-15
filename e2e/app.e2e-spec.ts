import { AppPage } from './app.po';

describe('pm-front-end-www App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should list count', () => {
    page.navigateTo();
    expect(page.getListSize()).toBe(3);
  });


});
