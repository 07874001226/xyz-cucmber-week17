package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class WithdrawStepdefs {
    @And("^I click on withdraw tab$")
    public void iClickOnWithdrawTab() throws InterruptedException {
        Thread.sleep(1000);
        new AccountPage().setClickOnWithdrawlTab();
    }

    @And("^I enter withdraw amount<\"([^\"]*)\">$")
    public void iEnterWithdrawAmount(String amount) throws InterruptedException {
        Thread.sleep(1000);
        new AccountPage().amount100(amount);
    }

    @And("^I click on withraw button$")
    public void iClickOnWithrawButton() throws InterruptedException {
        Thread.sleep(1000);
        new AccountPage().setClickOnWithdrawlButton();
    }

    @Then("^I should see the transcation successfully message$")
    public void iShouldSeeTheTranscationSuccessfullyMessage() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("Transaction successful", new AccountPage().setVerifyWithdrawlSuccessful());
    }
}
