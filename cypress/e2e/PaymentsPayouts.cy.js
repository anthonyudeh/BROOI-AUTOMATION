describe('Payments and Payouts automation', () => {

    it('Positive test', () => {

        //visit login page
        cy.visit('https://staging.brooi.com/?tab=login')

        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login 
        cy.get("button.btn-primary").click()

        //navigation humbuger menu 
        cy.get("button.__profile-btn").click()

        //user account
        cy.get("div.m1tb1yiu").eq(4).click()

        //navigate to payments & payouts
        cy.get("div._15wuypg").eq(2).click()

        //logo assertion
        cy.get('img[alt="Logo"].brooi-logo').should('be.visible')

        //url assertion
        cy.url().should('eq', 'https://staging.brooi.com/account-settings/payments/payment-methods')

        //add payments method validation
        cy.get('button.manage-btn').click()

        //user card details 
        cy.get('input[type="text"].float-input').eq(0).type('0000 0000 0000 0000 03')
        cy.get('input[type="text"].float-input').eq(1).type('12/2025')
        cy.get('input[type="text"].float-input').eq(2).type('978')
        cy.get('input[type="text"].float-input').eq(3).type('Chris Idowu Street')
        cy.get('input[type="text"].float-input').eq(4).type('36')
        cy.get('input[type="text"].float-input').eq(0).type('Ejigbo')
        cy.get('input[type="text"].float-input').eq(0).type('Lagos')
        cy.get('input[type="text"].float-input').eq(0).type('10024')
        cy.get('select.location-select-country').click()
        cy.get('option[value="NG"]').click()

        //validating Submit input 

        cy.get('button[type="button"]._1ku51f04').click()

    })



    it('Validating cancel button for payment method validation', () => {

        //visit login page
        cy.visit('https://staging.brooi.com/?tab=login')

        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login 
        cy.get("button.btn-primary").click()

        //navigation humbuger menu 
        cy.get("button.__profile-btn").click()

        //user account
        cy.get("div.m1tb1yiu").eq(4).click()

        //navigate to payments & payouts
        cy.get("div._15wuypg").eq(2).click()

        //logo assertion
        cy.get('img[alt="Logo"].brooi-logo').should('be.visible')

        //url assertion
        cy.url().should('eq', 'https://staging.brooi.com/account-settings/payments/payment-methods')

        //add payments method validation
        cy.get('button.manage-btn').click()


        //user card details 
        cy.get('input[type="text"].float-input').eq(0).type('0000 0000 0000 0000 03')
        cy.get('input[type="text"].float-input').eq(1).type('12/2025')
        cy.get('input[type="text"].float-input').eq(2).type('978')

        //cancel button
        cy.get('button[type="button"]._15rpys7s').click()

    })

    it('Validation for manage payment',()=>{

         //visit login page
         cy.visit('https://staging.brooi.com/?tab=login')

         cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
         cy.get("input.float-input").eq(1).type("Ghostfire2000#")
 
         //login 
         cy.get("button.btn-primary").click()
 
         //navigation humbuger menu 
         cy.get("button.__profile-btn").click()
 
         //user account
         cy.get("div.m1tb1yiu").eq(4).click()
 
         //navigate to payments & payouts
         cy.get("div._15wuypg").eq(2).click()
 
         //logo assertion
         cy.get('img[alt="Logo"].brooi-logo').should('be.visible')
 
         //url assertion
         cy.url().should('eq', 'https://staging.brooi.com/account-settings/payments/payment-methods')


         //manage payments 
         cy.get('a.manage-btn').click()

         //validating manage payments url
         cy.url().should('eq','https://staging.brooi.com/account-settings/payments/your-payments')

    })



    it('Validating payouts', ()=>{
        
         //visit login page
         cy.visit('https://staging.brooi.com/?tab=login')

         cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
         cy.get("input.float-input").eq(1).type("Ghostfire2000#")
 
         //login 
         cy.get("button.btn-primary").click()
 
         //navigation humbuger menu 
         cy.get("button.__profile-btn").click()
 
         //user account
         cy.get("div.m1tb1yiu").eq(4).click()
 
         //navigate to payments & payouts
         cy.get("div._15wuypg").eq(2).click()
 
         //logo assertion
         cy.get('img[alt="Logo"].brooi-logo').should('be.visible')
 
         //url assertion
         cy.url().should('eq', 'https://staging.brooi.com/account-settings/payments/payment-methods')

         //route to payouts 
         cy.get('button.set-btn').eq(1).click()
         cy.get('a.manage-btn').click()
    })
})