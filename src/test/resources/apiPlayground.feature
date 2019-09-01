Feature: To validate the functionality of Best Buy API Playground
  As a Tester
  I want to verify following scenarios are working as expected

  Scenario Outline: Validate all the endpoints in API Playground should return 200 response
    When I check the availability of "<Endpoint>" endpoint in API Playground
    Then I should get response as 200 for each endpoint

    Examples:
    |  Endpoint   |
    |  products   |
    |  categories |
    |  stores     |
    |  services   |
    |  version    |
    |  healthcheck|

  Scenario Outline: Validate the endpoints in API Playground with their schema
    When I check the availability of "<Endpoint>" endpoint in API Playground
    Then the response should match the Json-Schema of that "<Endpoint>" endpoint

    Examples:
      |  Endpoint   |
      |  products   |
      |  categories |
      |  stores     |
      |  services   |

  Scenario Outline: Validate whether we can create new data in the API Playground endpoints
    When I create new data for "<Endpoint>" endpoint in API Playground
    Then the response should contain the newly created data for that "<Endpoint>" endpoint

    Examples:
      |  Endpoint   |
      |  products   |
      |  categories |
      |  stores     |
      |  services   |

  Scenario Outline: Validate whether we can delete data from the API Playground endpoints
    When I delete data from the "<Endpoint>" endpoint in API Playground
    Then the response should not contain the deleted data for that "<Endpoint>" endpoint

    Examples:
      |  Endpoint   |
      |  products   |
      |  categories |
      |  stores     |
      |  services   |