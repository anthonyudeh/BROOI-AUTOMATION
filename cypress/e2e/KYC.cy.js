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
    })
})