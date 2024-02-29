import { Component } from '@angular/core';
import {NavigationComponent} from "../../../../shared/infrastructure/components/navigation/navigation.component";

@Component({
  selector: 'app-new-user-page',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './new-user-page.component.html',
  styleUrl: './new-user-page.component.scss'
})
export class NewUserPageComponent {

}
