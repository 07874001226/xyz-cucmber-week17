package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class DepositeStepdefs {
    @And("^I click on deposite tab$")
    public void iClickOnDepositeTab() throws InterruptedException {
        Thread.sleep(1000);
        new AccountPage().setClickOnDepositeTab();
    }

    @And("^I enter Amount<\"([^\"]*)\">$")
    public void iEnterAmount(String amount) throws InterruptedException {
        Thread.sleep(1000);

        new AccountPage().amount100(amount);
    }

    @And("^I click on deposite button$")
    public void iClickOnDepositeButton() throws InterruptedException {
        Thread.sleep(1000);
        new AccountPage().setClickOnDepositeButton();
    }

    @Then("^I should see deposite successfully message$")
    public void iShouldSeeDepositeSuccessfullyMessage() {
        Assert.assertEquals("Deposit Successful",new AccountPage().setVerifyDepositeSuccessful());
    }
}
