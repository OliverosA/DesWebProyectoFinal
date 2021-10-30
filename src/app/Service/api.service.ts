import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Http, HttpResponse } from "@nativescript/core";

import { LoginInterface } from '../Interface/login.interface'
import { RegisterInterface } from '../Interface/register.interface'
import { ResponseInterface } from '../Interface/response.interface'
import { UsersInterface } from '../Interface/users.interface'
@Injectable({
  providedIn: 'root'
})

export class ApiS {
  url: string = "https://guarded-oasis-86828.herokuapp.com/"
  constructor(private http:HttpClient) {}

  loginByEmail(form:LoginInterface):Observable<ResponseInterface>{
    let dir = this.url + "api/login"
    return this.http.post<ResponseInterface>(dir, form)
  }
  registerByEmail(form:RegisterInterface):Observable<ResponseInterface>{
    let dir = this.url + "api/registros"
    return this.http.post<ResponseInterface>(dir, form)
  }
  createUsers(form:UsersInterface):Observable<ResponseInterface>{
    let dir = this.url + "api/registros"
    return this.http.post<ResponseInterface>(dir, form)
  }
  readUsers():Observable<any>{
    let dir = this.url + "api/registros"
    return this.http.get<ResponseInterface>(dir)
  }
  deleteUsers(id: number):Observable<any>{
      let dir = this.url + "api/registros/"+ id
      console.log(dir)
      return this.http.delete<ResponseInterface>(dir)
    }
}
