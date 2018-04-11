sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, ResourceModel, Filter, FO) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page1", {

        onPress: function (evt) {
            var oColumnListItem = evt.getSource();

            this.getOwnerComponent().getRouter().navTo("Page2", {
                value: oColumnListItem.getCells()[1].getBinding("title")._getValue()
            });
        },

        onTranslate: function (bilola) {

            var i18n = this.getOwnerComponent().getModel("i18n");
            var lang = bilola.getParameter("state");

            if  (lang) {
                var i18nModel = new ResourceModel({
                    bundleName: "treinamento.ui5.i18n.i18n"
                });
            } else {
                var i18nModel = new ResourceModel({
                    bundleName: "treinamento.ui5.i18n.i18n_enUS"
                });
            }

            this.getOwnerComponent().setModel("i18n", i18nModel);
        },

        onSearch: function (oEvent) {
            var query = oEvent.getParameter("query");
            var filter = new Filter("ProductName", FO.Contains, query);

            this.byId("table").getBinding("items").filter(filter);
        }

    });

});