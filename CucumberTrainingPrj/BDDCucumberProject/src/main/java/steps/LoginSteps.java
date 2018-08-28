package steps;

import config.appConfig;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.LoginPage;
import supportMethods.LoginPageMethods;
import util.DriverFactory;
import java.sql.Driver;

public class LoginSteps {

    WebDriver browser = DriverFactory.getDriver();

    @Given("^I have application url launched$")
    public void iHaveUrlLaunched() {
        browser.get(appConfig.url);
    }

    @When("^I login to the application with valid Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void loginToAppURL(String UserName, String Password) {
        LoginPageMethods.login(UserName, Password);

    }

    @Then("^Application Home is displayed$")
    public void applicationHomeIsDisplayed(String welcomeMsg)  {
        System.out.println(welcomeMsg);
        Assert.assertTrue(browser.findElement(LoginPage.welcomeMsg).getText().equals(welcomeMsg));
    }

}

