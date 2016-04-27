import {
    ElementRef,
    Directive,
    Component,
    Input,
    TemplateRef,
    ViewContainerRef,
    Inject,
    Injectable,
    ViewChild,
    ContentChild,
    ContentChildren,
    QueryList,
} from "angular2/core";
import {RadSideDrawer} from "nativescript-telerik-ui/sidedrawer";
import {View} from "ui/core/view";
import {Page} from "ui/page";

export type SideDrawerType = RadSideDrawer & View & {toggleDrawerState: () => void}

@Component({
    selector: 'RadSideDrawer',
    template: ''
})
export class RadSideDrawerComponent {
    public sideDrawer: SideDrawerType;

    public mainTemplate: TemplateRef;
    public drawerTemplate: TemplateRef;

    constructor(
        @Inject(ElementRef) public elementRef: ElementRef,
        @Inject(Page) private page: Page,
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef
    ) {
        console.log("elementRef: " + this.elementRef);
        console.log("elementRef.nativeElement: " + this.elementRef.nativeElement);
        this.sideDrawer = this.elementRef.nativeElement;
    }

    ngAfterContentInit() {
        console.log("mainTemplate: " + this.mainTemplate);
        const mainViewRef = this.viewContainer.createEmbeddedView(this.mainTemplate);
        console.log("mainViewRef: " + mainViewRef);
        //Filter out text nodes, etc
        const mainViews = mainViewRef.rootNodes.filter((node) =>
                            node.nodeName && node.nodeName !== '#text')

        if (mainViews.length > 0) {
            if (this.sideDrawer.parent) {
                this.sideDrawer.parent._removeView(this.sideDrawer);
            }
            this.page.content = this.sideDrawer;

            const viewRoot = mainViews[0];
            console.log("viewRoot: " + viewRoot);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }

            this.sideDrawer.mainContent = viewRoot;
        }

        console.log("drawerTemplate: " + this.drawerTemplate);
        const drawerViewRef = this.viewContainer.createEmbeddedView(this.drawerTemplate);
        console.log("drawerViewRef: " + drawerViewRef);
        //Filter out text nodes, etc
        const drawerViews = drawerViewRef.rootNodes.filter((node) =>
                            node.nodeName && node.nodeName !== '#text')

        if (drawerViews.length > 0) {
            this.page.content = this.sideDrawer;

            const viewRoot = drawerViews[0];
            console.log("viewRoot: " + viewRoot);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }

            this.sideDrawer.drawerContent = viewRoot;
        }
    }
}

@Directive({
    selector: "[drawerMain]"
})
export class MainTemplateDirective {
    constructor(@Inject(RadSideDrawerComponent) owner: RadSideDrawerComponent, @Inject(TemplateRef) template: TemplateRef) {
        console.log('main directive: ' + template);
        owner.mainTemplate = template;
    }
}

@Directive({
    selector: "[drawerSide]"
})
export class DrawerTemplateDirective {
    constructor(@Inject(RadSideDrawerComponent) owner: RadSideDrawerComponent, @Inject(TemplateRef) template: TemplateRef) {
        console.log('drawer directive: ' + template);
        owner.drawerTemplate = template;
    }
}
