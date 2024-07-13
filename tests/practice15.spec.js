import { test, expect } from "@playwright/test";


test('autosuggestion', async({page})=> {
  await  page.goto('https://www.google.co.in/')

  await page.locator('//*[@title="Search"]').fill('Pune')

  const sugglist=await page.$$('//ul[@class="G43f7e"]//div[@class="eIPGRd"]')

  for(let list of sugglist){

    const allsugg = await list.textContent()
    console.log(allsugg)
  }

await page.waitForTimeout(3000)
})
