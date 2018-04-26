load(".\\src\\lib\\qunit-1.18.0.js");

load(".\\src\\tests\\bc\\account.js");
load(".\\src\\tests\\bs\\echo.js");

// show QUnit results to the console
with(QUnit) {
  init();
  log(function(d) {
    if (!d.result) {
      var message = d.name + "\tFAIL" + d.source;
      message += " actual: " + d.actual + " <> expected: " + d.expected;
      print(message);
    } else {
      print(d.name + " done success!");
    }
  });
  done(function(d) {
    print("time:\t",d.runtime,"ms");
    print("total:\t",d.total);
    print("passed:\t",d.passed);
    print("failed:\t",d.failed);
  });
}

// run tests
with(QUnit) {
  test("get_account_name", function(a) {
    a.ok(getAccountName() == "working11"),
      "Passed!"
    });
  test("echo_bs", function(a) {
    a.ok(getpsOutProp() == "testVal1"),
      "Passed!"
    });
}

QUnit.load();