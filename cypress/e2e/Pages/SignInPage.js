import data from '../../fixtures/config.json';

export class SignPage {

   weblocators = {
      "hesabim": "HESABIM",
      "loginBox": ".login_box",
      "uyeOl": "HEMEN ÜYE OL",
      "bizeKatilin": "Bize Katılın",
      "firstName": "#firstname",
      "lastName": "#lastname",
      "emailCheckBox": "#toggle_register_user_email",
      "email": "#tmp_email",
      "password": "#password",
      "confirmPassword": "#pass_again",
      "terms": ":nth-child(7) > td > label",
      "uyeOl_button":"#btn_send",
      "emailVerifyText":"#two_factor_form_title"
   }


   gotoSignInPage() {
      cy.contains(this.weblocators.hesabim).click();
      expect(this.weblocators.loginBox).to.exist;
      cy.contains(this.weblocators.uyeOl).click()
      expect(this.weblocators.bizeKatilin).to.exist;
   }
   isSignPageVisible() {
      expect(this.weblocators.bizeKatilin).to.exist;
   }
   enterFirstName() {
      cy.get(this.weblocators.firstName).type(data.firstName)
   }

   enterLastName() {
      cy.get(this.weblocators.lastName).type(data.lastName)
   }
   checkEmailCheckBox() {
      cy.get(this.weblocators.emailCheckBox).click()
   }

   enterEmail() {
      var registrationEmail=Math.random().toString(36).substring(7) + '@gmail.com';
      cy.writeFile("cypress/support/registrationEmail.txt", registrationEmail);
      cy.get(this.weblocators.email).type(registrationEmail)
   }
   enterPassword() {
      cy.get(this.weblocators.password).type(data.pasword)
   }

   reEnterPassword() {
      cy.get(this.weblocators.confirmPassword).type(data.pasword)
   }

   checkTerms() {
      cy.get(this.weblocators.terms).click()
   }

   uyeolbuttonTikla(){
      cy.get(this.weblocators.uyeOl_button).click()
      cy.get(this.weblocators.emailVerifyText).should('be.visible')
   }

}

