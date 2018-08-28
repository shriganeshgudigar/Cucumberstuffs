package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import sun.security.util.PendingException;

public class CalculatorSteps {

    int num1;
    int num2;
    int sum;

    @Given("^I have two numbers to add (\\d+) and (\\d+)$")
    public void iHaveTwoNumbersToAddAnd(int arg0, int arg1)  {
        num1 = arg0;
        num2 = arg1;
    }

    @When("^I enter first number$")
    public void iEnterFirstNumber() {
        System.out.println("Entering first number: " + num1);
    }

    @And("^when I click on plus operator$")
    public void whenIClickOnPlusOperator() {
        System.out.println("Entering operator: " + "+");
    }

    @And("^I enter second number$")
    public void iEnterSecondNumber(){
        System.out.println("Entering second number: " + num2);
    }

    @And("^I click on equal to operator$")
    public void iClickOnEqualToOperator() {
        System.out.println("Entering operator: " + "=");
    }

    @Then("^valid sum is displayed$")
    public void validSumIsDisplayed() {
        sum = num1+num2;
        System.out.println("Sum is: " + (num1+num2));
    }

    @And("^sum matches with users value (\\d+)$")
    public void sumMatchesWithUsersValue(int arg0) {
        Assert.assertEquals(sum, arg0);

    }
}
