import { HeroesFirebasePage } from './app.po';

describe('heroes-firebase App', () => {
  let page: HeroesFirebasePage;

  beforeEach(() => {
    page = new HeroesFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
