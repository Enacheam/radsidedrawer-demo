// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {registerElement} from "nativescript-angular/element-registry";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ComponentInstruction, RouteParams} from 'angular2/router';
import {NS_ROUTER_PROVIDERS, routerTraceCategory} from "nativescript-angular/router";

registerElement("RadSideDrawer", () => require("nativescript-telerik-ui/sidedrawer").RadSideDrawer);

nativeScriptBootstrap(AppComponent, [ROUTER_PROVIDERS, NS_ROUTER_PROVIDERS]);
