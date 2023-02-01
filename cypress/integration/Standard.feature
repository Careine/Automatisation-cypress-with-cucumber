Feature: Testing login for standard user

    A standard user should have a glitch free login experience

    Scenario: A standard user should be able to login to Swaglabs
        Given I launch the SwagLabs site
        When I submit login
        Then I should see the products page