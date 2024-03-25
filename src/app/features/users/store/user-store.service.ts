import { Injectable } from '@angular/core';
import {RxStore} from "@zertifier/rx-store";
import {UserStore} from "./UserStore";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends RxStore<UserStore>{

  public static DEFAULT_VALUES: UserStore = {editingUser: ''}

  constructor() {
    super(UserStoreService.DEFAULT_VALUES);
  }
}
