package steps;


import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.ValidatableResponse;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class StepDefinitions {

    private Scenario scenario;
    ValidatableResponse apiResponse;

    @Before
    public void before(Scenario scenario){
        this.scenario = scenario;
    }

    @When("I check the availability of \"([^\"]*)\" endpoint in API Playground")
    public void checkAPIAvailability(String endpoint){

        try {
            apiResponse = given().when().get("http://localhost:3030/"+endpoint).then();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Then("I should get response as 200 for each endpoint")
    public void checkAPIResponse(){

        if (apiResponse.statusCode(200).equals(true))
            System.out.println("Test case is passed");
    }

    @Then("the response should match the Json-Schema of that \"([^\"]*)\" endpoint")
    public void checkAPIWithSchema(String endpoint){

        if (apiResponse.assertThat().body(matchesJsonSchemaInClasspath(endpoint+"Schema.json")).equals(true))
            System.out.println("Test case is passed");
    }

    @When("I create new data for \"([^\"]*)\" endpoint in API Playground")
    public void createNewDataInEndpoint(String endpoint){

        TestSteps.createNewDataInAPI(endpoint);
    }

    @Then("the response should contain the newly created data for that \"([^\"]*)\" endpoint")
    public void validateNewlyCreatedData(String endpoint){

        String newId = TestSteps.newDataMap.get(endpoint);
        try {
            apiResponse = given().when().get("http://localhost:3030/"+endpoint+"/"+newId).then().statusCode(200);
        } catch (Exception e) {
            e.printStackTrace();
        }
        scenario.write(apiResponse.extract().asString());
    }

    @When("I delete data from the \"([^\"]*)\" endpoint in API Playground")
    public void deleteDataFromEndpoint(String endpoint){

        TestSteps.deleteDataFromAPI(endpoint);
    }

    @Then("the response should not contain the deleted data for that \"([^\"]*)\" endpoint")
    public void validateDataIsProperlyDeleted(String endpoint){

        String deletedId = TestSteps.newDataMap.get(endpoint);
        try {
            apiResponse = given().when().get("http://localhost:3030/"+endpoint+"/"+deletedId).then().statusCode(404);
        } catch (Exception e) {
            e.printStackTrace();
        }
        scenario.write(apiResponse.extract().asString());
    }

}
