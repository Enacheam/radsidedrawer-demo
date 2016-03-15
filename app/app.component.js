"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var page_1 = require("ui/page");
var action_bar_1 = require("ui/action-bar");
var side_drawer_directives_1 = require("./side-drawer-directives");
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
        this.message = "Hello, Angular!";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawer = this.drawerElement.nativeElement;
        console.log("drawer type: " + this.drawer.constructor);
        var sideDrawerItem = new action_bar_1.ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", function () { return _this.drawer.toggleDrawerState(); });
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    };
    __decorate([
        core_1.ViewChild("drawer")
    ], AppComponent.prototype, "drawerElement", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [side_drawer_directives_1.SideDrawerMainDirective, side_drawer_directives_1.SideDrawerDrawerDirective],
            template: "\n    <RadSideDrawer #drawer></RadSideDrawer>\n    <Label *sideDrawerMain=\"drawer\" text=\"MMMMMMAIN\"></Label>\n    <Label *sideDrawerDrawer=\"drawer\" text=\"SSSSSIDE\"\n        style=\"background-color: hotpink; color: white; font-weight: bold\"></Label>\n",
        }),
        __param(0, core_1.Inject(page_1.Page))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map