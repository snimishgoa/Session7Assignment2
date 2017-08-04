import { Session7Assignment2Page } from './app.po';

describe('session7-assignment2 App', () => {
  let page: Session7Assignment2Page;

  beforeEach(() => {
    page = new Session7Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
