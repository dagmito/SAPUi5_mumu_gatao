sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, History, MessageToast, JSONModel) {
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
            var oJSON = new JSONModel();

            var dados = this.getView().getModel("produto").getData().Produtos;

            for (let index = 0; index < dados.length; index++) {
                if (dados[index].ProductName === oValue) {
                    var element = dados[index]
                }
            }

            oJSON.setData(element);
            this.getView().setModel(oJSON, "produtoSelecionado")
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