import {test,expect} from '@playwright/test';

test("Verify adding a job title ", async({page})=>{

    await page.goto("web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(process.env.orng_username);
    await page.locator("//input[@placeholder='Password']").fill(process.env.orng_password);
    await page.locator("//button[contains(.,'Login')]").click();
    page.on('dialog', async popup=> {await DOMPointReadOnly.accept});
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("(//a[@role='menuitem'])[1]").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("PWAutomation");
    await page.locator("//textarea[@placeholder='Type description here']").fill("Playwright Automation");
    await page.locator("//textarea[@placeholder='Add note']").fill("Need 2 to 4 years Playwright Automation tester");
    await page.locator("//textarea[@placeholder='Add note']").click();
 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");

    await page.close();

})