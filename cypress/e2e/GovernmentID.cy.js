

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

    //title verification 
    cy.title().should('equ', 'brooi')

    //URL Verification
    cy.url().should('eq', 'https://staging.brooi.com/account-settings/personal-info/government-id/provide-id').should('contain', 'government-id').should('include', 'staging.brooi.com').and('not.contain', 'greenHrm')

    cy.get('.ebq526p').should('be.visible').and('equ', 'Identity verification')

    cy.get('._1v9n5m').should('be.visible').and('equ', 'Please provide a government ID')

    cy.get('._uhlm2').should('be.visible')

    cy.get('button[type="button"]._74ax9g3').click()


    //upload an exisiting photo 
  
    cy.get("label._rin72m").eq(0).click()
    cy.get('button[type="button"]._1qosfpsp').click()


    //Choose an ID  type verification
    cy.get('div.ebq526p').should('equ', 'Identity verification')

    cy.get('div._1vb9n5m').should('equ', 'Choose an ID type to add')

    cy.get('select.location-country-select').click()

    cy.get('option').eq(3).click()

    cy.get('input[type=radio]').equ(1).click()

    //validating back button
    // cy.get("._pa35zs").click()

    //Validating continue button 
    cy.get('button._74ax9g3').clck()

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


             //positive assertions for img 
             cy.get('.brooi-svg-logo > img').should(be.visible).and('exist')
             cy.get('.brooi-svg-logo > img').should('exist')

             //verify the value of an input --> let's say we want to validate the information the user has entered
             cy.get(".user-firstname-text").type("Hello")
             cy.get(".user-firstname-text").should('have.value','hello') //this is a value check 

              
             
             //-----Negative assertions
             cy.url().should('not.contain', ' Hello world')


            //title of the web page 
            cy.title().should('eq','Brooi')

            Explicit assertions ---> 
            expect and assert 

            ------------
            expect --BDD
            ------------

            it('explict assertion BDD', ()=>{


              //Behavior-driven development (BDD) is an Agile software development methodology in which an application is documented and designed around the behavior a user


              cy.visit("hebyr://www.wfbffb.com")
              cy.get('input[placeholder="username"]').type("hello")
               cy.get('input[placeholder="username"]').type("hello")
               cy.get("click-button").click()

               //javascript fnc 
               let expectedName = "xyz"

               cy.get(".this-dhryl").then((x)=>{

                let actualName = x.text()
                expect(actualName).to.equal(expectedName)
                
                  
               })
            })



            it('explicit asssertion TDD style', ()=>{


              //Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully ...

                        cy.visit("hebyr://www.wfbffb.com")
              cy.get('input[placeholder="username"]').type("hello")
               cy.get('input[placeholder="username"]').type("hello")
               cy.get("click-button").click()

               //javascript fnc 
               let expectedName = "xyz"


              cy.get(".this-is").then((x)=>{

                let actualname = x.text()

                //TDD Style
                assert.equal(actualname,expectedname)
                assert.not.equal(actualname, expectedname)

              })

            })
            assert -TDD 
        })
         
     }) 
  */
  // })
})