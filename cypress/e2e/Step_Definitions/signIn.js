import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import { SignPage }  from '../Pages/SignIn';

const signpage=new SignPage();

Given('I go to sign in page', () => {
    signpage.gotoSignInPage();
});

Then ('I should see the sign in page', ()=>{
   signpage.isSignPageVisible();
})

And ('I enter firstname',()=>{
   signpage.enterFirstName();
})

And ('I enter lastname',()=>{
    signpage.enterLastName();
 })

 And ('I select email check box',()=>{
    signpage.checkEmailCheckBox();
 })

 And ('I enter email',()=>{
    signpage.enterEmail();
 })

 And ('I enter password',()=>{
    signpage.enterPassword();
 })
 And ('I enter password again',()=>{
    signpage.reEnterPassword();
 })

 And ('I check on terms checkbox',()=>{
    signpage.checkTerms();
 })

 Then ('I should see successfully message',()=>{
   
 })

