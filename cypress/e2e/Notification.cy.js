describe('Notification validation', ()=>{
    it('Positive test', ()=>{

         //user login
         cy.visit("https://staging.brooi.com/?tab=login")
         cy.get("input.float-input").eq(0).type("anthonyudehchinaza@gmail.com")
         cy.get("input.float-input").eq(1).type("Ghostfire2000#")
         cy.get("button.btn-primary").click()
 
         //navigation humbuger menu 
         cy.get("button.__profile-btn").click()
 
         //user account
         cy.get("div.m1tb1yiu").eq(4).click()
         cy.get("div._15wuypg").eq(3).click()

         // Travel tips and offers notification
         cy.get('button.edit-btn').eq(0).click()
         cy.get('label.switch').eq(1).click() //SMS
         
         //turn off notification
         cy.get('label.switch').eq(1).click() //SMS

         //turn on notification 
         cy.get('label.switch').eq(2).click() //Browser notifications

         //close modal 
         cy.get('div.modal-close').eq(0).click()

         //This element <div.modal-close> is not visible because its parent <div.modal-background.inactive.slide-up> has CSS property: display: none


    })
})