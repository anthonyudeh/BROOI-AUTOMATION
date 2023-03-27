

describe("css selectors", () => {
    it('Verify Government ID --Postive test', () => {
    
        //user login
        cy.visit("https://staging.brooi.com/?tab=login")
        cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
        cy.get("input.float-input").eq(1).type("Ghostfire2000#")
        cy.get("button.btn-primary").click()
        cy.get("button.__profile-btn").click()

        //user account
        cy.get("div.m1tb1yiu").eq(4).click()
        cy.get("div._15wuypg").eq(0).click()
        cy.get("button.edit--btn").eq(5).click()

        //user government ID
        cy.get("button.edit--btn").eq(5).click()
        cy.get("button._74ax9g3").click()

    })


    it('government - ID', () => {

        cy.visit("https://staging.brooi.com/account-settings/personal-info")

        cy.get("span").should("Sign in").click()

        cy.get("button.edit--btn").eq(5).click()

        cy.get("button._74ax9g3").click()

        cy.get("div._pa35zs").eq(0).click()

        cy.get("div._pa35zs").eq(1).click()

        cy.get("div.ranq7o").eq(0).click()

        cy.get("button._1qosfpsp").click()
    })
})