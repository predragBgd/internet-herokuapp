"use strict";
require("chromedriver");
const webdriver = require("selenium-webdriver");
const chai = require("chai");
const { expect, assert } = require("chai");
const { By, until } = require("selenium-webdriver");
const path = require("path");

const HomePage = require("../pages/home.page");
const AddRemovePage = require("../pages/addRemove.page");
const FileUploadPage = require("../pages/fileUpload.page");

describe("Herokuapp test", () => {
  let driver;
  let homePage;
  let addRemovePage;
  let fileUploadPage;

  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    addRemovePage = new AddRemovePage(driver);
    fileUploadPage = new FileUploadPage(driver);
  });
  after(async () => {
    await driver.quit();
  });
  it("Open Home Page", async () => {
    await homePage.goToPage();
    const pageH1 = await homePage.getH1();
    assert.equal(pageH1, "Welcome to the-internet");
  });
  it("Add/Remove Elements", async () => {
    await addRemovePage.goToAddRemovePage();
    const addRemovePageH3 = await addRemovePage.getProblemHeading();
    expect(addRemovePageH3).to.eq("Add/Remove Elements");
    const addElement = await addRemovePage.addElement();
    for (let i = 0; i < 6; i++) {
      await addElement.click();
    }
    let btnNo = await addRemovePage.getBtnNo();
    expect(btnNo.length).to.eq(6);
    const deleteElement = await addRemovePage.deleteElement3();
    await deleteElement.click();
    let btnNo2 = await addRemovePage.getBtnNo();
    expect(await btnNo2.length).to.eq(5);
  });
  it("File Upload", async () => {
    await fileUploadPage.goToFileUploadPage();
    const fileUploadPageH3 = await fileUploadPage.getProblemHeading();
    expect(fileUploadPageH3).to.eq("File Uploader");

    const fileToUpload = "resources/Predrag_Curdic_CV.pdf";
    const filePath = path.join(process.cwd(), fileToUpload);
    const selectFile = await fileUploadPage.getFileBtn();
    selectFile.sendKeys(filePath);
    const uploadBtn = await fileUploadPage.getUploadBtn();
    uploadBtn.click();
    await driver.wait(until.elementLocated(By.css("h3")));
    const fileUploadedConfirm = await fileUploadPage.getProblemHeading();
    expect(fileUploadedConfirm).to.eq("File Uploaded!");
    // assert.equal(await FileUploadedConfirm, "File Uploaded!");
    await driver.sleep(3000);
  });
});
