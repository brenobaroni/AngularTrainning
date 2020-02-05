import { Injectable, Inject } from "@angular/core" //# For inject class into other class.
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; //# Library for Req
import { User } from "../../model/user";

@Injectable({
  providedIn: "root",
})


export class UserService {
  private baseURL: string;
  private _user: User;

  get user(): User {
    let user_json = sessionStorage.getItem("user_authenticated");
    this._user = JSON.parse(user_json);
    return this._user;
  }

  set user(user: User) {
    sessionStorage.setItem("user_authenticated", JSON.stringify(user));
    this._user = user;
  }

  public user_authenticated(): boolean {
    return this._user != null && this._user.email != "" && this._user.password != "";
  }

  public user_isAdmin() {
    return this.user_authenticated() && this.user.isAdm;
  }

  public clean_Session() {
    sessionStorage.setItem("user_authenticated", "");
    this._user = null;
  }


  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public checkUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL + "api/user/checkUser", JSON.stringify(user), { headers: this.headers })
  }


  public registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseURL + "api/user", JSON.stringify(user), { headers: this.headers })
  }
}


