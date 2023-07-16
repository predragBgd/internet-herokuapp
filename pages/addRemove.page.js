"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class AddRemovePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  goToAddRemovePage() {
    this.#driver.get(`https://the-internet.herokuapp.com/add_remove_elements/`);
  }
  addElement() {
    return this.#driver.findElement(By.css("button"));
  }
  deleteElement3() {
    return this.#driver.findElement(By.xpath(`//*[@id="elements"]/button[3]`));
  }
  getBtnNo() {
    return this.#driver.findElements(By.xpath(`//*[@id="elements"]/button`));
  }
};
