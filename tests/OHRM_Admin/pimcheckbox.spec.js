
import {test,expect} from '@playwright/test';

test("Verify adding a paygrade ", async({page})=>{

 await page.goto("web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(process.env.ORNG_USERNAME);
    await page.locator("//input[@placeholder='Password']").fill(process.env.ORNG_PASSWORD);
    await page.locator("//button[contains(.,'Login')]").click();
    await page.locator("//a[@class='oxd-main-menu-item active']").click();
    arr=['input[value="1"]','input[value="4"]','input[value="7"]','input[value="8"]'];
    for(let i=0;i< arr.length;i++)
    {
        await page.locator(arr(i)).check();
    }


})