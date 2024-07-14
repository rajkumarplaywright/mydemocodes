const { on } = require("events");

exports.pomsub1=class pomsub1{

    constructor(page){
        this.page=page;
        this.Loginurl='https://testautomationpractice.blogspot.com/';
        this.name='(//*[@class="form-control"])[1]';
        this.email='//*[@id="email"]';
        this.phone='//*[@id="phone"]';
        this.address='//*[@id="textarea"]';
        this.gender='//*[@value="male"]';
        this.days='//*[@id="sunday"]';
        this.alertpopup='//*[@onclick="myFunctionAlert()"]';
    }

    async openURL() 
    {
        await this.page.goto(this.Loginurl)
    }

    async filldetails(name1,email1, phone1,address1){
        await this.page.locator(this.name).fill(name1);
        await this.page.locator(this.email).fill(email1)
        await this.page.locator(this.phone).fill(phone1)
        await this.page.locator(this.address).fill(address1)
    }

    async selectgender(){
        await this.page.locator(this.gender).click()
    }

    async dialoghandler(){
        this.page.on('dialog', async dialog=>{
            await dialog.accept()
        })
        await this.page.locator(this.alertpopup).click()
    }

    async screenshotaker(){
        await this.page.screenshot({path:'../../Pages/pomsubpages/sub1', fullpage:true})
    }
}