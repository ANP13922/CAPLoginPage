var gen_otp;
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    
    function (Controller,MessageBox, MessageToast,methods) {
        "use strict";

        return Controller.extend("loginui.controller.chanpass", {
            onInit: function () {
               
            },
            
            onUpdateSave: function(){
                var phno = this.getView().byId('inp_phno1').getValue();
                var new_pass = this.getView().byId('inp_password1').getValue();

                var user_name= this.getView().byId('inp_usr1').getValue();
                console.log(user_name)
                $.get({
                    url: `https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users('${user_name}')`,
                    success: function(data) {
                        
                        if( data.phno == phno){
                           console.log("hello")
                            $.ajax({
                                type: "POST",
                                contentType: "application/json",
                                dataType: "json",
                                url: "https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users",
                                data: JSON.stringify({
                                    userId: user_name,
                                    password: new_pass,
                                    Fname: data.Fname,
                                    Lname: data.Lname,
                                    phno: data.phno
                        
                                }),
                                success: function (res) {
                                    MessageBox.success("User " + user_name + " passowrd has been updated!")
                                },
                                error: function (err) {
                                    console.log(err)
                                    console.log("hello")
                                }
                            });

                            
                        }
                        else{
                        MessageBox.error("Wrong Phone Number!!")
                        }
                    },
                    error: function(error) {
                        MessageBox.error("Invalid Credentials!!")
                    }

                });

            },
            sendotp: function(){
                var phno1 = this.getView().byId('inp_phno1').getValue();
                if(phno1.length!=10){
                    var msg=" Phone Number should be of 10 digits. Please enter your phone number again"
                    MessageToast.show(msg);
                    return;
                }
                var rand_no= Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
                console.log(rand_no)
                console.log(gen_otp)
                var otp_msg= "Your OTP is "+ (rand_no.toString()) 
                gen_otp= rand_no
                MessageBox.information(otp_msg)
                // $.ajax({
                //     type: "POST",
                //     contentType: "application/json",
                //     dataType: "json",
                //     url: "https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/mobileOtp",
                //     data: JSON.stringify({
                //         phno: phno1
                //     }),
                //     success: function (res) {
                //         console.log(res)
                //     },
                //     error: function (err) {
                //         console.log(err)
                //     }
                // });
                
            },
            checkOtp: function(){
                var ent_otp = this.getView().byId('inp_otp').getValue();
                if(gen_otp != ent_otp){
                    MessageBox.error("Wrong OTP Entered! Please enter the OTP again.")
                    return;
                }
                MessageToast.show("OTP Verification Successful! Please enter your new Password.")
            }

        });
    });
