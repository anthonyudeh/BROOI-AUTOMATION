


describe('Government ID verification test', ()=>{

    it('Positive test' , ()=>{
        
        cy.visit("https://staging.brooi.com/?tab=login")

        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")

        cy.get("input.float-input").eq(1).type("Ghostfire2000#xx")

        cy.get("button.btn-primary").eq(0).click()
    
    })
})