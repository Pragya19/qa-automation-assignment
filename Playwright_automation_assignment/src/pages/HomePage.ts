import BasePage from './BasePage';

export default class HomePage extends BasePage {
  async search(name) {
    await this.page.fill('#small-searchterms', name);
    await this.page.click('input[value="Search"]');
  }
}