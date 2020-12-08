import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from "@angular/core";
import { SidenavService } from "./sidenav.service";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements AfterViewInit {
  @ViewChild("sidenav") public sidenav: MatSidenav;
  constructor(private sidenavService: SidenavService) {}

  @HostListener("window: resize", ["$event"])
  onResize(event: any) {
    if (event.target.innerWidth < 500) {
      this.sidenav.mode = "over";
    }
    if (event.target.innerWidth > 500) {
      this.sidenav.mode = "side";
    }
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }
}
