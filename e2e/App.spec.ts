import { test, expect } from '@playwright/test';

// todo update path to be dynamic for prod
test('home page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:3000/');
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Head to Head' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*head-to-head/);
});
