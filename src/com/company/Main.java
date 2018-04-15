package com.company;

import com.siebel.data.SiebelBusComp;
import com.siebel.data.SiebelBusObject;
import com.siebel.data.SiebelDataBean;
import com.siebel.data.SiebelException;
import com.siebel.data.SiebelPropertySet;
import com.siebel.data.SiebelService;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.junit.Assert.*;

public class Main {
    public static SiebelDataBean sa = new SiebelDataBean();

    @Before
    public void prepareConnect() {
        try {
            sa.login("Siebel://localhost:2321/SBA_82/FINSObjMgr_enu", "SADMIN", "Rjkjyrb1", "enu");
        } catch (SiebelException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void bs_eai_siebel_adapter() throws SiebelException {
        try {
            SiebelPropertySet psIn = sa.newPropertySet();
            psIn.setProperty("OutputIntObjectName", "EAI Account");
            psIn.setProperty("PrimaryRowId", "1-39J");
            SiebelPropertySet psOut = sa.newPropertySet();
            SiebelService bs = sa.getService("EAI Siebel Adapter");
            bs.invokeMethod("Query", psIn, psOut);

            // write to file
//            SiebelPropertySet psIn3 = sa.newPropertySet();
//            psIn3.setProperty("<Value>"
//            psIn3.setProperty("FileName", "c:\\test.xml");
//            SiebelPropertySet psOut3 = sa.newPropertySet();
//            SiebelService bs3 = sa.getService("EAI XML Write to File");
//            bs.invokeMethod("WritePropSet", psIn3, psOut3);

            //convert to XML
//            SiebelPropertySet psIn2 = sa.newPropertySet();
//            psIn2.setType("XMLHierarchy");
//            psIn2.addChild(psOut);
//            SiebelPropertySet psOut2 = sa.newPropertySet();
//            SiebelService bs2 = sa.getService("XML Hierarchy Converter");
//            bs2.invokeMethod("XMLHierToXMLDoc", psIn2, psOut2);

            System.out.println(psOut);
        } catch (SiebelException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void bs_echo() throws SiebelException {
        try {
            SiebelPropertySet psIn = sa.newPropertySet();
            psIn.setProperty("testType1", "testVal1");
            SiebelPropertySet psOut = sa.newPropertySet();
            SiebelService bs = sa.getService("Workflow Utilities");
            bs.invokeMethod("Echo", psIn, psOut);

            System.out.println(bs);
            System.out.println(psOut.getProperty("testType1"));

        } catch(SiebelException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void bc_search() throws SiebelException {
        try {
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
