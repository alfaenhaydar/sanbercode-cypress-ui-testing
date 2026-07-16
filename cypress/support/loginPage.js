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
}

export default new loginPage();
