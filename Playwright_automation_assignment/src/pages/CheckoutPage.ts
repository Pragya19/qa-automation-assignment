import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  async fillBilling(data) {
    await this.page.fill('#BillingNewAddress_FirstName', data.firstName);
    await this.page.fill('#BillingNewAddress_LastName', data.lastName);
    await this.page.fill('#BillingNewAddress_Email', data.email);
    await this.page.fill('#BillingNewAddress_City', data.city);
    await this.page.fill('#BillingNewAddress_Address1', data.address);
    await this.page.fill('#BillingNewAddress_ZipPostalCode', data.zip);
    await this.page.fill('#BillingNewAddress_PhoneNumber', data.phone);
    await this.page.click('button[onclick*="Billing.save"]');
  }
}