Feature: Searching product
   
  Scenario Outline: Searching for existing product
    Given I navigate to "https://www.sefamerve.com/"
    When I search "<searchProduct>"
    And I click on the search box icon
    Then I should see the "<searchProduct>" in results
    And if there is no product take a screenshot
 
 Examples:
 |searchProduct|
 |eldiven|
 |bere|
 |pantolon|
 


 