
import {test, expect}  from "@playwright/test";

const skills={
    skill1:{
        sname:"Communication",
        description:"excellent Communication"
    },
    skill2:{
        sname:"emailwriting",
        description:"excellent emailwriting"
    },
    skill3:{
        sname:"customerhandling",
        description:"excellent customerhandling"
    }
}
for (let skill in skills)
{

test(`verify adding skill -DDT-${skill}`, async ({page})=>{
await page.goto("web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(process.env.ORNG_USERNAME);
    await page.locator("//input[@placeholder='Password']").fill(process.env.ORNG_PASSWORD);
    await page.locator("//button[contains(.,'Login')]").click();
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Qualifications']").click();
    await page.locator("//ul[@role='menu']//li[1]").click();
    await page.locator("(//button[@type='button']//i)[3]").click();
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(skills[skill].sname);
    await page.locator("//textarea[@placeholder='Type description here']").fill(skills[skill].description);
    await page.locator("//button[@type='submit']").click();

    await page.close();

})
}