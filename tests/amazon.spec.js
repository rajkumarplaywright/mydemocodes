import{test, expect} from '@playwright/test'

test('Amazon page', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.pause()
    await page.locator().all
})