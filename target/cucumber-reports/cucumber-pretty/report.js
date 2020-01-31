$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/countryInformation.feature");
formatter.feature({
  "name": "Passport Renewal",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@countryInformationPage"
    }
  ]
});
formatter.scenario({
  "name": "Apply for U.S. Passport",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@countryInformationPage"
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
  "name": "User navigates to International Travel",
  "keyword": "When "
});
formatter.match({
  "location": "InternationalPages_STEPS.user_navigates_to_International_Travel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Country Information",
  "keyword": "Then "
});
formatter.match({
  "location": "CountryInformationPage_STEPS.user_navigates_to_Country_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies Country Info page",
  "keyword": "And "
});
formatter.match({
  "location": "CountryInformationPage_STEPS.user_verifies_Country_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a country",
  "keyword": "Then "
});
formatter.match({
  "location": "CountryInformationPage_STEPS.user_enters_a_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies correct country info",
  "keyword": "Then "
});
formatter.match({
  "location": "CountryInformationPage_STEPS.user_verifies_correct_country_info()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});