package com.bank.cucumber.stepdefs;

import com.bank.pages.AddCustomerPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Alert;

public class AddCustomerStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().setClickOnbankManagerLoginLink();
    }

    @And("^I click on add customer tab$")
    public void iClickOnAddCustomerTab() throws InterruptedException {
        Thread.sleep(1000);
        new BankManagerLoginPage().setClickOnAddCustomerTab();
    }

    @And("^I enter firstname<\"([^\"]*)\">$")
    public void iEnterFirstname(String firstname) throws InterruptedException {
        Thread.sleep(1000);
        new AddCustomerPage().setEnterFirstName(firstname);

    }

    @And("^I enter lastname<\"([^\"]*)\">$")
    public void iEnterLastname(String lastname) throws InterruptedException {
        Thread.sleep(1000);
        new AddCustomerPage().setEnterLastName(lastname);

    }

    @And("^I enter Post code<\"([^\"]*)\">$")
    public void iEnterPostCode(String postcode) throws InterruptedException {
        Thread.sleep(1000);
        new AddCustomerPage().setEnterPostCode(postcode);

    }



    @Then("^I should see message customer added successfuly$")
    public void iShouldSeeMessageCustomerAddedSuccessfuly() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("Customer added successfully with customer id :6",new AddCustomerPage().verifyCustomerAddedSuccessfullyText());
    }

    @And("^I click on Alert tab$")
    public void iClickOnAlertTab() throws InterruptedException {
        Thread.sleep(1000);
        new AddCustomerPage().clickOnOkAlert();
    }

    @And("^I click on add customer button$")
    public void iClickOnAddCustomerButton() {
        new AddCustomerPage().setClickOnAddCustomer();
    }
}
