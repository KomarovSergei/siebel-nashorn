try {
    print("-----start-----")
    var sdb = Java.type("com.siebel.data.SiebelDataBean");
    var bc = Java.type("com.siebel.data.SiebelBusComp");
    var bo = Java.type("com.siebel.data.SiebelBusObject");
    var se = Java.type("com.siebel.data.SiebelException");

    var sa = new sdb();
    sa.login("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "*****", "enu");
    var accountBO = sa.getBusObject("Account");
    var accountBC = accountBO.getBusComp("Account");
    accountBC.clearToQuery();
    accountBC.setSearchSpec("Id", "1-39J");
    accountBC.executeQuery(true);
    if (accountBC.firstRecord()) {
        var t = accountBC.getFieldValue("Name");
        print(t);

        accountBC = null;
        accountBO = null;
        sa.logoff();
    }
} catch (e) {
    print("-----error-----");
    throw new Error(e);
} finally {
    print("-----end-----");
}