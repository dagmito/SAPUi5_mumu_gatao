sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.App", {

        onInit: function () {},

        onBeforeRendering: function () {},

        onAfterRendering: function () {},

        onExit: function () {},

        onPress: function () {
            alert("Foi inputado " + this.byId("input").getValue());
        },

        onGo: function () {
            var page2 = this.byId("page2");
            this.byId("app").to(page2);
        },

        onBack: function () {
            this.byId("app").back();
        }

    });

});