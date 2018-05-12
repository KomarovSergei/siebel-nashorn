load(".\\src\\eScript_engine\\eScript.js");

try {
    var accBO = TheApplication().GetBusObject("Account");
    var accBC = accBO.GetBusComp("Account");

    accBC.SetViewMode(AllView);
    accBC.ClearToQuery();
    accBC.ActivateField("Name");
    accBC.ActivateField("Value");
    accBC.SetSearchSpec("Id", "1-39J");
    accBC.ExecuteQuery(ForwardOnly);

    if(accBC.FirstRecord()){
        print(accBC.GetFieldValue("Name"));
    }
}
catch(e) {
    throw(e)
}
finally {
    print("----- end -----");
};