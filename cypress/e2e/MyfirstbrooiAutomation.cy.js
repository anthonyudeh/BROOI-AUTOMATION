


describe('Government ID verification test', ()=>{

    it('Positive test' , ()=>{
        
        cy.visit("https://staging.brooi.com/?tab=login")

        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")

        cy.get("input.float-input").eq(1).type("Ghostfire2000#xx")

        cy.get("button.btn-primary").eq(0).click()
    
    })



    it('Verify Government ID', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")

        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")

        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        cy.get("button.btn-primary").click()

        cy.xpath("").click()

        cy.get("a.11eqlma").eq(4).click()

        cy.get("div._15wuypg").eq(5).click()

        cy.get("button.edit--btn").click()
    })
})