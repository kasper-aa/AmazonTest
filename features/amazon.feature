Feature: Amazon Test

  Scenario: Add product to cart on Amazon
    Given A user is on amazon.co.uk
    When The user adds a product to cart
    And Proceeds to checkout
    Then The login modal is presented