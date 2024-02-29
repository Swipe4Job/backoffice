import { Injectable } from '@angular/core';
import {RxStore} from "@zertifier/rx-store";

export interface SideBarStoreData {
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SidebarStore extends RxStore<SideBarStoreData>{

  private static DEFAULT_VALUES: SideBarStoreData = {visible: false};

  constructor() {
    super(SidebarStore.DEFAULT_VALUES);
  }
}
