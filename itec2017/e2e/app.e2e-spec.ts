import { Itec2017Page } from './app.po';

describe('itec2017 App', function() {
  let page: Itec2017Page;

  beforeEach(() => {
    page = new Itec2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
