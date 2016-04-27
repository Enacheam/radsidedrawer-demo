import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {RouteConfig} from 'angular2/router';
import {View} from "ui/core/view";
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
            <Label text="SSSSSIDE" class="side-label"></Label>
        </template>
        <StackLayout *drawerMain>
            <Label text="MMMMMMAIN!"></Label>
            <Button text="Side" (tap)="toggleDrawer()"></Button>
        </StackLayout>
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
        this.drawer = this.drawerComponent.sideDrawer;

        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.toggleDrawer());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
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
