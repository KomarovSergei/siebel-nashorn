// to do
// function connect to another js file (how to connect)
// add some test framework
try {
    var getAccountName = function() {
        var sa;

        (function importClasses(clas1, clas2, clas3) {
            const bc = Java.type(clas1);
            const bo = Java.type(clas2);
            const se = Java.type(clas3);
        })("com.siebel.data.SiebelBusComp", "com.siebel.data.SiebelBusObject", "com.siebel.data.SiebelException");

        (function connect(conStr, usr, pass, lang) {
           const sdb = Java.type("com.siebel.data.SiebelDataBean");
           sa = new sdb();
           sa.login(conStr, usr, pass, lang);
        })("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "Rjkjyrb1", "enu");

        let accountBO = sa.getBusObject("Account");
        let accountBC = accountBO.getBusComp("Account");
        accountBC.clearToQuery();
        accountBC.setSearchSpec("Id", "1-39J");
        accountBC.executeQuery(true);
        if (accountBC.firstRecord()) {
            var accountName = accountBC.getFieldValue("Name");
        }

        return accountName
    }
} catch (e) {
    print("-----error-----");
    throw new Error(e);
} finally {
    accountBC = null;
    accountBO = null;
}