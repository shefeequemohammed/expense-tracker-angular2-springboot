import { DebttrackerPage } from './app.po';

describe('debttracker App', () => {
  let page: DebttrackerPage;

  beforeEach(() => {
    page = new DebttrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
