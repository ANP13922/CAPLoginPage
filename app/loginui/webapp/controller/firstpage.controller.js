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

        return Controller.extend("loginui.controller.firstpage", {
            onInit: function () {
                // console.log(this.getOwnerComponent().getModel("mainService"));
            },
            onLoginPress: function(){
                var username = this.getView().byId('inp_usernameId');
                var password = this.getView().byId('inp_passwordId');
                
                if(username.getValue() === '' && password.getValue() === '') {
                    MessageBox.error("Please Enter Username and Password!");

                    return;
                }
                else if(username.getValue() === '' ){
                  MessageBox.error("Please Enter Username!");
                  return;
                }
                else if(password.getValue() === ''){
                  MessageBox.error("Please Enter Password!");
                  return;
                } 
                else{
                    var n1= username.getValue();
                    var n2= password.getValue();
                    $.get({
                        url: `https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users('${n1}')`,
                        success: function(data) {
                            console.log(data.password);
                            if( data.password== n2){
                            MessageBox.success("Login Successful!!")
                            
                            }
                            else{
                            MessageBox.error("Invalid Credentials!!")
                            }
                        },
                        error: function(error) {
                            MessageBox.error("Invalid Credentials!!")
                        }

                    });
                }
              },
              changefunc: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("Routechanpass");
              },
              NewUserFunc: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("Routenewuser");
              }
        });
    });
