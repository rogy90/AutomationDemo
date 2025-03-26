// Importing 'test' and 'expect' from Playwright Test.
// 'test' is the main function to define individual test cases or test suites,
// while 'expect' provides assertion methods (e.g., checking URL, text, visibility).
import { test, expect } from '@playwright/test';

// Importing the 'LoginPage' class from our Page Object file (login.page.ts).
// This class encapsulates all locators and methods needed for the login process.
import { LoginPage } from './loginPracticeAutomation.page';

//
// 'test.describe' allows us to group related tests together.
// In this case, we're grouping all tests relevant to "Login" functionality.
//
test.describe('Login Tests (POM Approach)', () => {
    //
    // 1) Testing a successful login scenario
    //
    test('Successful login with valid credentials', async ({ page }) => {
        // We create a new instance of the LoginPage class, passing the current 'page'.
        const loginPage = new LoginPage(page);

        // Step 1: Navigate to the login page.
        // The method 'goToLoginPage' is defined in the LoginPage class.
        await loginPage.goToLoginPage();

        // Step 2: Perform the login by providing valid credentials.
        // 'login' is another method in the LoginPage class that fills in the form and clicks 'submit'.
        await loginPage.login('student', 'Password123');

        // Step 3: Assert that the user is directed to the success page.
        // 'toHaveURL' checks if the browser URL matches our expected value.
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

        // (Optional) Verify that a specific success message is displayed on the page.
        // Here we look for an <h2> element and check if it contains the text "Logged In Successfully".
        const successHeading = page.locator('h2');
        await expect(successHeading).toHaveText('Logged In Successfully');
    });

    //
    // 2) Testing an unsuccessful login scenario due to an invalid password
    //
    test('Unsuccessful login with invalid password', async ({ page }) => {
        // Again, create a new instance of our Page Object class for the login page.
        const loginPage = new LoginPage(page);

        // Step 1: Navigate to the login page.
        await loginPage.goToLoginPage();

        // Step 2: Attempt to log in using a valid username but a wrong password.
        await loginPage.login('student', 'WrongPassword');

        // Step 3: Check that an error message is displayed.
        // We locate an element with the id "#error" and use assertions to confirm it's visible
        // and that it contains the expected text.
        const errorMessage = page.locator('#error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Your password is invalid!');
    });
});