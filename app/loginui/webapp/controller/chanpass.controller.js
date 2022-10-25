sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("loginui.controller.chanpass", {
            onInit: function () {
               
            },
            onUpdateSave: function(){
                var phno = this.getView().byId('inp_phno1').getValue();
                var new_pass = this.getView().byId('inp_password1').getValue();
                
                var user_name= "prabha9";
                $.get({
                    url: `https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users('${user_name}')`,
                    success: function(data) {
                        
                        if( data.phno == phno){
                           
                            
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
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    dataType: "json",
                    url: "https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/mobileOtp",
                    data: JSON.stringify({
                        phno: phno1
                    }),
                    success: function (res) {
                        console.log(res)
                    },
                    error: function (err) {
                        console.log(err)
                    }
                });
                
            }

        });
    });
