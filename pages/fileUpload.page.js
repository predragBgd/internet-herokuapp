"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class FileUploadPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  goToFileUploadPage() {
    this.#driver.get(`https://the-internet.herokuapp.com/upload`);
  }
  getFileBtn() {
    return this.#driver.findElement(By.id("file-upload"));
  }
  getUploadBtn() {
    return this.#driver.findElement(By.id("file-submit"));
  }
};
