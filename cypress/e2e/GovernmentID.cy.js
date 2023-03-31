

describe("css selectors", () => {
    it('Verify Government ID --Postive test', () => {

        //user login
        cy.visit("https://staging.brooi.com/?tab=login")
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")
        cy.get("button.btn-primary").click()

        //navigation humbuger menu 
        cy.get("button.__profile-btn").click()

        //user account
        cy.get("div.m1tb1yiu").eq(4).click()
        cy.get("div._15wuypg").eq(0).click()
        cy.get("button.edit--btn").eq(5).click()

        //user government ID
        cy.get('button[type="button"]._74ax9g3').click()


        //upload an exisiting photo 
        cy.get("label._rin72m").eq(0).click()
        cy.get('button[type="button"]._1qosfpsp').click()


        //validating back button
        cy.get("._pa35zs").click()
        
    })


    // it('government - ID', () => {

    //     cy.visit("https://staging.brooi.com/account-settings/personal-info")

    //     cy.get("span").should("Sign in").click()

    //     cy.get("button.edit--btn").eq(5).click()

    //     cy.get("button._74ax9g3").click()

    //     cy.get("div._pa35zs").eq(0).click()

    //     cy.get("div._pa35zs").eq(1).click()

    //     cy.get("div.ranq7o").eq(0).click()

    //     cy.get("button._1qosfpsp").click()



    // assertions ---> are divided into two implicit and explicit in cypress 
    // implicit --> and, should 
    // explicit --> assert, expect 

    /*
      describe("Assertions", ()=>{
          it("Implicit assertion",()=>{

               cy.visit("staging.brooi.com")

               //should for validation  of url
               cy.url().should('include','brooi.com') //we are saying it should include a url 
               cy.url().should('eq', 'staging.brooi.com') //shoud equal the url 
               cy.url().should('contain', 'staging')


               cy.url().should('include', 'staging.com' )
               .should('eq', 'staging.brooi.com') 
               .should('contain', 'staging')


               //and 
                 cy.url().should('include', 'staging.com' )
               .and('eq', 'staging.brooi.com') 
               .and('contain', 'staging')
                
               
               //-----Negative assertions
               cy.url().should('not.contain', ' Hello world')


              //title of the web page 
              cy.title().should('eq','Brooi')
          })
           
       }) 
    */
    // })
})