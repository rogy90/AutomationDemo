// Importing 'Page' and 'Locator' types from the Playwright test library.
// 'Page' represents a single browser tab or window.
// 'Locator' is used to find and interact with elements on the page.
import { Page, Locator } from '@playwright/test';

//
// We export a class called "LoginPage" which follows the Page Object Model (POM).
// This class encapsulates all the details about the login page:
// - Locators for username, password, and submit button
// - Methods to navigate to the login page and perform the login action
//
export class LoginPage {
    // 'page' is a Playwright 'Page' object, which we'll store as a private class property.
    // 'usernameField', 'passwordField', and 'submitButton' are 'Locator' objects
    // that specifically target elements on the login page.
    private page: Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private submitButton: Locator;

    //
    // The constructor takes a Playwright 'Page' as its argument.
    // We initialize our locators by calling 'page.locator()' with appropriate CSS selectors.
    // This ensures each locator is tied to the current page instance.
    //
    constructor(page: Page) {
        this.page = page;
        // This locator points to an <input> element with the attribute name="username".
        this.usernameField = page.locator('input[name="username"]');
        // This locator points to an <input> element with the attribute name="password".
        this.passwordField = page.locator('#password');
        // This locator points to an element with the id="submit".
        this.submitButton = page.locator('#submit');
    }

    //
    // goToLoginPage()
    // ----------------
    // Navigates to the practice test login URL by using the 'goto' method of the Page object.
    // 'await' ensures the navigation is complete before the method returns.
    //
    async goToLoginPage(): Promise<void> {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    //
    // login(username: string, password: string)
    // -----------------------------------------
    // Fills in the username and password fields, then clicks the submit button.
    // - The 'await' keyword ensures each step is completed in sequence.
    // - 'fill()' replaces any existing text in the input field with the provided argument.
    // - 'click()' performs a click action on the submit button, effectively submitting the form.
    //
    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}