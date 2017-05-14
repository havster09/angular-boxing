import { Ng2BoxingPage } from './app.po';

describe('ng2-boxing App', () => {
  let page: Ng2BoxingPage;

  beforeEach(() => {
    page = new Ng2BoxingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
