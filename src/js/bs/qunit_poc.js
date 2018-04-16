load(".\\src\\js\\bs\\test-bs.js");
load(".\\src\\js\\bc\\main.js");

with(QUnit) {
  test("echo_bs", function(a) { a.ok(psIn.getProperty("testType1") == psOut.getProperty("testType1")), "Passed!" });
  test("get_account_name", function(a) { a.ok(getAccountName() == "working11"), "Passed!" });
}

QUnit.load();