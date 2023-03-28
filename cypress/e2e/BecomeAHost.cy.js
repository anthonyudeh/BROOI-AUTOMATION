describe('Become a host', ()=>{
    it('postive test', ()=>{
         
        //login 
        cy.visit("https://staging.brooi.com/?tab=login")
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")
        cy.get("button.btn-primary").eq(0).click()


        //switch to hosting
        cy.get("li.button-item").click()
    })
})