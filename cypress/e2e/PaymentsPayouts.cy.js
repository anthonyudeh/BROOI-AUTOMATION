describe('Payments and Payouts automation',()=>{

    it('Positive test',()=>{

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

    })
})