import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../model/sidenav-item';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public sideNavOpen = false;
  public sidenavItems: SidenavItem[] = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.sidenavItems = this.headerService.getSidenavItems();
  }
}
