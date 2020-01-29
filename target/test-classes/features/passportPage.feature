@registerPage
Feature: Register Page Testing

  Scenario: Apply for U.S. Passport
    Given User opens home page
    When User navigates Passports page
    Then Verifies title is U.S. Passports
    Then User selects United States
    Then User enters DOB
    Then User selects passport history
    Then User click Next