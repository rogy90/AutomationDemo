import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('william shakespeare');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#firstHeading')).toContainText('William Shakespeare');

  await page.goto("https://www.google.com/");
});

test('test 2', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('william shakespeare');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#firstHeading')).toContainText('William Shakespeare');

  await page.goto("https://www.google.com/");
});

test('test 3', async ({ page }) => {
  await page.goto('https://www.google.com/');
});