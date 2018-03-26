try {
    const bc = Java.type("com.siebel.data.SiebelBusComp");
    const bo = Java.type("com.siebel.data.SiebelBusObject");
    const se = Java.type("com.siebel.data.SiebelException");
    var sa;

    (function connect(conStr, usr, pass, lang) {
       const sdb = Java.type("com.siebel.data.SiebelDataBean");
       sa = new sdb();
       sa.login(conStr, usr, pass, lang);
    })("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "*****", "enu");

    let accountBO = sa.getBusObject("Account");
    let accountBC = accountBO.getBusComp("Account");
    accountBC.clearToQuery();
    accountBC.setSearchSpec("Id", "1-39J");
    accountBC.executeQuery(true);
    if (accountBC.firstRecord()) {
        const t = accountBC.getFieldValue("Name");
        print(t);
    }
} catch (e) {
    print("-----error-----");
    throw new Error(e);
} finally {
    accountBC = null;
    accountBO = null;
    sa.logoff();
}