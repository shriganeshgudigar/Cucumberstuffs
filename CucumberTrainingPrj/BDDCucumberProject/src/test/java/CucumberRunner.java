import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/main/resources/features"},
        glue = {"classpath:"},
            plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Reports/report.html"},
        format = {"pretty", "html:target/cucumber_qurate","json:target/cucumber_QURATE.json"}
        //tags = {"@web"}
)

public class CucumberRunner{

}




