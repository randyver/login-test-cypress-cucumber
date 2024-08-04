Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I fill in "Email" with "admin@gmail.com"
    And I fill in "Password" with "admin1234"
    And I click on the "Login" button
    Then I should see a success message "Login successful"
    And I should be redirected to the homepage

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I fill in "Email" with "invalid@gmail.com"
    And I fill in "Password" with "wrongpassword"
    And I click on the "Login" button
    Then I should see an error message "Login failed. Please check your credentials."
