import loginPage from "../../support/loginPage";
import loginData from "../../fixtures/loginData.json";
import directoryPage from "../../support/directoryPage";
import directoryData from "../../fixtures/directoryData.json";

describe("Test Skenario Fungsi Menu Directory", () => {
  it("TC_DIR_01 - User mencari employee dengan nama yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.inputEmployeeName(directoryData.employeeNameValid);
    directoryPage.cekInterceptSearch(
      directoryData.interceptEmployeeValid.method,
      directoryData.interceptEmployeeValid.url,
      directoryData.interceptEmployeeValid.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptEmployeeValid.alias,
      directoryData.interceptEmployeeValid.statusCode,
    );
  });

  it("TC_DIR_02 - User mencari employee berdasarkan job title", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.selectJobTitle(directoryData.jobTitle);
    directoryPage.cekInterceptSearch(
      directoryData.interceptJobTitle.method,
      directoryData.interceptJobTitle.url,
      directoryData.interceptJobTitle.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptJobTitle.alias,
      directoryData.interceptJobTitle.statusCode,
    );
  });

  it("TC_DIR_03 - User mencari employee berdasarkan location", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.selectLocation(directoryData.location);
    directoryPage.cekInterceptSearch(
      directoryData.interceptLocation.method,
      directoryData.interceptLocation.url,
      directoryData.interceptLocation.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptLocation.alias,
      directoryData.interceptLocation.statusCode,
    );
  });

  it("TC_DIR_04 - User klik button reset", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.cekInterceptReset(
      directoryData.interceptReset.method,
      directoryData.interceptReset.url,
      directoryData.interceptReset.alias,
    );
    directoryPage.clickResetButton();
    directoryPage.cekWaitInterceptReset(
      directoryData.interceptReset.alias,
      directoryData.interceptReset.statusCode,
    );
  });

  it("TC_DIR_05 - User klik button search tanpa mengisi form", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.cekInterceptSearch(
      directoryData.interceptSearchFailed.method,
      directoryData.interceptSearchFailed.url,
      directoryData.interceptSearchFailed.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptSearchFailed.alias,
      directoryData.interceptSearchFailed.statusCode,
    );
  });

  it("TC_DIR_06 - User melihat detil profil employee", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.inputEmployeeName(directoryData.employeeNameValid);
    directoryPage.cekInterceptSearch(
      directoryData.interceptEmployeeValid.method,
      directoryData.interceptEmployeeValid.url,
      directoryData.interceptEmployeeValid.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptEmployeeValid.alias,
      directoryData.interceptEmployeeValid.statusCode,
    );
    directoryPage.clickprofileEmployee();
  });

  it("TC_DIR_07 - User input nama employee invalid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.inputEmployeeNameSingle(directoryData.employeeNameInvalid);
    directoryPage.clickSearchButton();
  });

  it("TC_DIR_08 - User mencari employee dengan nama yang valid", () => {
    loginPage.visit();
    loginPage.inputUsername(loginData.usernameValid);
    loginPage.inputPassword(loginData.passwordValid);
    loginPage.clickLoginButton();
    loginPage.assertUrl(loginData.urlDashboard);
    directoryPage.clickMenuDirectory();
    directoryPage.inputEmployeeName(directoryData.employeeNameValid);
    directoryPage.selectJobTitle(directoryData.jobTitle);
    directoryPage.selectLocation(directoryData.location);
    directoryPage.cekInterceptSearch(
      directoryData.interceptEmployeeValid.method,
      directoryData.interceptEmployeeValid.url,
      directoryData.interceptEmployeeValid.alias,
    );
    directoryPage.clickSearchButton();
    directoryPage.cekWaitInterceptSearch(
      directoryData.interceptEmployeeValid.alias,
      directoryData.interceptEmployeeValid.statusCode,
    );
  });
});
