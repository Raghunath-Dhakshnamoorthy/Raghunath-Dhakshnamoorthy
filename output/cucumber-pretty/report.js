$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/apiPlayground.feature");
formatter.feature({
  "name": "To validate the functionality of Best Buy API Playground",
  "description": "  As a Tester\n  I want to verify following scenarios are working as expected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I check the availability of \"\u003cEndpoint\u003e\" endpoint in API Playground",
  "keyword": "When "
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Endpoint"
      ]
    },
    {
      "cells": [
        "products"
      ]
    },
    {
      "cells": [
        "categories"
      ]
    },
    {
      "cells": [
        "stores"
      ]
    },
    {
      "cells": [
        "services"
      ]
    },
    {
      "cells": [
        "version"
      ]
    },
    {
      "cells": [
        "healthcheck"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"products\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"categories\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"stores\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"services\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"version\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all the endpoints in API Playground should return 200 response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"healthcheck\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response as 200 for each endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the endpoints in API Playground with their schema",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I check the availability of \"\u003cEndpoint\u003e\" endpoint in API Playground",
  "keyword": "When "
});
formatter.step({
  "name": "the response should match the Json-Schema of that \"\u003cEndpoint\u003e\" endpoint",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Endpoint"
      ]
    },
    {
      "cells": [
        "products"
      ]
    },
    {
      "cells": [
        "categories"
      ]
    },
    {
      "cells": [
        "stores"
      ]
    },
    {
      "cells": [
        "services"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the endpoints in API Playground with their schema",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"products\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should match the Json-Schema of that \"products\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIWithSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the endpoints in API Playground with their schema",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"categories\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should match the Json-Schema of that \"categories\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIWithSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the endpoints in API Playground with their schema",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"stores\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should match the Json-Schema of that \"stores\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIWithSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the endpoints in API Playground with their schema",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I check the availability of \"services\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkAPIAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should match the Json-Schema of that \"services\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkAPIWithSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate whether we can create new data in the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I create new data for \"\u003cEndpoint\u003e\" endpoint in API Playground",
  "keyword": "When "
});
formatter.step({
  "name": "the response should contain the newly created data for that \"\u003cEndpoint\u003e\" endpoint",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Endpoint"
      ]
    },
    {
      "cells": [
        "products"
      ]
    },
    {
      "cells": [
        "categories"
      ]
    },
    {
      "cells": [
        "stores"
      ]
    },
    {
      "cells": [
        "services"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate whether we can create new data in the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create new data for \"products\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.createNewDataInEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain the newly created data for that \"products\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateNewlyCreatedData(String)"
});
formatter.write("{\"id\":9999684,\"name\":\"New Product\",\"type\":\"Hard Good\",\"price\":99.99,\"upc\":\"12345676\",\"shipping\":null,\"description\":\"This is a placeholder request for creating a new product.\",\"manufacturer\":null,\"model\":\"NP12345\",\"url\":null,\"image\":null,\"createdAt\":\"2019-09-01T21:22:20.447Z\",\"updatedAt\":\"2019-09-01T21:22:20.447Z\",\"categories\":[]}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can create new data in the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create new data for \"categories\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.createNewDataInEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain the newly created data for that \"categories\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateNewlyCreatedData(String)"
});
formatter.write("{\"id\":\"abc12321cba\",\"name\":\"New Category\",\"createdAt\":\"2019-09-01T21:22:20.531Z\",\"updatedAt\":\"2019-09-01T21:22:20.531Z\",\"subCategories\":[],\"categoryPath\":[]}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can create new data in the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create new data for \"stores\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.createNewDataInEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain the newly created data for that \"stores\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateNewlyCreatedData(String)"
});
formatter.write("{\"id\":8926,\"name\":\"New Store\",\"type\":\"BigBox\",\"address\":\"123 Fake St\",\"address2\":\"\",\"city\":\"Springfield\",\"state\":\"MN\",\"zip\":\"55123\",\"lat\":44.969658,\"lng\":-93.449539,\"hours\":\"Mon: 10-9; Tue: 10-9; Wed: 10-9; Thurs: 10-9; Fri: 10-9; Sat: 10-9; Sun: 10-8\",\"createdAt\":\"2019-09-01T21:22:20.635Z\",\"updatedAt\":\"2019-09-01T21:22:20.635Z\",\"services\":[]}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can create new data in the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create new data for \"services\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.createNewDataInEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain the newly created data for that \"services\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateNewlyCreatedData(String)"
});
formatter.write("{\"id\":28,\"name\":\"New Service\",\"createdAt\":\"2019-09-01T21:22:20.738Z\",\"updatedAt\":\"2019-09-01T21:22:20.738Z\"}");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate whether we can delete data from the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I delete data from the \"\u003cEndpoint\u003e\" endpoint in API Playground",
  "keyword": "When "
});
formatter.step({
  "name": "the response should not contain the deleted data for that \"\u003cEndpoint\u003e\" endpoint",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Endpoint"
      ]
    },
    {
      "cells": [
        "products"
      ]
    },
    {
      "cells": [
        "categories"
      ]
    },
    {
      "cells": [
        "stores"
      ]
    },
    {
      "cells": [
        "services"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate whether we can delete data from the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I delete data from the \"products\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.deleteDataFromEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should not contain the deleted data for that \"products\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateDataIsProperlyDeleted(String)"
});
formatter.write("{\"name\":\"NotFound\",\"message\":\"No record found for id \u00279999684\u0027\",\"code\":404,\"className\":\"not-found\",\"errors\":{}}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can delete data from the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I delete data from the \"categories\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.deleteDataFromEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should not contain the deleted data for that \"categories\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateDataIsProperlyDeleted(String)"
});
formatter.write("{\"name\":\"NotFound\",\"message\":\"No record found for id \u0027abc12321cba\u0027\",\"code\":404,\"className\":\"not-found\",\"errors\":{}}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can delete data from the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I delete data from the \"stores\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.deleteDataFromEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should not contain the deleted data for that \"stores\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateDataIsProperlyDeleted(String)"
});
formatter.write("{\"name\":\"NotFound\",\"message\":\"No record found for id \u00278926\u0027\",\"code\":404,\"className\":\"not-found\",\"errors\":{}}");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate whether we can delete data from the API Playground endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I delete data from the \"services\" endpoint in API Playground",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.deleteDataFromEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should not contain the deleted data for that \"services\" endpoint",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateDataIsProperlyDeleted(String)"
});
formatter.write("{\"name\":\"NotFound\",\"message\":\"No record found for id \u002728\u0027\",\"code\":404,\"className\":\"not-found\",\"errors\":{}}");
formatter.result({
  "status": "passed"
});
});