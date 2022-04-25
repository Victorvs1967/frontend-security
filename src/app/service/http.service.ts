import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenResponse } from '../models/token-response.model';
import { User } from '../models/user.model';
import { UserDTO } from '../models/userDTO.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}${environment.signup}`, user);
  }

  signin(email: string, password: string): Observable<TokenResponse> {
    const user: UserDTO = new UserDTO(email, password, '', '');
    return this.http.post<TokenResponse>(`${environment.apiUrl}${environment.signin}`, user)
      .pipe(map((data: any) => {
        sessionStorage.clear();
        sessionStorage.setItem('userToken', data);
        return data;
      }));
  }

  getUser(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization' : `Bearer ${sessionStorage.getItem('userToken')}`
      })
    };
    return this.http.get<User>(`${environment.apiUrl}${environment.user}`, httpOptions);
  }

  isSignin(): boolean {
    return sessionStorage.getItem('userToken') !== null;
  }

  logout() {
    sessionStorage.clear();
  }
  
}
