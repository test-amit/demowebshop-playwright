import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { generateRandomUser } from '../utils/randomData.js';

dotenv.config();

test('Register new user with random email and login', async ({ page }) => {

  await page.goto(process.env.BASE_URL);

  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);

  const user = generateRandomUser();

  // Register
  await registerPage.navigate();
  await registerPage.registerUser(user);

  await expect(
    page.locator('.result')
  ).toHaveText('Your registration completed');

  // Logout
  await page.click('text=Log out');

  // Login with new user
  await loginPage.navigate();
  await loginPage.login(user.email, user.password);

  await expect(
    page.getByRole('link', { name: user.email })
  ).toBeVisible();
});