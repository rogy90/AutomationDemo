import { test, expect } from '@playwright/test';

test('Wikipedia test 1', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('william shakespeare');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('fakeLabel').click();
});
test('Wikipedia test 2', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('test');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('schließen').click();
});

test('Wikipedia test 3', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('space');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('schließen').click();
});

test('Wikipedia test 4', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('open');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('schließen').click();
});