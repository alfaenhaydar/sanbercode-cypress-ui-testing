class loginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  inputUsername(username) {
    cy.get('[name = "username"]').type(username);
  }
  inputPassword(password) {
    cy.get('[name = "password"]').type(password);
  }
  clickLoginButton() {
    cy.get('[type="submit"]').click();
  }
  cekInterceptSummary() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary",
    ).as("getactionSummary");
  }

  waitInterceptSummary() {
    cy.wait("@getactionSummary").its("response.statusCode").should("eq", 200);
  }

  cekInterceptValidate() {
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
    ).as("postvalidate");
  }

  waitInterceptValidate() {
    cy.wait("@postvalidate").its("request.method").should("eq", "POST");
  }

  assertUrl(url) {
    cy.url().should("include", url);
  }
}

export default new loginPage();
