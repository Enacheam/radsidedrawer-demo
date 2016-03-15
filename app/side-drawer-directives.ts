import {ElementRef, Directive, Input, TemplateRef, ViewContainerRef, Inject, Injectable} from "angular2/core";
import {RadSideDrawer} from "sidedrawer";
import {View} from "ui/core/view";
import {Page} from "ui/page";

@Directive({
    selector: '[sideDrawerMain]'
})
@Injectable()
export class SideDrawerMainDirective {
    constructor(
        @Inject(Page) private page: Page,
        @Inject(TemplateRef) private templateRef: TemplateRef,
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef
    ) {
    }

    @Input('sideDrawerMain') sideDrawer: RadSideDrawer & View;

    ngOnInit() {
        console.log("sideDrawer: " + this.sideDrawer);

        const viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        //Filter out text nodes, etc
        const realViews = viewRef.rootNodes.filter((node) =>
                            node.nodeName && node.nodeName !== '#text')

        if (realViews.length > 0) {
            this.page.content = this.sideDrawer;

            const viewRoot = realViews[0];
            console.log("viewRoot parent: " + viewRoot.parent);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }

            this.sideDrawer.mainContent = viewRoot;
        }
    }
}

@Directive({
    selector: '[sideDrawerDrawer]'
})
@Injectable()
export class SideDrawerDrawerDirective {
    constructor(
        @Inject(Page) private page: Page,
        @Inject(TemplateRef) private templateRef: TemplateRef,
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef
    ) {
    }

    @Input('sideDrawerDrawer') sideDrawer: RadSideDrawer & View;

    ngOnInit() {
        console.log("sideDrawer: " + this.sideDrawer);

        const viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        //Filter out text nodes, etc
        const realViews = viewRef.rootNodes.filter((node) =>
                            node.nodeName && node.nodeName !== '#text')

        if (realViews.length > 0) {
            this.page.content = this.sideDrawer;

            const viewRoot = realViews[0];
            console.log("viewRoot parent: " + viewRoot.parent);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }

            this.sideDrawer.drawerContent = viewRoot;
        }
    }
}
