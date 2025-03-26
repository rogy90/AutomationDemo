/**
 * LoginSaucePage.ts
 *
 * Page Object for the Sauce Demo login page.
 * Contains selectors and actions related to logging in.
 *
 * Key principles of POM:
 *  - Keep selectors private to prevent duplication across tests.
 *  - Expose public methods that represent real user interactions.
 */

import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  // Define private selectors (using data-test, IDs, or CSS selectors):
  private usernameField = '#user-name';
  private passwordField = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the Sauce Demo login page.
   */
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  /**
   * Inputs the username and password, then clicks the login button.
   * @param username The username to enter.
   * @param password The password to enter.
   */
  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  /**
   * Checks if an error message is displayed after login attempt.
   * Useful for negative testing (invalid users).
   */
  async isErrorMessageVisible(): Promise<boolean> {
    return this.page.isVisible(this.errorMessage);
  }
}
