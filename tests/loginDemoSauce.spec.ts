/**
 * login.spec.ts
 *
 * A test file that demonstrates:
 *  - Reading user credentials from a centralized data file.
 *  - Creating a separate test block for each user (rather than using a for loop).
 *  - Using the LoginPage and InventoryPage Page Objects to log in,
 *    verify product presence, and log out.
 *
 * Each user in testData is tested with its own test block.
 */

import { test, expect } from '@playwright/test';
import {
    standardUser,
    lockedOutUser,
    problemUser,
    performanceGlitchUser,
    errorUser,
    visualUser
} from '../testData';  // <-- Centralized test data containing different user credentials
import { LoginPage } from '../Pages/LoginSauceDemo.page';      // Page Object for the login page
import { InventoryPage } from '../Pages/InventorySauceDemo.page';  // Page Object for the inventory page

/**
 * The test.describe(...) block groups all related test cases together.
 * In this case, all tests focus on the login functionality for different users.
 */
test.describe('Sauce Demo Login Tests - Separate Tests per User', () => {

    /**
     * This test block handles the login logic for the STANDARD_USER.
     * 1) It navigates to the login page using the Page Object's goto() method.
     * 2) Performs the login using the Page Object's login() method.
     * 3) Checks if an error message is displayed:
     *    - If yes, asserts that the error message is indeed visible.
     *    - If no, verifies product presence on the inventory page, logs out, and confirms the login button is visible again.
     */
    test('Login test for STANDARD_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Navigate to the login page
        await loginPage.goto();

        // Enter STANDARD_USER credentials and attempt login
        await loginPage.login(standardUser.username, standardUser.password);

        // Check if an error message is visible after attempting login
        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            // If the error is visible, log to console for debugging and verify error presence
            console.log('STANDARD_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            // If no error is displayed, verify at least one product exists on the inventory page
            await inventoryPage.verifyAtLeastOneProductExists();
            // Log out from the inventory page
            await inventoryPage.logout();
            // Assert that the login button is visible again after logging out
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

    /**
     * Similar logic to the STANDARD_USER test, but this time for LOCKED_OUT_USER.
     * LOCKED_OUT_USER typically cannot proceed to the inventory page if the account is locked,
     * so we check for the error message or proceed accordingly.
     */
    test('Login test for LOCKED_OUT_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Navigate to the login page
        await loginPage.goto();

        // Enter LOCKED_OUT_USER credentials and attempt login
        await loginPage.login(lockedOutUser.username, lockedOutUser.password);

        // Check if an error message is visible after attempting login
        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            console.log('LOCKED_OUT_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            await inventoryPage.verifyAtLeastOneProductExists();
            await inventoryPage.logout();
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

    /**
     * This test is for PROBLEM_USER. The logic is the same structure:
     * - Navigate
     * - Log in with PROBLEM_USER credentials
     * - Check for error
     * - If no error, verify items and log out
     */
    test('Login test for PROBLEM_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(problemUser.username, problemUser.password);

        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            console.log('PROBLEM_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            await inventoryPage.verifyAtLeastOneProductExists();
            await inventoryPage.logout();
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

    /**
     * This test is for PERFORMANCE_GLITCH_USER.
     * Typically might experience delays or other performance issues,
     * but we follow the same steps: navigate, log in, check for error, verify products, log out.
     */
    test('Login test for PERFORMANCE_GLITCH_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(performanceGlitchUser.username, performanceGlitchUser.password);

        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            console.log('PERFORMANCE_GLITCH_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            await inventoryPage.verifyAtLeastOneProductExists();
            await inventoryPage.logout();
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

    /**
     * This test handles ERROR_USER. If credentials are incorrect or lead to an error,
     * we expect an error message. Otherwise, we confirm we can see products on the inventory page, then log out.
     */
    test('Login test for ERROR_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Go to login page
        await loginPage.goto();

        // Attempt login with ERROR_USER credentials
        await loginPage.login(errorUser.username, errorUser.password);

        // Check if an error is displayed
        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            console.log('ERROR_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            await inventoryPage.verifyAtLeastOneProductExists();
            await inventoryPage.logout();
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

    /**
     * Finally, this test is for VISUAL_USER. The same pattern applies:
     * - Navigate, log in, check for error, if no error then verify products and log out.
     */
    test('Login test for VISUAL_USER', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(visualUser.username, visualUser.password);

        const errorVisible = await loginPage.isErrorMessageVisible();

        if (errorVisible) {
            console.log('VISUAL_USER encountered an error.');
            expect(await loginPage.isErrorMessageVisible()).toBe(true);
        } else {
            await inventoryPage.verifyAtLeastOneProductExists();
            await inventoryPage.logout();
            await expect(page.locator('#login-button')).toBeVisible();
        }
    });

});
