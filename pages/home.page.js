"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class HomePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  goToPage() {
    this.#driver.get("https://the-internet.herokuapp.com");
  }
  getH1() {
    return this.#driver.findElement(By.css("h1")).getText();
  }
};
