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

  public clean_Session() {
    sessionStorage.setItem("user_authenticated", "");
    this._user = null;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public checkUser(user: User): Observable<User> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: user.email,
      password: user.password
    }

    return this.http.post<User>(this.baseURL + "api/user/checkUser", body, { headers })
  }


  public registerUser(user: User): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: user.email,
      password: user.password,
      name: user.name,
      lastName: user.lastName
    }

    return this.http.post<User>(this.baseURL + "api/user", body, { headers })
  }
}


