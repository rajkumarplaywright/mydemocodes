import{test, expect} from '@playwright/test'
import { isArrayBufferView } from 'util/types'

test('frame', async({page})=> {

await page.goto('https://ui.vision/demo/webtest/frames/')

// await page.frameLocator('//frame[@src="frame_2.html"]').locator('(//input[@name="mytext2"])').fill('Rajkumar')

const framel=await page.frameLocator('//frame[@src="frame_2.html"]')

await framel.locator('(//input[@name="mytext2"])').fill('Shweta')

await page.waitForTimeout(3000)


})