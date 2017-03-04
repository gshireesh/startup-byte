import { StartupBytePage } from './app.po';

describe('startup-byte App', () => {
  let page: StartupBytePage;

  beforeEach(() => {
    page = new StartupBytePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
