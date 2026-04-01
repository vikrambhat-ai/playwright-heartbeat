import { test, expect } from '@playwright/test';

test('heartbeat: login page loads', async ({ page }) => {
  await page.goto('https://delightful-sand-0e9f70500.2.azurestaticapps.net/login');

  // Check page title
  await expect(page).toHaveTitle(/iSteer Heartbeat/);

  // Target inputs separately
  const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
  
  // Target the Sign In button specifically
  const loginBtn = page.locator('button.login-btn'); 
  // OR: const loginBtn = page.getByRole('button', { name: '🚀Sign In' });

  // Assertions
  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginBtn).toBeVisible();

  console.log('✅ Heartbeat working - login page is up');
});