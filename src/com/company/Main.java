package com.company;

import com.siebel.data.SiebelBusComp;
import com.siebel.data.SiebelBusObject;
import com.siebel.data.SiebelDataBean;
import com.siebel.data.SiebelException;
import org.junit.Test;

import static org.junit.Assert.*;

public class Main {
    public static void main(String[] args) {

    }

    @Test
    public void test1() throws SiebelException {
        try {
            SiebelDataBean sa = new SiebelDataBean();
            sa.login("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "*****", "enu");

            SiebelBusObject BO = sa.getBusObject("Account");
            SiebelBusComp BC = BO.getBusComp("Account");
            BC.clearToQuery();
            BC.setSearchSpec("Id", "1-39J");
            BC.executeQuery(true);
            if (BC.firstRecord()) {

                String t = BC.getFieldValue("Name");

                assertEquals(
                        "Name is not correct",
                        "working",
                        t
                );

                BO = null;
                BC = null;
                sa.logoff();
            }
        }
        catch(SiebelException e) {
            e.printStackTrace();
        }
    }
}
