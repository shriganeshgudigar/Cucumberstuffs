package Hooks;

import BaseUtil.Base;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class Hook extends Base{

    private Base base;
    public Hook(Base base){
        this.base = base;
    }

    /**
     * @param
     */
    @Before
    public void initializeTest(Scenario scenario){
        System.out.println("Before scenario " +  scenario.getName().toString());
        base.driver = new FirefoxDriver();
        base.driver.manage().window().maximize();
        base.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        base.driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
    }


    /**
     * @param scenario
     */
    @After
    public void tearDownTest(Scenario scenario){
        System.out.println("After scenario " +  scenario.getName().toString());
        base.driver.close();
    }
}
