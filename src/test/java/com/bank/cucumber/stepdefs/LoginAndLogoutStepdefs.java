package com.bank.cucumber.stepdefs;

import com.bank.pages.CustomerLoginPage;
import com.bank.pages.CustomerPage;
import com.bank.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LoginAndLogoutStepdefs {
    @And("^I click on homepage button$")
    public void iClickOnHomepageButton() throws InterruptedException {
        Thread.sleep(1000);
new HomePage().setClickOnHomePageButton();
    }

    @And("^I click on Customer login link$")
    public void iClickOnCustomerLoginLink() throws InterruptedException {
        Thread.sleep(1000);
new HomePage().setClickOnCustomerLoginLink();


    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() throws InterruptedException {
        Thread.sleep(1000);
new CustomerLoginPage().setClickOnLogInButton();
    }

    @Then("^I should see logout successfully$")
    public void iShouldSeeLogoutSuccessfully() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("Logout",new CustomerLoginPage().setVerifyLogOutText() );
    }

    @And("^I click on logout$")
    public void iClickOnLogout() throws InterruptedException {
        Thread.sleep(1000);
        new CustomerLoginPage().setLogOutButton();

    }

    @Then("^I should see name is displayed$")
    public void iShouldSeeNameIsDisplayed() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals("Your Name :", new CustomerLoginPage().setVerifyYourName());
    }
}
