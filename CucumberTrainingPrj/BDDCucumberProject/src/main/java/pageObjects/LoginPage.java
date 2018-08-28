package pageObjects;

import org.openqa.selenium.By;

public class LoginPage {

    //public static final By userNametxt = By.xpath(".//*[@id='uid']");
    public static final By userNameTxt = By.id("uid");
    public static final By passwordTxt = By.id("passw");
    public static final By loginBtn = By.name("btnSubmit");
    public static final By  welcomeMsg = By.xpath(".//p[contains(text(), 'Welcome to Altoro Mutual Online')]");

}
