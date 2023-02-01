Feature: Testing login for performance user

    A performance user should have a glitch when logging into the site

    Scenario: A performance user should experience a glitch while trying to login to Swaglabs
        Given I find the SwagLabs site
        When I submit login connexion
        Then I should see the products