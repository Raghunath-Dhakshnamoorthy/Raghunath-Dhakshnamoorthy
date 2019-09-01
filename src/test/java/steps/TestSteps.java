package steps;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import org.yecht.Data;
import utils.CommonUtils;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.LinkedHashMap;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class TestSteps {

    public static String newlyCreatedId;
    public static HashMap<String, String> newDataMap = new LinkedHashMap<String, String>();

    /**
     * This method is used to create data in the API by using POST request
     * @param endpoint - represents the endpoint in Best Buy API Playground
     */
    public static void createNewDataInAPI(String endpoint){

        String requestBody = null;

        switch (endpoint){
            case "products":
                requestBody = CommonUtils.productRequestBody;
                break;
            case "stores":
                requestBody = CommonUtils.storeRequestBody;
                break;
            case "services":
                requestBody = CommonUtils.serviceRequestBody;
                break;
            case "categories":
                requestBody = CommonUtils.categoryRequestBody;
                break;
        }
        ValidatableResponse createNewDataResponse = null;
        try {
            createNewDataResponse = given()
                    .header("Content-Type", "application/json")
                    .body(requestBody)
                    .post("http://localhost:3030/"+endpoint).then().statusCode(201);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject jsonObject = new JSONObject(createNewDataResponse.extract().asString());
        int newId;
        if (endpoint.equalsIgnoreCase("categories"))
            newlyCreatedId = jsonObject.getString("id");
        else {
            newId = jsonObject.getInt("id");
            newlyCreatedId = Integer.toString(newId);
        }
        //Saves the newly created ID to a Map which would be used for other actions
        if (!newDataMap.containsKey(endpoint))
            newDataMap.put(endpoint, newlyCreatedId);
    }

    /**
     * This method is used to delete data from API response by using DELETE request
     * @param endpoint - represents the endpoint in Best Buy API Playground
     */
    public static void deleteDataFromAPI(String endpoint){

        String deleteId = newDataMap.get(endpoint);

        try {
            ValidatableResponse deleteResponse = given()
                    .header("Content-Type", "application/json")
                    .delete("http://localhost:3030/"+endpoint+"/"+deleteId).then().statusCode(200);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
