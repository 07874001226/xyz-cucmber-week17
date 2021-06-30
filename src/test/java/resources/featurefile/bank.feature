Feature: Bank transcation Test

  As a user I want to Test banking functionality into xyz bank website


  @Smoke
  Scenario: User should add customer successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter firstname<"vrajesh">
    And I enter lastname<"patel">
    And I enter Post code<"HA0 2PR">
    And I click on add customer button
    Then I should see message customer added successfuly
    And I click on Alert tab

  @Smoke,@Sanity
  Scenario: User should open account  successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter firstname<"vrajesh">
    And I enter lastname<"patel">
    And I enter Post code<"HA0 2PR">
    And I click on add customer button
    Then I should see message customer added successfuly
    And I click on Alert tab
    And I click on open account tab
    And I enter customer name <"6">
    And I enter currency <"Pound">
    And I click on process button
    Then I should see Account created successfully
    And I click on Alert tab

  @Sanity,@Regression
  Scenario: User should login and logout successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter firstname<"vrajesh">
    And I enter lastname<"patel">
    And I enter Post code<"HA0 2PR">
    And I click on add customer button
    Then I should see message customer added successfuly
    And I click on Alert tab
    And I click on homepage button
    And I click on Customer login link
    And I enter customer name <"6">
    And I click on login button
    Then I should see logout successfully
    And I click on logout
    Then I should see name is displayed

  @Regression
  Scenario: User should deposite money successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter firstname<"vrajesh">
    And I enter lastname<"patel">
    And I enter Post code<"HA0 2PR">
    And I click on add customer button
    Then I should see message customer added successfuly
    And I click on Alert tab
    And I click on open account tab
    And I enter customer name <"6">
    And I enter currency <"Pound">
    And I click on process button
    Then I should see Account created successfully
    And I click on Alert tab
    And I click on homepage button
    And I click on Customer login link
    And I enter customer name <"6">
    And I click on login button
    And I click on deposite tab
    And I enter Amount<"100">
    And I click on deposite button
    Then I should see deposite successfully message

  @Regression
  Scenario: User should withdraw money successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter firstname<"vrajesh">
    And I enter lastname<"patel">
    And I enter Post code<"HA0 2PR">
    And I click on add customer button
    Then I should see message customer added successfuly
    And I click on Alert tab
    And I click on open account tab
    And I enter customer name <"6">
    And I enter currency <"Pound">
    And I click on process button
    Then I should see Account created successfully
    And I click on Alert tab
    And I click on homepage button
    And I click on Customer login link
    And I enter customer name <"6">
    And I click on login button
    And I click on deposite tab
    And I enter Amount<"100">
    And I click on deposite button
    Then I should see deposite successfully message
    And I click on homepage button
    And I click on Customer login link
    And I enter customer name <"6">
    And I click on login button
    And I click on withdraw tab
    And I enter withdraw amount<"50">
    And I click on withraw button
    Then I should see the transcation successfully message