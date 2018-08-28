package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import sun.net.www.protocol.http.AuthenticationHeader;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StringDataTableSteps {

    String appendedStrs = "";
    @Given("^use list of list of strings$")
    public void useListOfListOfStrings(DataTable strList) {
        List<List<String>> stringsList = strList.raw();

        appendedStrs = appendedStrs + stringsList.get(0).get(0) + " ;" ;
        appendedStrs = appendedStrs + stringsList.get(0).get(1) + " ;" ;

    }

    @Then("^print all$")
    public void printAll(){
        System.out.println(appendedStrs);
    }

    private List<String> stringsList;
    private String appendedString = "";

    @Given("^A list of strings$")
    public void aListOfStrings(List<String> stringsList) {
        this.stringsList = stringsList;

    }

    @When("^Append them all$")
    public void appendThemAll() {
        for (String str : stringsList) {
            appendedString = appendedString + str;
        }

    }

    @Then("^I should get \"([^\"]*)\"$")
    public void iShouldGet(String userString)  {

        Assert.assertEquals(appendedString, userString);
    }


    private Map<String, Investment> investmentList;
    private int inrInvestment = 0;
    private int yenInvestment = 0;

    @Given("^Investors from various geographies invest in Bloomberg fund$")
    public void investorsFromVariousGeographiesInvestInBloombergFund(List<Investment> investments)  {
        investmentList = new HashMap<String, Investment>();

        for (Investment investment: investments) {
            String key = investment.getCurrency();
            investmentList.put(key, investment);
        }

    }

    @When("^I calculate total investment in (.*) and (.*) into the fund in USD$")
    public void iCalculateTotalInvestmentInINRAndYENIntoTheFundInUSD(String firstCurrency, String secondCurrency) {
        inrInvestment += investmentList.get(firstCurrency).investmentAmt;
        yenInvestment += investmentList.get(secondCurrency).investmentAmt;
    }

    @Then("^The total investment in fund is (\\d+)$")
    public void theTotalInvestmentInFundIs(int totalInvestment)  {
        Assert.assertEquals(totalInvestment, inrInvestment+yenInvestment);
    }

    public class Investment {
        private String country;
        private Integer investmentAmt;
        private String currency;

        public Investment(String country, Integer investmentAmt, String currency) {
            this.country = country;
            this.investmentAmt = investmentAmt;
            this.currency = currency;
        }

        public String getCountry() {
            return country;
        }

        public Integer getinvestmentAmt() {
            return investmentAmt;
        }

        public String getCurrency() {
            return currency;
        }


    }

}
