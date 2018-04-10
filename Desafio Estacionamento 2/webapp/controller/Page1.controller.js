sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button"
], function (Controller, Dialog, Button) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page1", {

        dialog: null,

        onInit: function () {},

        onBeforeRendering: function () {},

        onAfterRendering: function () {},

        onExit: function () {},

        onPress: function (oEvent) {
            this.getOwnerComponent().getRouter().navTo("Page2", {
                // value: this.byId("input").getValue()
            });
        },

        onPark: function (oEvent) {
            
            var dialogName = 'Confirmacao';
            this.dialog = this.dialog || {};
            var dialog = this.dialog[dialogName];

            if (!dialog) {
				dialog = sap.ui.xmlfragment('idFragmentConfirma', 'estacionamento.view.' + dialogName, this);	
				this.dialog[dialogName] = dialog; 
            };
            
            this.getView().addDependent(dialog);
            dialog.open();

        }
    });
});