

describe("css selectors", ()=>{
    it("first test using css selectors", ()=>{
        //visit the applicaion -- first step

        cy.visit("https://www.amazon.com/ref=nav_logo")

        //access the search element and pass some element inside 
        

        //step 1---- get the id/class of input 
        //step 2---- .type("to search on the input ")
        cy.get("#twotabsearchtextbox").type("books on sell")


        //step 3--- grab the search icon class and use the click method
        cy.get("input#nav-search-submit-button").click()

    }); 

    
})