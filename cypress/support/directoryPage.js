class directoryPage {
  clickMenuDirectory() {
    cy.get('[href="/web/index.php/directory/viewDirectory"]').click();
  }
  inputEmployeeName(employee) {
    cy.get('[placeholder="Type for hints..."]').clear().type(employee);

    cy.contains(".oxd-autocomplete-option", employee).click();
  }

  cekInterceptSearch(method, url, alias) {
    cy.intercept(method, url).as(alias);
  }
  cekWaitInterceptSearch(alias, statusCode) {
    cy.wait(`@${alias}`).its("response.statusCode").should("eq", statusCode);
  }

  cekInterceptReset(method, url, alias) {
    cy.intercept(method, url).as(alias);
  }
  cekWaitInterceptReset(alias, statusCode) {
    cy.wait(`@${alias}`).its("response.statusCode").should("eq", statusCode);
  }
  clickSearchButton() {
    cy.get('[type="submit"]').click();
  }

  selectJobTitle(jobTitle) {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
    ).click();
    cy.contains(".oxd-select-dropdown .oxd-select-option", jobTitle).click();
  }

  selectLocation(location) {
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
    ).click();
    cy.contains(".oxd-select-dropdown .oxd-select-option", location).click();
  }

  assertionUrl(url) {
    cy.url().should("include", url);
  }

  clickResetButton() {
    cy.get('[type="reset"]').click();
  }

  clickprofileEmployee() {
    cy.get(".oxd-sheet").click();
  }

  inputEmployeeNameSingle(employee) {
    cy.get('[placeholder="Type for hints..."]').clear().type(employee);
  }
}

export default new directoryPage();
