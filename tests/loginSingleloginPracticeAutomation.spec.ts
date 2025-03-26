// Importing 'test', 'expect', and 'Page' from Playwright's test library.
// - 'test' is the main function to define test blocks and test suites.
// - 'expect' provides assertion capabilities, for example: checking URL, text, or element visibility.
// - 'Page' is the type that represents a single browser tab or window.
import { test, expect, Page } from '@playwright/test';

//
// This 'describe' block groups all our login-related tests under the "App Actions Approach" label.
// Instead of using a separate Page Object class, we define helper functions directly in this file.
//
test.describe('Login Tests (App Actions Approach)', () => {

    //
    // Helper function to navigate the page to the login URL.
    // Takes a 'Page' object (a browser tab) and instructs it to go to the specified URL.
    //
    async function goToLoginPage(page: Page): Promise<void> {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    //
    // Helper function to perform the login action.
    // Fills the username and password fields, then clicks the submit button.
    // Parameters:
    // - 'page': the Playwright Page object for browser interactions.
    // - 'username': the username string to input.
    // - 'password': the password string to input.
    //
    async function login(page: Page, username: string, password: string): Promise<void> {
        // 'page.fill' replaces any existing text in the input field with the provided username.
        await page.fill('input[name="username"]', username);
        // Similarly, fills in the password field.
        await page.fill('input[name="password"]', password);
        // Clicks on the element with id="submit", effectively submitting the login form.
        await page.click('#submit');
    }   

    //
    // Test #1: Verifying a successful login scenario using valid credentials.
    //
    test('Successful login with valid credentials', async ({ page }) => {
        // Navigate to the login page before entering credentials.
        await goToLoginPage(page);

        // Call our login helper with a valid username and password.
        await login(page, 'student', 'Password123');

        // Check that we are redirected to the successful login URL.
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    });

    //
    // Test #2: Verifying an unsuccessful login attempt when a wrong password is provided.
    //
    test('Unsuccessful login with invalid password', async ({ page }) => {
        // Navigate to the login page again.
        await goToLoginPage(page);

        // Attempt to log in with a valid username but incorrect password.
        await login(page, 'student', 'WrongPassword');

        // Grab the error message element with the id '#error' and verify it is visible,
        // then check that it contains the expected text indicating an invalid password.
        const errorMessage = page.locator('#error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Your password is invalid!');
    });
});
