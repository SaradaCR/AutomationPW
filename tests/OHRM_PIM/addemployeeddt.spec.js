import {test,expect} from '@playwright/test';

const Employees={

   employee1: {
               fName:"Sara1",
               mName:"s1m1",
               lName:"s1l1",
             //  eId:"sa22111",
              },
    employee2: {
               fName:"Sara2",
               mName:"s2m2",
               lName:"s2l2",
             //  eId:"sa22122",
              },

     employee3: {
               fName:"Sara3",
               mName:"s3m3",
               lName:"s3l3",
             //  eId:"sa22133",
              }         

}

for (let employee in Employees)
{
test(`Verify adding Employees -DDT- ${employee}`, async({page})=>{

    await page.goto("web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(process.env.ORNG_USERNAME);
    await page.locator("//input[@placeholder='Password']").fill(process.env.ORNG_PASSWORD);
    await page.locator("//button[contains(.,'Login')]").click();
    await page.locator("//span[text()='PIM']").click();

    await page.locator("//a[normalize-space(text())='Add Employee']").click();

    await page.locator("//input[@placeholder='First Name']").fill(Employees[employee].fName);
    await page.locator("//input[@placeholder='Middle Name']").fill(Employees[employee].mName);
    await page.locator("//input[@placeholder='Last Name']").fill(Employees[employee].lName);
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(Employees[employee].eId);
    await page.locator("//button[@type='submit']").click();
   // await expect(page.locator("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/288")).toBeVisible();
 
    await page.close();

})
}