import{ test, expect } from '@playwright/test';

test('has title',async({ page })=>{
    await page.goto('https://playwright.dev/');
    let element = page.locator("Scasc");

    // Expect a tiltle "to contain" a substring.
    await expect(page).toHaveTitle(/playwright/);
});