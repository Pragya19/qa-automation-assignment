import { Page } from '@playwright/test';

export default class BasePage {
  constructor(public page: Page) {}

  async goto(path = '/') {
    const url = `https://demowebshop.tricentis.com${path}`;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`Navigating to ${url} (Attempt ${attempt})`);
        await this.page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 60000
        });
        return;
      } catch (err) {
        if (attempt === 3) throw err;
        await this.page.waitForTimeout(2000);
      }
    }
  }
}