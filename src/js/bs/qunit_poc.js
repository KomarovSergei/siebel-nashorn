load(".\\src\\js\\bs\\test-bs.js");

with(QUnit) {
//  test("test1", function(a) { a.equal(true,true); });
  test("echo_bs", function(a) { a.ok(psIn.getProperty("testType1") == psOut.getProperty("testType1")), "Passed!" });
}

QUnit.load();