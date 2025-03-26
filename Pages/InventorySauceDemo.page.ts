/**
 * InventoryDemoSauce.page.ts
 *
 * Page Object for the inventory page (the product list) displayed after a successful login.
 * Contains selectors and actions related to verifying product existence and logging out.
 */

import { Page, expect } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    // Example product selector (there are multiple products, but we'll check any one):
    private firstProductName = '.inventory_item_name';

    // Selectors for the main menu and logout link:
    private menuButton = '#react-burger-menu-btn';
    private logoutLink = '#logout_sidebar_link';

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Verifies that at least one product is present on the inventory page.
     * This helps confirm that the user successfully logged in and
     * that the inventory page loaded.
     */
    async verifyAtLeastOneProductExists() {
        // Wait for the inventory container or a specific product to appear:
        await expect(this.page.locator(this.firstProductName).first()).toBeVisible();
    }

    /**
     * Logs the user out by clicking the burger menu and selecting logout.
     */
    async logout() {
        await this.page.click(this.menuButton);
        await this.page.click(this.logoutLink);
    }
}
