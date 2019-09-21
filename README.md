# Raghunath-Dhakshnamoorthy
API Automation Cases for Best Buy API Playground

Test Cases proposed for Automation:
1. Validate all the endpoints in the API are providing response by checking for status code: 200
2. Validate products, categories, stores and services endpoints with the schema (since all the endpoints are content data, it is wise to test them against schema)
3. Create a new product id, category id, store id and service id, and validate them in corresponding endpoints whether they are created as per the POST request
4. Delete the newly created id's as in above case and validate whether they are deleted in the API response

Setup and Execution Instructions:
1. It is a Maven project, all libraries/dependencies required to run the test is specified in pom.xml file
2. I have implemented Java, Rest Assured, JUnit and Cucumber to achieve this automation
3. To run the test, please run the TestRunner class which is in the path - src/test/java/steps/TestRunner.java
4. The test execution result can be viewed as an html file from path - output/cucumber-pretty/index.html
