Feature: Validate calculator functionality


  @scenario
  Scenario: Validation addition capability of calculator
    Given I navigate to the login page
    And I enter username  the "Shriganesh" and password as "password"
    And I enter following details
      | Username | Password |
      | admin    | password |
    When I click login button
    Then I should be able to see userform page


  Scenario Outline:  Validate login feature using scenario Outline
    Given I navigate to the login page
    And I enter <username> and <password>
    When I click login button
    Then I should be able to see userform page
    Examples:
      | username | password  |
      | admin    | password  |
      | admin2   | password2 |
      | admin3   | password3 |