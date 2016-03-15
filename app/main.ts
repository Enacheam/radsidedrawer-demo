// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {registerElement} from "nativescript-angular/element-registry";

registerElement("RadSideDrawer", () => require("nativescript-telerik-ui/sidedrawer").RadSideDrawer);

nativeScriptBootstrap(AppComponent);
