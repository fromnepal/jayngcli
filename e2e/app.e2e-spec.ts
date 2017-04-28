import { JayngcliPage } from './app.po';

describe('jayngcli App', () => {
  let page: JayngcliPage;

  beforeEach(() => {
    page = new JayngcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
