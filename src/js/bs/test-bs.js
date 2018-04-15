load(".\\src\\js\\bs\\qunit-1.18.0.js");

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

try {
    var sa;

    (function importClasses(clas1, clas2, clas3) {
        const bc = Java.type(clas1);
        const bo = Java.type(clas2);
        const se = Java.type(clas3);
    })("com.siebel.data.SiebelService", "com.siebel.data.SiebelPropertySet", "com.siebel.data.SiebelException");

    (function connect(conStr, usr, pass, lang) {
       const sdb = Java.type("com.siebel.data.SiebelDataBean");
       sa = new sdb();
       sa.login(conStr, usr, pass, lang);
    })("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "Rjkjyrb1", "enu");

    var psIn = sa.newPropertySet();
    psIn.setProperty("testType1", "testVal1");
    var psOut = sa.newPropertySet();
    var bs = sa.getService("Workflow Utilities");
    bs.invokeMethod("Echo", psIn, psOut);
    print(psOut.getProperty("testType1"));

} catch (e) {
    print("-----error-----");
    throw new Error(e);
} finally {

}