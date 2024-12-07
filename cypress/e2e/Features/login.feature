Feature: Login/Logout Functionality

  Scenario: Successful Login and Logout
    Given I navigate to "https://www.sefamerve.com/"
    When I go to the loginpage
    And I log in with "valid" credentials
    And I click on the giris button
    Then I should see the account page
    And I logout successfully

 
