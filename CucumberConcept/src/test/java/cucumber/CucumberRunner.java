package cucumber;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        format={"pretty", "html:target/cucumber"},
        features="src/test/java/Feature",
        glue={"stepDefinitions", "Hooks", "BaseUtil"},
        tags="@scenario"
)
public class CucumberRunner{

}
