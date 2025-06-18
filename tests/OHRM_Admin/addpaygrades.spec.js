import {test,expect} from '@playwright/test';

test("Verify adding a paygrade ", async({page})=>{

 await page.goto("web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(process.env.ORNG_USERNAME);
    await page.locator("//input[@placeholder='Password']").fill(process.env.ORNG_PASSWORD);
    await page.locator("//button[contains(.,'Login')]").click();
    page.on('dialog', async popup=> {await DOMPointReadOnly.accept});
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("(//ul[@class='oxd-dropdown-menu']//li)[2]").click();
    await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click();

    let randomNumber = Math.random();
    randomNumber=Math.floor(randomNumber);

    await page.locator("//label[normalize-space(text())='Name']/following::input").fill("Payscale"+randomNumber);

   if(await page.locator("//span[text()='Already exists']").isVisible)
   {
    randomNumber+=1
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill("Payscale"+randomNumber);
   }

    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/8");
    await page.locator("oxd-userdropdown-tab").click();
    await page.locator("//a[normalize-space(text())='Logout']").click();



})
