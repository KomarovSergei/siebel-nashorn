load(".\\src\\tests\\bc\\account.js");
load(".\\src\\tests\\bs\\echo.js");

with(QUnit) {
  test("get_account_name", function(a) { a.ok(getAccountName() == "working11"), "Passed!" });
  test("echo_bs", function(a) { a.ok(psIn.getProperty("testType1") == psOut.getProperty("testType1")), "Passed!" });
}

QUnit.load();