import { HeaderService } from "./header.service";
import { SidenavService } from "./../nav/sidenav.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(
    private sidenavService: SidenavService,
    private headerService: HeaderService
  ) {}

  clickMenu() {
    this.sidenavService.toggle();
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }
}
