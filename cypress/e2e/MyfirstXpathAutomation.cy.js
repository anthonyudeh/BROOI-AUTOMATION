// install xpath pluging ----> npm install -D @cypress/xpath
require('cypress-xpath');

describe('XPath locators',()=>{
    it('my first test',()=>{
        
        cy.visit("https://staging.brooi.com/")

        cy.xpath('//div[@class = "grid-content"]//li').should('have.length',10)
    })   
})