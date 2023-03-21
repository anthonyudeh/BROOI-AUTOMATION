
describe('The first general tests', ()=>{
    it('verify title-positive', ()=>{

        //----We want to visit brooi web application 

        cy.visit("https://staging.brooi.com/") 

        //----We want to validate the title of the application (Positive) 

        cy.title().should('eq','brooi')
    });


    it('verify title-Negative',() =>{
         
        
        //----We want to visit brooi web application 

        cy.visit("https://staging.brooi.com/")

        //----We want to validate the title of the application (Negative)

        cy.title().should('eq','BrooiHello')

    })
})

