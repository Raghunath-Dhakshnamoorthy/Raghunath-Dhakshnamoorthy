package steps;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/apiPlayground.feature",
        plugin = {"pretty", "html:output/cucumber-pretty"})
public class TestRunner {


}
