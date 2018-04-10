sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Input"
], function (Controller, Dialog, Button, Input) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page1", {

        dialog: null,

        onInit: function () {},

        onBeforeRendering: function () {},

        onAfterRendering: function () {},

        onExit: function () {},

        onPress: function (oEvent) {
            if (!this.dialog) {
                this.getOwnerComponent().getRouter().navTo("Page2", {
                    // value: this.byId("input").getValue()
                });
            }
        },

        onPark: function (oEvent) {

            var oSource = oEvent.getSource();

            this.dialog = new Dialog({
                title: "Insira o Número da Placa",
                content: new Input('nomeMotorista', {
                    class: "sapUiSmallMarginBottom",
                    placeholder: "Insira aqui nome do motorista"
                }),
                endButton: new Button({
                    text: "Cancel",
                    press: function () {
                        that.dialog.close();
                    }
                }),
                afterClose: function () {
                    that.dialog.destroy();
                }
            });
            var that = this;
            this.dialog.open();
        }
    });
});