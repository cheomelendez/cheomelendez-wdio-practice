//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/

import HomePage from "../pages/home-page";
import allureReporter from '@wdio/allure-reporter';


describe("Home", () => {
  
  // before(async () => {
  //   console.log("This could be used for test SETUP");
  // });

  beforeEach(async ()=>{
    console.log('This runs BEFORE each test case');
    //Open base URL
    await HomePage.open();
  });

  // after(async () => {
  //   console.log("This could be used for test CLEANUP");
  // });

  // afterEach(async ()=>{
  //   console.log('This runs AFTER each test case');
  // });

  it("Open URL & assert title", async () => {

    allureReporter.addSeverity("minor");

    //Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – Automation Bro"
    );
  });

  it("Open About Page & assert URL", async () => {
    
    //Open about URL
    await browser.url("https://practice.automationbro.com/about");
    //Assert URL
    await expect(browser).toHaveUrl(
      "https://practice.automationbro.com/about/"
    );
  });

  it("Click get started button & assert url contains get-started text", async () => {

    //Click get started button
    await HomePage.btnGetStarted.click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click on the logo & assert the url doesn't content get-started text", async () => {

    allureReporter.addFeature("Logo Verification");
    
    //Click get started button
    await HomePage.imgLogo.click();

    // Assert url contains get-started text
    await expect(browser).not.toHaveUrlContaining("get-started");
  });

  it("Fid heading element & assert the text", async () => {

    //find heading element
    const headingElem = await HomePage.txtHeading;
    //get text [used for text manipulation.]
    const headingText = await headingElem.getText();
    // Assert url contains get-started text
    await expect(headingElem).toHaveText("Think different. Make different."); // wdio expect
    await expect(headingText).toEqual("Think different. Make different."); // Jest Library
  });
});
