package utils;

public class CommonUtils {

    public static String productRequestBody = "{\n" +
            "\t\"name\": \"New Product\",\n" +
            "\t\"type\": \"Hard Good\",\n" +
            "\t\"upc\": \"12345676\",\n" +
            "\t\"price\": 99.99,\n" +
            "\t\"description\": \"This is a placeholder request for creating a new product.\",\n" +
            "\t\"model\": \"NP12345\"\n" +
            "}";

    public static String storeRequestBody = "{      \n" +
            "\t  \"name\": \"New Store\",\n" +
            "      \"type\": \"BigBox\",\n" +
            "      \"address\": \"123 Fake St\",\n" +
            "      \"address2\": \"\",\n" +
            "      \"city\": \"Springfield\",\n" +
            "      \"state\": \"MN\",\n" +
            "      \"zip\": \"55123\",\n" +
            "      \"lat\": 44.969658,\n" +
            "      \"lng\": -93.449539,\n" +
            "      \"hours\": \"Mon: 10-9; Tue: 10-9; Wed: 10-9; Thurs: 10-9; Fri: 10-9; Sat: 10-9; Sun: 10-8\"\n" +
            "}";

    public static String serviceRequestBody = "{      \n" +
            "\t  \"name\": \"New Service\"\n" +
            "}";

    public static String categoryRequestBody = "{      \n" +
            "\t\"id\": \"abc12321cba\",\n" +
            "\t\"name\": \"New Category\"\n" +
            "}";

}
