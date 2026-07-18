import loginPage from "../../support/loginPage";
import loginData from "../../fixtures/loginData.json";

describe("Test Scenario Fungsi Login", () => {
  it("TC01 - Login dengan username dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.cekInterceptSummary();
    loginPage.clickLoginButton();
    loginPage.waitInterceptSummary();
    loginPage.assertUrl(loginData.urlDashboard);
  });

  it("TC02 - User login dengan username yang invalid dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameInvalid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC03 - User login dengan username yang valid dan password yang invalid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordInvalid);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC04 - User login dengan username valid dan dengan kesalahan penulisan huruf besar atau kecil pada password", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordWithWrongCase);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC05 - User login menggunakan username dengan emoticon dan password yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameWithEmoticon);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC06 - User login dengan awal username diawali dengan spasi", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameWithLeadingSpace);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC07 - User login dengan username yang valid dan memasukan password dengan diawali spasi", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordWithLeadingSpace);
    loginPage.cekInterceptValidate();
    loginPage.clickLoginButton();
    loginPage.waitInterceptValidate();
    loginPage.assertUrl(loginData.urlLoginPage);
  });

  it("TC08 - User login tanpa mengisi username dan password", () => {
    loginPage.visit();
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlLoginPage);
  });
});
