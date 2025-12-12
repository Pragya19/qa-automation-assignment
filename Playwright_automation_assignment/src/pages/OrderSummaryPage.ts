import BasePage from './BasePage';

export default class OrderSummaryPage extends BasePage {
  async getOrderNumber() {
    return this.page.textContent('.order-number');
  }
}