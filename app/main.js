"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("RadSideDrawer", function () { return require("nativescript-telerik-ui/sidedrawer").RadSideDrawer; });
application_1.nativeScriptBootstrap(app_component_1.AppComponent);
//# sourceMappingURL=main.js.map