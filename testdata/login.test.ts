import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { users } from './users';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Positive Login Test', async () => {
        const { username, password } = users[0]; // student
        await loginPage.login(username, password);
        await loginPage.verifySuccessfulLogin();
    });

    test('Negative Username Test', async () => {
        const { username, password } = users[1]; // incorrectUser
        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage('Your username is invalid!');
    });

    test('Negative Password Test', async () => {
        const { username, password } = users[2]; // student with incorrect password
        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage('Your password is invalid!');
    });
});
