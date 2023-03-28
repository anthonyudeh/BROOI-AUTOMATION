

describe('Logiin verification ', ()=>{

    it('Positive test' , ()=>{
        
        cy.visit("https://staging.brooi.com/?tab=login")
        
        //validating url
        cy.url().should('include','staging.brooi').and('eq','https://staging.brooi.com/?tab=login').and('contain','staging')
        
        //credentials 
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")

        //login
        cy.get("button.btn-primary").eq(0).click()
    
    })


    it('Validating incorrect password', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")
        
        //email and incorrect password 
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#xx")
        
        //loging
        cy.get("button.btn-primary").eq(0).click()

        //validating incorrect password 
        cy.get('.login').should('contain','Authentication failed for credentials for email:anthonyudehchinaza@gmail.com. Incorrect Password')

    })


    it('Validating Incorrect Email format', ()=>{

        cy.visit("https://staging.brooi.com/?tab=login")

        //email and password 
        cy.get("input.float-input").eq(0).type("anthonyudehchinazagmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#xx")

        //login
        cy.get("button.btn-primary").eq(0).click()
        

        //validating incorrect email
        cy.get('.login').should('contain','Authentication failed for credentials for email:anthonyudehchinaza@gmail.com. Incorrect Password')
    })

})