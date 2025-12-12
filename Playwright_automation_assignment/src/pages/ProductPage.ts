import BasePage from './BasePage';

export default class ProductPage extends BasePage {

  async getPrice() {
    const priceLocator = this.page.locator('.product-price, .prices');
    await priceLocator.first().waitFor();
    const text = await priceLocator.first().innerText();
    return parseFloat(text.replace(/[^0-9.]/g, ''));
  }

  async addToCart() {
    const selectors = [
      'button[id^="add-to-cart-button"]',
      '.product-box-add-to-cart-button',
      'input[value="Add to cart"]'
    ];

    for (const sel of selectors) {
      const btn = this.page.locator(sel).first();
      if (await btn.isVisible().catch(() => false)) {
        await btn.scrollIntoViewIfNeeded();
        await btn.click();
        return;
      }
    }

    throw new Error(`Add to Cart button not found on page: ${this.page.url()}`);
  }
}