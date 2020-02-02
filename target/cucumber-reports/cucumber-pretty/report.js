$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/passportPage.feature");
formatter.feature({
  "name": "Passport Renewal",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@passportPage"
    }
  ]
});
formatter.scenario({
  "name": "Apply for U.S. Passport",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@passportPage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_STEPS.user_opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates Passports page",
  "keyword": "When "
});
formatter.match({
  "location": "PassportPage_STEPS.user_navigates_Passports_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies title is U.S. Passports",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.verifies_title_is_U_S_Passports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects United States",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.userSelectsUnitedStates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters DOB",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.userEntersDOB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects passport history",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.userSelectsPassportHistory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects yes passport possession",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_yes_passport_possession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects yes replacing passport",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_yes_replacing_passport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects domestic option",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_domestic_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects valid more than a year",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_valid_more_than_a_year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects passport limited no",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_passport_limited_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters issuance date",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_enters_issuance_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Next",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.userClickNext()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User slects Passport Book",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_slects_Passport_Book()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Standard method",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_Standard_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Standard Delivery",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_selects_Standard_Delivery()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Calculate button",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_clicks_the_Calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies total",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_verifies_total()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks next",
  "keyword": "Then "
});
formatter.match({
  "location": "PassportPage_STEPS.user_clicks_next()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});