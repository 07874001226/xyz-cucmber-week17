$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank transcation Test",
  "description": "\r\nAs a user I want to Test banking functionality into xyz bank website",
  "id": "bank-transcation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4650341300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should add customer successfully",
  "description": "",
  "id": "bank-transcation-test;user-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter firstname\u003c\"vrajesh\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter lastname\u003c\"patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Post code\u003c\"HA0 2PR\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see message customer added successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 231261700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1158623700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1074609400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 1107849700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "AddCustomerStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 1092058900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 1097567900,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 84627000,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iShouldSeeMessageCustomerAddedSuccessfuly()"
});
formatter.result({
  "duration": 1020649400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1034275200,
  "status": "passed"
});
formatter.after({
  "duration": 875846100,
  "status": "passed"
});
formatter.before({
  "duration": 4661270100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should open account  successfully",
  "description": "",
  "id": "bank-transcation-test;user-should-open-account--successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Smoke,"
    },
    {
      "line": 18,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter firstname\u003c\"vrajesh\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter lastname\u003c\"patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Post code\u003c\"HA0 2PR\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see message customer added successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter currency \u003c\"Pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see Account created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 146400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1142040800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1095251400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 1118425700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "AddCustomerStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 1101423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 1085879800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 66833700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iShouldSeeMessageCustomerAddedSuccessfuly()"
});
formatter.result({
  "duration": 1014562100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1028735200,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 1079352200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1148841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCurrency(String)"
});
formatter.result({
  "duration": 1131734300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1078878900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldSeeAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 1014242700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1023381500,
  "status": "passed"
});
formatter.after({
  "duration": 914349400,
  "status": "passed"
});
formatter.before({
  "duration": 2673103700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "bank-transcation-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Sanity,"
    },
    {
      "line": 36,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter firstname\u003c\"vrajesh\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter lastname\u003c\"patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Post code\u003c\"HA0 2PR\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see message customer added successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should see logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should see name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1116472300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1090588300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 1104788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "AddCustomerStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 1105632600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 1096000500,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 67901800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iShouldSeeMessageCustomerAddedSuccessfuly()"
});
formatter.result({
  "duration": 1014674400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1026061100,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 1081486900,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 1082839600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1135245200,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1087387700,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iShouldSeeLogoutSuccessfully()"
});
formatter.result({
  "duration": 1063653800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnLogout()"
});
formatter.result({
  "duration": 1083057200,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iShouldSeeNameIsDisplayed()"
});
formatter.result({
  "duration": 1054252700,
  "status": "passed"
});
formatter.after({
  "duration": 926344800,
  "status": "passed"
});
formatter.before({
  "duration": 2767008600,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "User should deposite money successfully",
  "description": "",
  "id": "bank-transcation-test;user-should-deposite-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter firstname\u003c\"vrajesh\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I enter lastname\u003c\"patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter Post code\u003c\"HA0 2PR\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should see message customer added successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I enter currency \u003c\"Pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I should see Account created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I click on Customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I click on deposite tab",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter Amount\u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on deposite button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I should see deposite successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1106578800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1088835500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 1101985900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "AddCustomerStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 1085476200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 1135200600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 84024800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iShouldSeeMessageCustomerAddedSuccessfuly()"
});
formatter.result({
  "duration": 1007715700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1025572600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 1071079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1154862500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCurrency(String)"
});
formatter.result({
  "duration": 1155443800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1082248300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldSeeAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 1014052500,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1026337600,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 1093454500,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 1074958200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1131733700,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1069779400,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iClickOnDepositeTab()"
});
formatter.result({
  "duration": 1076069600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "DepositeStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1090725500,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iClickOnDepositeButton()"
});
formatter.result({
  "duration": 1087214000,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iShouldSeeDepositeSuccessfullyMessage()"
});
formatter.result({
  "duration": 39029200,
  "status": "passed"
});
formatter.after({
  "duration": 884049400,
  "status": "passed"
});
formatter.before({
  "duration": 2825764000,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "User should withdraw money successfully",
  "description": "",
  "id": "bank-transcation-test;user-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I enter firstname\u003c\"vrajesh\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I enter lastname\u003c\"patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I enter Post code\u003c\"HA0 2PR\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I should see message customer added successfuly",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I enter currency \u003c\"Pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I should see Account created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I click on Alert tab",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click on Customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click on deposite tab",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I enter Amount\u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on deposite button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I should see deposite successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click on Customer login link",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I enter customer name \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click on withdraw tab",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter withdraw amount\u003c\"50\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I click on withraw button",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should see the transcation successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 126100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1116001200,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1070021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 1086174500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "AddCustomerStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 1103820100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "AddCustomerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 1088780600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 71403400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iShouldSeeMessageCustomerAddedSuccessfuly()"
});
formatter.result({
  "duration": 1016075300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1026326300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 1075677900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1118604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCurrency(String)"
});
formatter.result({
  "duration": 1131869800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1082462700,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountStepdefs.iShouldSeeAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 1009517400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepdefs.iClickOnAlertTab()"
});
formatter.result({
  "duration": 1028341800,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 1095586700,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 1074526500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1152578900,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1073551900,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iClickOnDepositeTab()"
});
formatter.result({
  "duration": 1071462100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "DepositeStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 1088886300,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iClickOnDepositeButton()"
});
formatter.result({
  "duration": 1085922500,
  "status": "passed"
});
formatter.match({
  "location": "DepositeStepdefs.iShouldSeeDepositeSuccessfullyMessage()"
});
formatter.result({
  "duration": 48900600,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 1076439400,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnCustomerLoginLink()"
});
formatter.result({
  "duration": 11107737600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "OpenAccountStepdefs.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 1159037600,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndLogoutStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11095184200,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawStepdefs.iClickOnWithdrawTab()"
});
formatter.result({
  "duration": 1076107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 25
    }
  ],
  "location": "WithdrawStepdefs.iEnterWithdrawAmount(String)"
});
formatter.result({
  "duration": 1091494800,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawStepdefs.iClickOnWithrawButton()"
});
formatter.result({
  "duration": 1079773500,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawStepdefs.iShouldSeeTheTranscationSuccessfullyMessage()"
});
formatter.result({
  "duration": 1048508500,
  "status": "passed"
});
formatter.after({
  "duration": 824503000,
  "status": "passed"
});
});