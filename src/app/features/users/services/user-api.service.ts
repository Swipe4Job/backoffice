import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Criteria} from "@zertifier/criteria";
import {User} from "../interfaces/user";
import {environment} from "../../../../environments/environment";
import {HttpResponse} from "../../../shared/infrastructure/HttpResponse";
import {firstValueFrom, map} from "rxjs";
import {CriteriaHttpEncoderService} from "../../../shared/infrastructure/criteria-http-encoder.service";

interface UserResponse {
  id: string,
  name: string,
  email: string,
  role: string,
  phoneNumber: string,
  lastName: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private readonly BASE_URL = `${environment.api_url}/users`

  constructor(private http: HttpClient, private criteriaEncoder: CriteriaHttpEncoderService) { }

  public async getUsers(criteria: Criteria): Promise<User[]> {
    const params = new HttpParams().set('criteria', this.criteriaEncoder.encodeCriteria(criteria));
    const response = this.http.get<HttpResponse<UserResponse[]>>(this.BASE_URL, {params: params})
      .pipe(
        map(r => r.data)
      )

    const data = await firstValueFrom(response)
    return data.map(r => {
      return {
        email: r.email,
        name: r.name,
        role: r.role,
        id: r.id,
        phoneNumber: r.phoneNumber,
        lastName: r.lastName,
      }
    })
  }

  public async removeUsers(criteria: Criteria) {
    const params = new HttpParams().set('criteria', this.criteriaEncoder.encodeCriteria(criteria))
    const response = this.http.delete<void>(this.BASE_URL, {params: params})
    await firstValueFrom(response)
  }
}
