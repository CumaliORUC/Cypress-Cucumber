Feature: Login/Logout Functionality
Background: 
   Given I navigate to "https://www.sefamerve.com/"
    When I go to the loginpage


  Scenario: Successful Login and Logout
    And I log in with "valid" credentials
    And I click on the giris button
    Then I should see the account page
    And I logout successfully

 
Scenario: UnSuccessful Login
    And I log in with "invalid" credentials
    And I click on the giris button
    Then I should see the error message
    And I log the error message to loginError.txt
