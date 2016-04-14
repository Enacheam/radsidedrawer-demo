import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {RouteConfig} from 'angular2/router';
import {View} from "ui/core/view";
import {RadSideDrawer} from "sidedrawer";
import {Label} from "ui/label";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "./side-drawer-directives";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ComponentInstruction, RouteParams} from 'angular2/router';

import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router/ns-router";

@Component({
    selector: "page-component",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    template: `
    <RadSideDrawer #drawer>
        <template drawerSide>
            <Label text="SSSSSIDE"
                style="background-color: hotpink; color: white; font-weight: bold">
            </Label>
        </template>
        <Label *drawerMain text="MMMMMMAIN!"></Label>
    </RadSideDrawer>
`,
})
export class PageComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public message: string = "Hello, Angular!";

    ngAfterViewInit() {
        console.log(this.drawerComponent.constructor);
        this.drawer = this.drawerComponent.sideDrawer;
        console.log("drawer type: " + this.drawer.constructor);

        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.drawer.toggleDrawerState());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    }
}


@Component({
    selector: "my-app",
    directives: [PageComponent, NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout orientation="vertical">
        <page-router-outlet></page-router-outlet>
    </StackLayout>
`,
})
@RouteConfig([
    { path: '/', component: PageComponent, name: 'PageComponent' },
])
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }
}
