import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    KeyFilterModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  roles = ['ADMIN', 'RECRUITER', 'CANDIDATE'];

  formGroup = this.formBuilder.group({
    name: new FormControl<string | null>(null),
    lastName: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    role: new FormControl<string | null>(null),
    phoneNumber: new FormControl<string | null>(null),
  });
  constructor(private formBuilder: FormBuilder) {
  }
}
