import{test, expect} from '@playwright/test'

import{pomsub1} from '../../Pages/pomsubpages/sub1'

test('pom1', async({page})=> {

    const Osub = new pomsub1(page)

    await Osub.openURL()
    await Osub.filldetails('Rajkumar','abcd@gmail.com','9657547344','SATARA')
    await Osub.selectgender()
    await Osub.dialoghandler()
    // await Osub.screenshotaker()


    await page.screenshot({fullPage:true})
    await page.waitForTimeout(3000)
    // await page.pause()
})