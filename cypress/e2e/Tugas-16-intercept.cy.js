describe("Test Scenario Fungsi Login", () => {
  it("TC01 - Login dengan username dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary",
    ).as("getactionSummary");
    cy.get('[type="submit"]').click();
    cy.wait("@getactionSummary").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "dashboard/index");
  });

  it("TC02 - User login dengan username dan password yang valid dengan cara di copy paste", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').invoke("val", "Admin").trigger("input");
    cy.get('[name = "password"]').invoke("val", "admin123").trigger("input");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts",
    ).as("getshortcuts");
    cy.get('[type="submit"]').click();
    cy.wait("@getshortcuts").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "dashboard/index");
  });

  it("TC03 - User login dengan username yang invalid dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("wakwaw");
    cy.get('[name = "password"]').type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages",
    ).as("getmessages");
    cy.get('[type="submit"]').click();
    cy.wait("@getmessages").its("response.statusCode").should("eq", 304);
    cy.url().should("include", "login");
  });

  it("TC04 - User login dengan username yang valid dan password yang invalid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("aduhsalah");
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
    ).as("postvalidate");
    cy.get('[type="submit"]').click();
    cy.wait("@postvalidate").its("request.method").should("eq", "POST");
    cy.url().should("include", "login");
  });

  it("TC05 - User login dengan username valid dan dengan kesalahan penulisan huruf besar atau kecil pada password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin");
    cy.get('[name = "password"]').type("Admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages",
    ).as("getmessages");
    cy.get('[type="submit"]').click();
    cy.wait("@getmessages")
      .its("request.url")
      .should("include", "/index.php/core/i18n/messages");
    cy.url().should("include", "login");
  });

  it("TC06 - User login menggunakan username dengan emoticon dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin😃");
    cy.get('[name = "password"]').type("Admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    ).as("loginpage");
    cy.get('[type="submit"]').click();
    cy.wait("@loginpage").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "login");
  });

  it("TC07 - User login dengan username yang valid dan memasukan password dengan emoticon", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin");
    cy.get('[name = "password"]').type("Admin123😃");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    ).as("loginpage");
    cy.get('[type="submit"]').click();
    cy.wait("@loginpage").its("request.method").should("eq", "GET");
    cy.url().should("include", "login");
  });

  it("TC08 - User login dengan awal username diawali dengan spasi", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type(" admin");
    cy.get('[name = "password"]').type("Admin123😃");
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
    ).as("postvalidate");
    cy.get('[type="submit"]').click();
    cy.wait("@postvalidate").its("response.statusCode").should("eq", 302);
    cy.url().should("include", "login");
  });
});
