import { test, expect } from '@playwright/test';
import HomePage from '../../src/pages/HomePage';
import ProductPage from '../../src/pages/ProductPage';
import CartPage from '../../src/pages/CartPage';
import CheckoutPage from '../../src/pages/CheckoutPage';
import OrderSummaryPage from '../../src/pages/OrderSummaryPage';
import { loadJSON } from '../../src/utils/dataLoader';
import { computeSubtotal, computeTax, computeTotal } from '../../src/utils/priceCalculator';

test('Place multi-product order and validate totals', async ({ page }) => {
  const data = loadJSON('test-data/products.json').order;

  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const summary = new OrderSummaryPage(page);

  const collectedPrices = [];

  for (const item of data.products) {
    await home.goto('/');
    await home.search(item.name);

    await page.locator('.product-item a').first().click();
    const price = await product.getPrice();
    collectedPrices.push({ price, qty: item.qty });

    await product.addToCart();
  }

  await cart.open();

  // UI subtotal
  const subtotalUI = await cart.getSubtotal();

  // Expected values
  const subtotalExpected = computeSubtotal(collectedPrices);
  const taxExpected = computeTax(subtotalExpected);
  const totalExpected = computeTotal(subtotalExpected, taxExpected);

  // UI values
  const taxText = await page.locator('.tax-value').innerText();
  const totalText = await page.locator('.order-total').innerText();

  const taxNumber = parseFloat(taxText.replace(/[^0-9.]/g, ''));
  const totalNumber = parseFloat(totalText.replace(/[^0-9.]/g, ''));

  // Validations
  expect(subtotalUI).toBeCloseTo(subtotalExpected, 1);
  expect(taxNumber).toBeCloseTo(taxExpected, 1);
  expect(totalNumber).toBeCloseTo(totalExpected, 1);

  await page.click('button[name="checkout"]');
  await checkout.fillBilling(data.billing);

  const orderNumber = await summary.getOrderNumber();
  expect(orderNumber).toContain('Order');
});