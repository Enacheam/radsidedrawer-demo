import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "sidedrawer";
import {Label} from "ui/label";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "./side-drawer-directives";

@Component({
    selector: "my-app",
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
export class AppComponent {
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
