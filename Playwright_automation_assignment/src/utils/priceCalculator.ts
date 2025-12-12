export function computeSubtotal(products) {
  return products.reduce((sum, p) => sum + p.price * p.qty, 0);
}

export function computeTax(subtotal, rate = 0.10) {
  return subtotal * rate;
}

export function computeTotal(subtotal, tax, shipping = 0) {
  return subtotal + tax + shipping;
}