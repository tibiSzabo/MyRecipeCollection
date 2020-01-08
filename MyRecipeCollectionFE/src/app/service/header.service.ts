import { Injectable } from '@angular/core';
import { SidenavItem } from '../model/sidenav-item';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private sidenavItems: SidenavItem[] = [
    { name: 'First sidenav item', route: '' },
    { name: 'Second sidenav item', route: '' },
    { name: 'Third sidenav item', route: '' },
    { name: 'Fourth sidenav item', route: '' }
  ];

  public getSidenavItems(): SidenavItem[] {
    return this.sidenavItems;
  }

  constructor() { }
}
