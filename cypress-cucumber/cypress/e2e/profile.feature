Feature: Profile

  Scenario: Successfully update profile information
    Given I am on the profile page
    When I fill in "Name" with "John Doe"
    And I fill in "Email" with "john.doe@example.com"
    And I click on the "Update Profile" button
    Then I should see "Profile updated successfully!"

  Scenario: Invalid email format
    Given I am on the profile page
    When I fill in "Name" with "John Doe"
    And I fill in "Email" with "invalid-email"
    And I click on the "Update Profile" button
    Then I should see "Invalid email address"
