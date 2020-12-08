import { SidenavService } from "./../nav/sidenav.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(private sidenavService: SidenavService) {}

  clickMenu() {
    this.sidenavService.toggle();
  }
}
