$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "id": "validate-calculator-functionality",
  "description": "",
  "name": "Validate calculator functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 7031365789,
  "status": "passed"
});
formatter.scenario({
  "id": "validate-calculator-functionality;validation-addition-capability-of-calculator",
  "tags": [
    {
      "name": "@scenario",
      "line": 4
    }
  ],
  "description": "",
  "name": "Validation addition capability of calculator",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I enter username  the \"Shriganesh\" and password as \"password\"",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I enter following details",
  "keyword": "And ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 10
    }
  ]
});
formatter.step({
  "name": "I click login button",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I should be able to see userform page",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "TestSteps.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 5453452959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shriganesh",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 52
    }
  ],
  "location": "TestSteps.i_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1917386,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.iEnterFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 11885104,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_click_login_button()"
});
formatter.result({
  "duration": 53084,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_should_be_able_to_see_userform_page()"
});
formatter.result({
  "duration": 84226,
  "status": "passed"
});
formatter.after({
  "duration": 114454289,
  "status": "passed"
});
});