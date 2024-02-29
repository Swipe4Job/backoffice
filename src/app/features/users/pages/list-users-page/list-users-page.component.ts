import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {User} from "../../interfaces/user";
import {UserApiService} from "../../services/user-api.service";
import {Criteria} from "@zertifier/criteria";
import {NavbarComponent} from "../../../../shared/infrastructure/components/navbar/navbar.component";
import {SidebarComponent} from "../../../../shared/infrastructure/components/sidebar/sidebar.component";
import {NavigationComponent} from "../../../../shared/infrastructure/components/navigation/navigation.component";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-list-users-page',
  standalone: true,
  imports: [
    TableModule,
    NavbarComponent,
    SidebarComponent,
    NavigationComponent,
    ButtonModule
  ],
  templateUrl: './list-users-page.component.html',
  styleUrl: './list-users-page.component.scss'
})
export class ListUsersPageComponent implements OnInit {
  users: User[] = []

  constructor(private userApi: UserApiService) {
  }

  async ngOnInit() {
    this.users = await this.userApi.getUsers(Criteria.NONE())
  }
}
