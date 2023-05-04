describe('Know your customer verification', ()=>{

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

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

        cy.get('p.header-title').should('equ', 'Registered Person')

        cy.get('div._1gpt9bqj').should('equ', 'Are you registered as a business?')
        
        //learn more modal
        cy.get('div._15rpys7s').click()
        //close host verification modal
        cy.get('div.modal-close').clcik()

        //Non-professional host 
        cy.get('button.registered-business-btn').equ(0).click()

        cy.get('button.next-button').equ(0).click()

        //Confirm your identity

        cy.title().should('equ', 'brooi')
        cy.url().should('equ', 'https://staging.brooi.com/accounts/kyc/your-info')
        cy.get('p.header-title').should('equ', 'Your Info')
        cy.get('h3.h3-heading').should('equ', 'Confirm your identity')

        cy.get('span.desc-1').should('include', 'Make sure everything’s accurate so we can verify your account. Learn more')

        //Legal name
        cy.get('.desc-2').should('contain', 'Legal name')

        cy.get('span.gov-desc').should('equ', 'The name that appears on government IDs and official documents. If you’ve already uploaded a government ID, make sure the name you provide matches the name on the ID.')

        cy.get('input.float-input').equ(0).type('Anthony')
        cy.get('input.float-input').equ(1).type('Udeh')

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

        //confirm your identity user
        cy.get("input.float-input").eq(0).type("Anthony")
        cy.get("input.float-input").eq(1).type("Udeh")
        // cy.get(':nth-child(2) > ._4mmmhh > ._19nw8j1 > ._1djpu7h > #address-form-field-country_code').click()

        cy.get("select").select(1).invoke("val").should("eq", "lowestprice").click()
        //cy.get('option[value="NG"]').click()
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

    
    it('KYC validating back button', ()=>{

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
        cy.get('div._1xsfdvpa').eq(0).click()
        cy.get('button.next-button').click()



        //validating back button 
        cy.get('.svg-button[data-v-df1eed92]').click()
    })

})