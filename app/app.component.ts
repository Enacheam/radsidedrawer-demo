import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "sidedrawer";
import {Label} from "ui/label";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import {HotPink} from "color/known-colors";
import {SideDrawerMainDirective, SideDrawerDrawerDirective} from "./side-drawer-directives";


@Component({
    selector: "my-app",
    directives: [SideDrawerMainDirective, SideDrawerDrawerDirective],
    template: `
    <RadSideDrawer #drawer></RadSideDrawer>
    <Label *sideDrawerMain="drawer" text="MMMMMMAIN"></Label>
    <Label *sideDrawerDrawer="drawer" text="SSSSSIDE"
        style="background-color: hotpink; color: white; font-weight: bold"></Label>
`,
})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild("drawer") public drawerElement: ElementRef;
    private drawer: RadSideDrawer & View & {toggleDrawerState: () => void};
    public message: string = "Hello, Angular!";

    ngAfterViewInit() {
        this.drawer = this.drawerElement.nativeElement;
        console.log("drawer type: " + this.drawer.constructor);

        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.drawer.toggleDrawerState());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    }
}
