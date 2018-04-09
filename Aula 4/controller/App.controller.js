sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/MessageToast"
], function (Controller, MessageBox, Dialog, Button, MessageToast) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.App", {

        onInit: function () {
            // MessageBox.success("testeinit", {
            //     title: "Success",                                    
            // });

            // var dialog = new Dialog({
            //     title: "Bem vindo 13",
            //     endButton:[
            //         new Button({
            //             text: "Fechar",
            //             press: function(){
            //                 dialog.close();
            //             },
            //             afterClose: function(){
            //                 dialog.destroy();
            //             }
            //         })
            //     ]
            // });
            // dialog.open();
        },

        onBeforeRendering: function () {},

        onAfterRendering: function () {},

        onExit: function () {},

        onPress: function () {
            // var that = this;
            // MessageBox.success(this.byId("input").getValue(), {
            //     title: "Success",  
            //     onClose: function(){
            //         MessageToast.show("Parabéns Bilolacão " + that.byId("input").getValue());
            //     }                                  
            // });
            //alert("Foi inputado " + this.byId("input").getValue());
        },

    });

});