import { FormProjectPage } from './app.po';

describe('form-project App', () => {
  let page: FormProjectPage;

  beforeEach(() => {
    page = new FormProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Let\'s start Coding!!');
  });
});
