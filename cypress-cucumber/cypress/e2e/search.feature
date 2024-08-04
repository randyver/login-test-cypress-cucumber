Feature: Search

  Scenario: Successful search for fruits
    Given I am on the search page
    When I fill in "Search fruits..." with "Banana"
    And I click on the "Search" button
    Then I should see search results containing "Banana"

  Scenario: No results found for an unknown fruit
    Given I am on the search page
    When I fill in "Search fruits..." with "Jackfruit"
    And I click on the "Search" button
    Then I should see "Fruit not found"
