describe('Know your customer verification', ()=>{

    it('User Interface flow', ()=>{
        cy.visit("https://staging.brooi.com/?tab=login")

        //user credentials
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login
        cy.get("button.btn-primary").eq(0).click()

        //switch to hosting
        cy.get("a.post-btn").eq(0).click()

        //assertions 
        cy.url().should('eq', 'https://staging.brooi.com/hosting')

        //navigate 
        cy.get('button[type="button"]._hwa832y').click()
        cy.get('a.c1b2ssu5').eq(0).click()

        //navigate to KYC 
        cy.get('._1wwpygd2[data-v-869fced8]').click()

        //host your own 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()
    })


    it('KYC Private', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")

        //user credentials
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login
        cy.get("button.btn-primary").eq(0).click()

        //switch to hosting
        cy.get("a.post-btn").eq(0).click()

        //assertions 
        cy.url().should('eq', 'https://staging.brooi.com/hosting')

        //navigate 
        cy.get('button[type="button"]._hwa832y').click()
        cy.get('a.c1b2ssu5').eq(0).click()

        //navigate to KYC 
        cy.get('._1wwpygd2[data-v-869fced8]').click()

        //host your own 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()


        //private 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()
    })


    it('KYC Professional host', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")

        //user credentials
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login
        cy.get("button.btn-primary").eq(0).click()

        //switch to hosting
        cy.get("a.post-btn").eq(0).click()

        //assertions 
        cy.url().should('eq', 'https://staging.brooi.com/hosting')

        //navigate 
        cy.get('button[type="button"]._hwa832y').click()
        cy.get('a.c1b2ssu5').eq(0).click()

        //navigate to KYC 
        cy.get('._1wwpygd2[data-v-869fced8]').click()

        //host your own 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()


        //Professional host
        cy.get('div._1xsfdvpa').eq(1).click()
        cy.get('button.next-button').click()
    })


    it('KYC Confirm user identity', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")

        //user credentials
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login
        cy.get("button.btn-primary").eq(0).click()

        //switch to hosting
        cy.get("a.post-btn").eq(0).click()

        //assertions 
        cy.url().should('eq', 'https://staging.brooi.com/hosting')

        //navigate 
        cy.get('button[type="button"]._hwa832y').click()
        cy.get('a.c1b2ssu5').eq(0).click()

        //navigate to KYC 
        cy.get('._1wwpygd2[data-v-869fced8]').click()

        //host your own 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()


        //private 
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()

        //confirm your identity u
        cy.get("input.float-input").eq(0).type("Anthony")
        cy.get("input.float-input").eq(1).type("Udeh")
        cy.get('select.select').eq(1).click()//this line is not working yet network bad for now
        cy.get('option[value="NG"]').click()
        cy.get("input.float-input").eq(2).type("Chris Idowu street")
        cy.get("input.float-input").eq(3).type("36")
        cy.get("input.float-input").eq(4).type("Ejigbo")
        cy.get("input.float-input").eq(5).type("Lagos")
        cy.get("input.float-input").eq(6).type("10024")
        cy.get('._1iwku6d[data-v-065d024d]').eq(0).click()
        cy.get('option[value="4"]').click()
        cy.get('._1iwku6d[data-v-065d024d]').eq(1).click()
        cy.get('option[value="4"]').click()
        cy.get('._1iwku6d[data-v-065d024d]').eq(2).click()
        cy.get('option[value="2000]').click()
        cy.get('select.select').eq(2).click()//this line is not working yet network bad for now
        cy.get('option[value="NG"]').click()
        cy.get('select.select').eq(3).click()//this line is not working yet network bad for now
        cy.get('option[value="NG"]').click()
        cy.get("input.float-input").eq(7).type("1002474bf7ebs")

        cy.get('input[data-v-0d211e82]').click()

        cy.get('button[type="submit"].next-btn').click()
    })
})