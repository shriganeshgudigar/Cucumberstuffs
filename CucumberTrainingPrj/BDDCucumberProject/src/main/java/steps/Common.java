package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Common {

    @Before
    public void preExecProcedure1(){
        System.out.println("Before method 1");
    }

    @Before("@web")
    public void preExecProcedure2(){
        System.out.println("Before method 2");
    }

    @After
    public void postExecProcedure1(){
        System.out.println("After method 1");
    }

    @After
    public void postExecProcedure2(){
        System.out.println("After method 2");
    }

}


