

describe("Validating Government Identification", () => {
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

    cy.get('input[type=radio').eq(0).should('be.visible')
    cy.get('input[type=radio').eq(1).should('.be.visible')
    cy.get('input[type=radio]').eq(0).check().should('be.checked')
    cy.get('input[type=radio]').eq(1).should('not.be.checked')

    cy.get('button[type="button"]._1qosfpsp').click()


    //Choose an ID  type verification
    cy.get('div.ebq526p').should('equ', 'Identity verification')
    cy.get('div._1vb9n5m').should('equ', 'Choose an ID type to add')
    cy.get('.location-country-select').select('Nigeria').should('have.value')
    cy.get("input[name='upload-id']").eq(0).check().should('be.checkerd')
    cy.get("input[name='upload-id']").eq(1).should('not.be.checked')
    cy.get("input[name='upload-id']").eq(2).should('not.be.checked')


    //validate the text
    cy.get('._pog3hg > span > div').should('containt', 'Your ID will be handled according to our Privacy Policy')

    cy.get('button._74ax9g3').click()


    //Upload images of your drivers license 
    cy.url().should('eq','https://staging.brooi.com/account-settings/personal-info/government-id/upload-identity/drivers-license')
    cy.get('div.ebq526p').should('equ', 'Identity verification')
    cy.get('._1vb9n5m').should('equ', "Upload images of your driver's licence")
    cy.get('div._1o5t7rw > span > span').should('equ', "Make sure your photos aren’t blurry and the front of your driver’s license clearly shows your face.")

  })




})