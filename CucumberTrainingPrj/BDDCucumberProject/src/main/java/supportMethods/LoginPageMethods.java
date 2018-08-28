package supportMethods;

import org.openqa.selenium.WebDriver;
import pageObjects.LoginPage;
import util.DriverFactory;

public class LoginPageMethods {

    static WebDriver browser = DriverFactory.getDriver();
    public static void login(String userName, String password){

        browser.findElement(LoginPage.userNameTxt).clear();
        browser.findElement(LoginPage.userNameTxt).sendKeys(userName);
        browser.findElement(LoginPage.passwordTxt).sendKeys(password);
        browser.findElement(LoginPage.loginBtn).click();

    }

}
