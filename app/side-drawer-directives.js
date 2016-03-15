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
var SideDrawerMainDirective = (function () {
    function SideDrawerMainDirective(page, templateRef, viewContainer) {
        this.page = page;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    SideDrawerMainDirective.prototype.ngOnInit = function () {
        console.log("sideDrawer: " + this.sideDrawer);
        var viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        //Filter out text nodes, etc
        var realViews = viewRef.rootNodes.filter(function (node) {
            return node.nodeName && node.nodeName !== '#text';
        });
        if (realViews.length > 0) {
            this.page.content = this.sideDrawer;
            var viewRoot = realViews[0];
            console.log("viewRoot parent: " + viewRoot.parent);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }
            this.sideDrawer.mainContent = viewRoot;
        }
    };
    __decorate([
        core_1.Input('sideDrawerMain')
    ], SideDrawerMainDirective.prototype, "sideDrawer", void 0);
    SideDrawerMainDirective = __decorate([
        core_1.Directive({
            selector: '[sideDrawerMain]'
        }),
        core_1.Injectable(),
        __param(0, core_1.Inject(page_1.Page)),
        __param(1, core_1.Inject(core_1.TemplateRef)),
        __param(2, core_1.Inject(core_1.ViewContainerRef))
    ], SideDrawerMainDirective);
    return SideDrawerMainDirective;
}());
exports.SideDrawerMainDirective = SideDrawerMainDirective;
var SideDrawerDrawerDirective = (function () {
    function SideDrawerDrawerDirective(page, templateRef, viewContainer) {
        this.page = page;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    SideDrawerDrawerDirective.prototype.ngOnInit = function () {
        console.log("sideDrawer: " + this.sideDrawer);
        var viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        //Filter out text nodes, etc
        var realViews = viewRef.rootNodes.filter(function (node) {
            return node.nodeName && node.nodeName !== '#text';
        });
        if (realViews.length > 0) {
            this.page.content = this.sideDrawer;
            var viewRoot = realViews[0];
            console.log("viewRoot parent: " + viewRoot.parent);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }
            this.sideDrawer.drawerContent = viewRoot;
        }
    };
    __decorate([
        core_1.Input('sideDrawerDrawer')
    ], SideDrawerDrawerDirective.prototype, "sideDrawer", void 0);
    SideDrawerDrawerDirective = __decorate([
        core_1.Directive({
            selector: '[sideDrawerDrawer]'
        }),
        core_1.Injectable(),
        __param(0, core_1.Inject(page_1.Page)),
        __param(1, core_1.Inject(core_1.TemplateRef)),
        __param(2, core_1.Inject(core_1.ViewContainerRef))
    ], SideDrawerDrawerDirective);
    return SideDrawerDrawerDirective;
}());
exports.SideDrawerDrawerDirective = SideDrawerDrawerDirective;
//# sourceMappingURL=side-drawer-directives.js.map