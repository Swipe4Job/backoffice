import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {SidebarStore} from "./sidebar.store";
import {Subscription} from "rxjs";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    MenuModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  _visible: boolean;
  visible$ = this.state.selectOnly(state => state.visible);
  subscriptions: Subscription[] = [];
  items: MenuItem[] | undefined;

  constructor(private state: SidebarStore) {
    this._visible = false;
    this.subscriptions.push(
      this.visible$.subscribe((value) => {
        this._visible = value;
      })
    );
  }

  ngOnInit() {
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  updateVisibility(visible: boolean) {
    this.state.patchState({visible})
  }
}
