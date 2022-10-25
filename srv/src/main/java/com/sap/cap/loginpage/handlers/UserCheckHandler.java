package com.sap.cap.loginpage.handlers;

// import com.sap.cds.services.cds.CdsService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.ServiceName;
import org.springframework.stereotype.Component;

import cds.gen.userservice.MobileCheckContext;
import cds.gen.userservice.UserService_;
import cds.gen.userservice.Users_;

@Component
@ServiceName(UserService_.CDS_NAME)
public class UserCheckHandler implements EventHandler{

 
    UserCheckHandler(){
        System.out.println("Inside Handler");
    }
    
    @On(event = "mobileOtp", entity = Users_.CDS_NAME)
    //(event = CdsService.EVENT_UPDATE, entity = Users.password)
    public void mobileOtp(MobileOtpContext context){
        System.out.println(context.getPhno());
        context.setResult(Boolean.TRUE);
        context.setCompleted();
    }
}
