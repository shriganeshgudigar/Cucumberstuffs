
Feature: Data table of strings

  Scenario: raw data table feature

    Given use list of list of strings
      | String1  | String2  |
    Then print all

    Scenario: Append List of strings
      Given A list of strings
        |abc   |
        |defg  |
        |hijkl |
      When Append them all
      Then I should get "abcdefghijkl"


      Scenario: Investments into Multi-currency hedge fund
        Given Investors from various geographies invest in Bloomberg fund
          |  country  |  currency  |  investmentAmt  |
          |  India    |  INR       |  10000000       |
          |  Japan    |  YEN       |  1800000        |

        When I calculate total investment in INR and YEN into the fund in USD
        Then The total investment in fund is 11800000
