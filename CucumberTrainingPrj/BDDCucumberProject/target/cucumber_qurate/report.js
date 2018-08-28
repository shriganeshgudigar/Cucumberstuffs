$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This is my first feature on web"
    }
  ],
  "line": 3,
  "name": "validate login functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@web"
    }
  ],
  "line": 5,
  "name": "Perform valid login",
  "description": "",
  "id": "validate-login-functionality;perform-valid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario: Perform valid login"
    }
  ],
  "line": 7,
  "name": "I have application url launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login to the application with valid Username \"\u003cUserName\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Application Home is displayed",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "Welcome to Altoro Mutual Online."
  }
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-login-functionality;perform-valid-login;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 15,
      "id": "validate-login-functionality;perform-valid-login;;1"
    },
    {
      "cells": [
        "jsmith",
        "Demo1234"
      ],
      "line": 16,
      "id": "validate-login-functionality;perform-valid-login;;2"
    },
    {
      "cells": [
        "whomsoever",
        "whatsoever"
      ],
      "line": 17,
      "id": "validate-login-functionality;perform-valid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 269667,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Perform valid login",
  "description": "",
  "id": "validate-login-functionality;perform-valid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario: Perform valid login"
    }
  ],
  "line": 7,
  "name": "I have application url launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login to the application with valid Username \"jsmith\" and Password \"Demo1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Application Home is displayed",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "Welcome to Altoro Mutual Online."
  }
});
formatter.match({
  "location": "LoginSteps.iHaveUrlLaunched()"
});
formatter.result({
  "duration": 14753487893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsmith",
      "offset": 48
    },
    {
      "val": "Demo1234",
      "offset": 70
    }
  ],
  "location": "LoginSteps.loginToAppURL(String,String)"
});
formatter.result({
  "duration": 1055935815,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationHomeIsDisplayed(String)"
});
formatter.result({
  "duration": 51196817,
  "status": "passed"
});
formatter.after({
  "duration": 42821,
  "status": "passed"
});
formatter.after({
  "duration": 73964,
  "status": "passed"
});
formatter.before({
  "duration": 78210,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Perform valid login",
  "description": "",
  "id": "validate-login-functionality;perform-valid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario: Perform valid login"
    }
  ],
  "line": 7,
  "name": "I have application url launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login to the application with valid Username \"whomsoever\" and Password \"whatsoever\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Application Home is displayed",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "Welcome to Altoro Mutual Online."
  }
});
formatter.match({
  "location": "LoginSteps.iHaveUrlLaunched()"
});
formatter.result({
  "duration": 372016805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whomsoever",
      "offset": 48
    },
    {
      "val": "whatsoever",
      "offset": 74
    }
  ],
  "location": "LoginSteps.loginToAppURL(String,String)"
});
formatter.result({
  "duration": 499814028,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationHomeIsDisplayed(String)"
});
formatter.result({
  "duration": 42687077,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .//p[contains(text(), \u0027Welcome to Altoro Mutual Online\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027WKWIN2902185\u0027, ip: \u002710.241.39.119\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\sgudig\\AppData\\Local\\Temp\\rust_mozprofile.FrEomJkYNZ7J, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d60.0, platformVersion\u003d6.1, moz:processID\u003d15432, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 514ab586-50b8-41c4-861c-f66ba8abe706\n*** Element info: {Using\u003dxpath, value\u003d.//p[contains(text(), \u0027Welcome to Altoro Mutual Online\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat steps.LoginSteps.applicationHomeIsDisplayed(LoginSteps.java:33)\r\n\tat ✽.Then Application Home is displayed(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 44944,
  "status": "passed"
});
formatter.after({
  "duration": 24772,
  "status": "passed"
});
formatter.uri("StringDataTable.feature");
formatter.feature({
  "line": 2,
  "name": "Data table of strings",
  "description": "",
  "id": "data-table-of-strings",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41759,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "raw data table feature",
  "description": "",
  "id": "data-table-of-strings;raw-data-table-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "use list of list of strings",
  "rows": [
    {
      "cells": [
        "String1",
        "String2"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "print all",
  "keyword": "Then "
});
formatter.match({
  "location": "StringDataTableSteps.useListOfListOfStrings(DataTable)"
});
formatter.result({
  "duration": 1148033,
  "status": "passed"
});
formatter.match({
  "location": "StringDataTableSteps.printAll()"
});
formatter.result({
  "duration": 53792,
  "status": "passed"
});
formatter.after({
  "duration": 56269,
  "status": "passed"
});
formatter.after({
  "duration": 36451,
  "status": "passed"
});
formatter.before({
  "duration": 68656,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Append List of strings",
  "description": "",
  "id": "data-table-of-strings;append-list-of-strings",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "A list of strings",
  "rows": [
    {
      "cells": [
        "abc"
      ],
      "line": 12
    },
    {
      "cells": [
        "defg"
      ],
      "line": 13
    },
    {
      "cells": [
        "hijkl"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Append them all",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should get \"abcdefghijkl\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StringDataTableSteps.aListOfStrings(String\u003e)"
});
formatter.result({
  "duration": 5686726,
  "status": "passed"
});
formatter.match({
  "location": "StringDataTableSteps.appendThemAll()"
});
formatter.result({
  "duration": 78211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefghijkl",
      "offset": 14
    }
  ],
  "location": "StringDataTableSteps.iShouldGet(String)"
});
formatter.result({
  "duration": 79980,
  "status": "passed"
});
formatter.after({
  "duration": 36098,
  "status": "passed"
});
formatter.after({
  "duration": 21234,
  "status": "passed"
});
formatter.before({
  "duration": 39990,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Investments into Multi-currency hedge fund",
  "description": "",
  "id": "data-table-of-strings;investments-into-multi-currency-hedge-fund",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Investors from various geographies invest in Bloomberg fund",
  "rows": [
    {
      "cells": [
        "country",
        "currency",
        "investmentAmt"
      ],
      "line": 21
    },
    {
      "cells": [
        "India",
        "INR",
        "10000000"
      ],
      "line": 22
    },
    {
      "cells": [
        "Japan",
        "YEN",
        "1800000"
      ],
      "line": 23
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I calculate total investment in INR and YEN into the fund in USD",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The total investment in fund is 11800000",
  "keyword": "Then "
});
formatter.match({
  "location": "StringDataTableSteps.investorsFromVariousGeographiesInvestInBloombergFund(StringDataTableSteps$Investment\u003e)"
});
formatter.result({
  "duration": 13960774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 32
    },
    {
      "val": "YEN",
      "offset": 40
    }
  ],
  "location": "StringDataTableSteps.iCalculateTotalInvestmentInINRAndYENIntoTheFundInUSD(String,String)"
});
formatter.result({
  "duration": 127756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11800000",
      "offset": 32
    }
  ],
  "location": "StringDataTableSteps.theTotalInvestmentInFundIs(int)"
});
formatter.result({
  "duration": 117139,
  "status": "passed"
});
formatter.after({
  "duration": 32558,
  "status": "passed"
});
formatter.after({
  "duration": 32912,
  "status": "passed"
});
formatter.uri("ValidateCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Validate calculator functionality",
  "description": "",
  "id": "validate-calculator-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 49899,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Validate addition capability of calculator",
  "description": "",
  "id": "validate-calculator-functionality;validate-addition-capability-of-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have two numbers to add 5 and 6",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter first number",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "when I click on plus operator",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter second number",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on equal to operator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "valid sum is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "sum matches with users value 11",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    },
    {
      "val": "6",
      "offset": 32
    }
  ],
  "location": "CalculatorSteps.iHaveTwoNumbersToAddAnd(int,int)"
});
formatter.result({
  "duration": 183317,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.iEnterFirstNumber()"
});
formatter.result({
  "duration": 108291,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.whenIClickOnPlusOperator()"
});
formatter.result({
  "duration": 61577,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.iEnterSecondNumber()"
});
formatter.result({
  "duration": 57685,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.iClickOnEqualToOperator()"
});
formatter.result({
  "duration": 53438,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.validSumIsDisplayed()"
});
formatter.result({
  "duration": 73964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 29
    }
  ],
  "location": "CalculatorSteps.sumMatchesWithUsersValue(int)"
});
formatter.result({
  "duration": 123155,
  "status": "passed"
});
formatter.after({
  "duration": 51315,
  "status": "passed"
});
formatter.after({
  "duration": 30789,
  "status": "passed"
});
});