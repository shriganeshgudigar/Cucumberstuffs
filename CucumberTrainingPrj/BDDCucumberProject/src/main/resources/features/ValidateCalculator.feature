Feature: Validate calculator functionality
  Scenario: Validate addition capability of calculator
    Given I have two numbers to add 5 and 6
    When I enter first number
    And when I click on plus operator
    And I enter second number
    And I click on equal to operator
    Then valid sum is displayed
    And sum matches with users value 11
