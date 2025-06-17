import {test,expect} from '@playwright/test';

test("Verify Login with valid credentials", async({page})=>{


await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_user")
await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
await page.locator("//input[@type='submit']").click()
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


})

test("Verify Login with valid credentials and wrong expect", async({page})=>{


await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_user")
await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
await page.locator("//input[@type='submit']").click()
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventorys.html")


})

test("Verify Login with invalid username valid pasword", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_users ")
await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
await page.locator("//input[@type='submit']").click()
await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})

test("Verify Login with valid username invalid pasword", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_user")
await page.locator("//input[@placeholder='Password']").fill("secret_saucers")
await page.locator("//input[@type='submit']").click()
await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})

test("Verify Login with invalid username invalid pasword", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_users")
await page.locator("//input[@placeholder='Password']").fill("secret_sauces")
await page.locator("//input[@type='submit']").click()
await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})