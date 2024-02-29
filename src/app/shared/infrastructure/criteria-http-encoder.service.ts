import { Injectable } from '@angular/core';
import {Criteria} from "@zertifier/criteria";

@Injectable({
  providedIn: 'root'
})
export class CriteriaHttpEncoderService {

  constructor() { }

  public encodeCriteria(criteria: Criteria): string {
    return encodeURIComponent(JSON.stringify(criteria.serialize()))
  }
}
