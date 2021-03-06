sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page2", {

        onInit: function () {
            this.getOwnerComponent()
                .getRouter()
                .getRoute("Page2")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent){
            var oValue = oEvent.getParameter("arguments").value;
            MessageToast.show(oValue);
        },
        onNavPress: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Page1");
            }
        },
    });
});