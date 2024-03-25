import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {User} from "../../interfaces/user";
import {UserApiService} from "../../services/user-api.service";
import {Criteria, Filter, FilterGroup, Filters, Operators, Orders} from "@zertifier/criteria";
import {NavbarComponent} from "../../../../shared/infrastructure/components/navbar/navbar.component";
import {SidebarComponent} from "../../../../shared/infrastructure/components/sidebar/sidebar.component";
import {NavigationComponent} from "../../../../shared/infrastructure/components/navigation/navigation.component";
import {ButtonModule} from "primeng/button";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {UserFormComponent} from "../../components/user-form/user-form.component";
import {UserStoreService} from "../../store/user-store.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-list-users-page',
  standalone: true,
  imports: [
    TableModule,
    NavbarComponent,
    SidebarComponent,
    NavigationComponent,
    ButtonModule,
    ConfirmDialogModule,
    RippleModule,
    DialogModule,
    UserFormComponent,
    AsyncPipe,
  ],
  providers: [ConfirmationService, DialogService],
  templateUrl: './list-users-page.component.html',
  styleUrl: './list-users-page.component.scss'
})
export class ListUsersPageComponent implements OnInit {
  users: User[] = []
  showDialog: boolean = false

  constructor(
    private userApi: UserApiService,
    private confirmationService: ConfirmationService,
    private userStore: UserStoreService,
    private dialogService: DialogService,
  ) {
  }

  public addUser() {
    this.dialogService.open(UserFormComponent, {
      draggable: false,
      position: 'top',
      header: 'Add user',
      width: '50%'
    })
  }

  public removeUser(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this user?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",
      accept: async () => {
        await this.userApi.removeUsers(new Criteria({
          filters: Filters.create([
            FilterGroup.create([
              Filter.create('id', Operators.EQUAL, id)
            ])
          ]),
          orders: Orders.EMPTY()
        }));

        await this.fetchUsers();
      }
    })
  }

  async ngOnInit() {
    await this.fetchUsers();
  }

  async fetchUsers() {
    this.users = await this.userApi.getUsers(Criteria.NONE())
  }
}
