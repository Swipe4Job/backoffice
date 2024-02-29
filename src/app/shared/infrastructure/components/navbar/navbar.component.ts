import {Component, OnInit} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SidebarStore} from "../sidebar/sidebar.store";
import {MenubarModule} from "primeng/menubar";
import {MenuItem, MenuItemCommandEvent} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    MenubarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private sideBarStore: SidebarStore, private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        command: (event: MenuItemCommandEvent) => {
          this.router.navigate(['/users'])
        }
      }
    ]
  }

  toggleSidebar() {
    const visible = this.sideBarStore.snapshotOnly(state => state.visible);
    this.sideBarStore.patchState({visible: !visible});
  }
}
