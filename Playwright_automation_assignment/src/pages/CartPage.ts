import BasePage from './BasePage';

export default class CartPage extends BasePage {
  async open() { await this.page.click('a[href="/cart"]'); }

  async getSubtotal() {
    const text = await this.page.textContent('.cart-total .product-subtotal');
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }
}