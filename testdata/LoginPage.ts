import { Page } from 'playwright';
export class LoginPage {
    private page: Page;
    private usernameInput = 'input[name="username"]';
    private passwordInput = 'input[name="password"]';
    private submitButton = 'button[type="submit"]';
    private errorMessage = '.error'; // Adjust selector based on actual error message element
    private logoutButton = 'button#logout'; // Adjust selector based on actual logout button
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }
    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }
    async verifySuccessfulLogin() {
        await this.page.waitForURL('/logged-in-successfully/');
        const successText = await this.page.locator('body').innerText();
        if (!successText.includes('Congratulations') && !successText.includes('successfully logged in')) {
            throw new Error('Login was not successful');
        }
        const isLogoutVisible = await this.page.isVisible(this.logoutButton);
        if (!isLogoutVisible) {
            throw new Error('Logout button is not displayed');
        }
    }
    async verifyErrorMessage(expectedMessage: string) {
        const errorText = await this.page.locator(this.errorMessage).innerText();
        if (errorText !== expectedMessage) {
            throw new Error(
                'Expected error message: "${expectedMessage}", but got: "${errorText}"'
            );
        }
    }
}