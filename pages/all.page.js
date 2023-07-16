"use strict";

const { By } = require("selenium-webdriver");

module.exports = class AllPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getProblemHeading() {
    return this.#driver.findElement(By.css("h3")).getText();
  }
};
