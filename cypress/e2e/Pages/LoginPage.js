import testDATA from "../../fixtures/config.json";
export class LoginPage{
    weblocators={
        "hesabim": "HESABIM",
        "login_emailCheckbox":"#toggle_login_box_user_email",
        "login_email":"#tmp_email",
        "login_password":"#pass",
        "login_girisButton":"#btn_login",
        "uyelikBilgilerimText":"Üyelik Bilgilerim",
        "guvenliCikis":"GÜVENLI ÇIKIŞ",
        "errorMessage":".content > p"
    }
    gotoLoginPage(){
    cy.contains(this.weblocators.hesabim).click();
    cy.get(this.weblocators.login_girisButton).should("be.visible");
  }
   clickEmailCheckbox(){
    cy.get(this.weblocators.login_emailCheckbox).click()
   }
   enterEmail(email){
    cy.get(this.weblocators.login_email).type(email)
   }

   enterPassword(password){
    cy.get(this.weblocators.login_password).type(password)
   }

   clickGirisButton(){
    cy.get(this.weblocators.login_girisButton).click()
   }
   
   uyelikBilgilerim(){
    cy.contains(this.weblocators.uyelikBilgilerimText).should("be.visible")
   }

   clickLogout() {
   cy.contains(this.weblocators.guvenliCikis).click()
 }
  getErrorMessage(){
    return cy.get(this.weblocators.errorMessage)
  }
}