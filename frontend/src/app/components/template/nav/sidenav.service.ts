import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SidenavService {
  public sidenavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  public toggle() {
    return this.sidenavToggleSubject.next(null);
  }
}
