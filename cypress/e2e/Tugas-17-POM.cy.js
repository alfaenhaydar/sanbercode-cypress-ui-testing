import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";

describe("Test Scenario Fungsi Login", () => {
  it("TC01 - Login dengan username dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
  });

  it("TC02 - User login dengan username yang tidak diisi dan password valid", () => {
    loginPage.visit();
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
  });

  it("TC03 - User login dengan username valid dan password yang tidak diisi", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.clickLoginButton();
  });

  it("TC04 - User login dengan username yang invalid dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameInvalid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
  });

  it("TC05 - User login dengan username yang valid dan password yang invalid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordInvalid);
    loginPage.clickLoginButton();
  });

  it("TC06 - User login tanpa mengisi username dan password", () => {
    loginPage.visit();
    loginPage.clickLoginButton();
  });

  it("TC07 - User login dengan username valid dan dengan kesalahan penulisan huruf besar atau kecil pada password", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordWithWrongCase);
    loginPage.clickLoginButton();
  });

  it("TC08 - User login menggunakan username dengan emoticon dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameWithEmoticon);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
  });

  it("TC09 - User login dengan awal username diawali dengan spasi", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameWithLeadingSpace);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
  });
});
