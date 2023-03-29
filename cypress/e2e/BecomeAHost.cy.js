describe('Become a host', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })
    it('postive test', () => {

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

        //navigate to hosting 
        cy.get('a[aria-label="Create new listing"].create--listing--container').click()
        cy.url().should('eq', 'https://staging.brooi.com/become-a-host')

        //assertion
        cy.get("h3.blank-txt-wrapper").should('eq','Welcome back, David')


        //create listing
        cy.get("button.listing-action-btn").click()

    })
})