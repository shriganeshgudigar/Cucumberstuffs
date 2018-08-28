#This is my first feature on web

Feature: validate login functionality
  #@web
  Scenario Outline: Perform valid login
   #Scenario: Perform valid login
    Given I have application url launched
    When I login to the application with valid Username "<UserName>" and Password "<Password>"
    Then Application Home is displayed
    """
    Welcome to Altoro Mutual Online.
    """

    Examples:
      |UserName     |Password     |
      |jsmith       |Demo1234     |
      |whomsoever   |whatsoever   |
