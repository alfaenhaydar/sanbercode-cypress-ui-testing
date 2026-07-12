describe("Test Scenario Fungsi Login", () => {
  it("TC01 - Login dengan username dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "dashboard/index");
  });

  it("TC02 - User login dengan username dan password yang valid dengan cara di copy paste", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').invoke("val", "Admin").trigger("input");
    cy.get('[name = "password"]').invoke("val", "admin123").trigger("input");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "dashboard/index");
  });

  it("TC03 - User login dengan email yang tidak diisi dan password valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC04 - User login dengan email valid dan password yang tidak diisi", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("Admin");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC05 - User login dengan email yang invalid dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("wakwaw");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC06 - User login dengan email yang valid dan password yang invalid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("aduhsalah");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC07 - User login tanpa mengisi email dan password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC08 - User login dengan kesalahan penulisan huruf besar atau kecil pada email dan menggunakan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("aDmin");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });
  // pada test case 8 TC08, terdapat bug karena user masih dapat login walaupun terdapat kesalahan penulisan huruf besar atau kecil pada email. Seharusnya user tidak dapat login jika terdapat kesalahan penulisan huruf besar atau kecil pada email.

  it("TC09 - User login dengan email valid dan dengan kesalahan penulisan huruf besar atau kecil pada password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin");
    cy.get('[name = "password"]').type("Admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC10 - User login menggunakan username dengan emoticon dan password yang valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin😃");
    cy.get('[name = "password"]').type("Admin123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC11 - User login dengan email yang valid dan memasukan password dengan emoticon", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type("admin");
    cy.get('[name = "password"]').type("Admin123😃");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });

  it("TC12 - User login dengan awal email diawali dengan spasi", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('[name = "username"]').type(" admin");
    cy.get('[name = "password"]').type("Admin123😃");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "login");
  });
});
