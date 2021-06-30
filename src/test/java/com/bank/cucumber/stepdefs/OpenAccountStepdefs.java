package com.bank.cucumber.stepdefs;

import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.OpenAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class OpenAccountStepdefs {
    @And("^I click on open account tab$")
    public void iClickOnOpenAccountTab() throws InterruptedException {
        Thread.sleep(1000);
        new BankManagerLoginPage().setClickOnOpenAccountButton();
    }

    @And("^I enter customer name <\"([^\"]*)\">$")
    public void iEnterCustomerName(String customername) throws InterruptedException {
        Thread.sleep(1000);
        new OpenAccountPage().setCustomerName(customername);
    }

    @And("^I enter currency <\"([^\"]*)\">$")
    public void iEnterCurrency(String pound) throws InterruptedException {
        Thread.sleep(1000);
        new OpenAccountPage().setEnterCurrency(pound);

    }

    @And("^I click on poocess button$")
    public void iClickOnPoocessButton() throws InterruptedException {
        Thread.sleep(1000);
        new OpenAccountPage().setclickONProcessButton();
    }

    @Then("^I should see Account created successfully$")
    public void iShouldSeeAccountCreatedSuccessfully() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("Account created successfully with account Number :1016", new OpenAccountPage().verifyCustomerAddedSuccessfullyText());
    }

    @And("^I click on process button$")
    public void iClickOnProcessButton() throws InterruptedException {
        Thread.sleep(1000);
        new OpenAccountPage().setclickONProcessButton();
    }

}
