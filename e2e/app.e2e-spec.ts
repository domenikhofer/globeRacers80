import { GlobeRacers80Page } from './app.po';

describe('globe-racers80 App', () => {
  let page: GlobeRacers80Page;

  beforeEach(() => {
    page = new GlobeRacers80Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
