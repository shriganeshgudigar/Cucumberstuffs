package stepDefinitions;

import BaseUtil.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class TestSteps extends Base{

    private Base base;

    public TestSteps(Base base) {
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void i_navigate_to_the_login_page() {
        System.out.println("I navigate to login page");
        base.driver.navigate().to("https://www.google.com");
    }

    @Given("^I enter username  (?:as|the) \"([^\"]+)\" and password as \"([^\"]*)\"$")
    public void i_enter_username_as_and_password_as(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I enter username " + username + " and password " + password);
    }

    @When("^I click login button$")
    public void i_click_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I click on login button");
    }

    @Then("^I should be able to see userform page$")
    public void i_should_be_able_to_see_userform_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I'm able to see Userform page");
    }


    @And("^I enter following details$")
    public void iEnterFollowingDetails(DataTable table) throws Throwable {
        System.out.println("Data is " + table.raw());
       /* List<List<String>> data = table.raw();
        System.out.println("Data at row 1 is \nUsername: " + data.get(1).get(0).toString() + "\nPassword: " + data.get(1).get(1).toString());
           */
        List<User> data = table.asList(User.class);
        for(User user:data){
            System.out.println("Username is : " + user.username + "\nPassword is : " + user.password);
        }
    }

    @And("^I enter (.*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Username is " + username + "\nPassword is " + password);
    }

    public class User{
        public String username;
        public String password;

        public User(String user, String passWord){
            username =  user;
            password =  passWord;
        }
    }
}
