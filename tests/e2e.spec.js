import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

dotenv.config();

test('E2E: Login and Complete Purchase', async ({ page }) => {

  await page.goto(process.env.BASE_URL);

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

  await expect(
    page.getByRole('link', { name: process.env.USER_EMAIL })
  ).toBeVisible();

  await page.click('text=Books');

// Click first Add to cart button only
await page.locator('.product-item >> text=Add to cart').first().click();

// Wait for green notification
await page.locator('.bar-notification.success').waitFor();

// Navigate to cart explicitly
await page.goto(`${process.env.BASE_URL}/cart`);

// Wait for cart page to fully load
await page.waitForSelector('#termsofservice');

  // Checkout
  await cartPage.proceedToCheckout();
  await checkoutPage.completeCheckoutFlow();

  await expect(
    page.getByRole('heading', { name: 'Thank you' })
  ).toBeVisible();
});
