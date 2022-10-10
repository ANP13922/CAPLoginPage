sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("loginui.controller.newuser", {
            onInit: function () {

            },
            onCreate: function () {
                var fname = this.getView().byId('inp_fname').getValue();
                var lname = this.getView().byId('inp_lname').getValue();
                var userid = this.getView().byId('inp_userid').getValue();
                var pass = this.getView().byId('inp_password').getValue();
                var phno12 = this.getView().byId('inp_phno').getValue();

                $.get({
                    url: `https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users('${userid}')`,
                    success: function (data) {
                        MessageBox.error("User Name is already present. Choose a new User Name!")
                    },
                    error: function (error) {

                        $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            dataType: "json",
                            url: "https://port4004-workspaces-ws-q7l59.us10.trial.applicationstudio.cloud.sap/user/Users",
                            data: JSON.stringify({
                                userId: userid,
                                password: pass,
                                Fname: fname,
                                Lname: lname,
                                phno: phno12
                            }),
                            success: function (res) {
                                MessageBox.success("New User " + userid + " created successfully!")
                            },
                            error: function (err) {
                                console.log(err)
                            }
                        });
                    }

                });
            }
        })
    });