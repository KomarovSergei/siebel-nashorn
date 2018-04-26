try {
    var getpsOutProp = function() {

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

        return psOut.getProperty("testType1");
    }
} catch (e) {
    print("-----error-----");
    throw new Error(e);
} finally {
    psIn = null;
    psOut = null;
    bs = null;
}