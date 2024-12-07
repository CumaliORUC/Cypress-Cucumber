Feature:Sign in

Scenario:Successful sign in
Given I navigate to "https://www.sefamerve.com/"
When I go to sign in page
Then I should see the sign in page
And I enter firstname
And I enter lastname
And I select email check box
And I enter email
And I enter password
And I enter password again
And I check on terms checkbox
Then I should see email verification message
