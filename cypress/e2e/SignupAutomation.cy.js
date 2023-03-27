
describe('The first general tests', ()=>{
    it('verify title-positive', ()=>{

        //----We want to visit brooi web application 
        cy.visit("https://staging.brooi.com/") 
        cy.get("span").contains("Sign Up").click()

        //sign up flow 
        cy.get(".float-input").eq(0).type("deroy58738@mitigado.com")
        cy.get(".float-input").eq(1).type("Ghostfire2000#")

        //agree terms and condition
        cy.get('input[type="checkbox"]').click()

        //Hit sign up button 
        cy.get("button.btn-primary").click()

        //confirmation code 
        cy.get('input[type"text"].input').type("314735")
        cy.get("button.btn-primary").click()

    });

})

