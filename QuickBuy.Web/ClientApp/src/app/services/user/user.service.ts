import { Injectable, Inject } from "@angular/core" //# For inject class into other class.
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; //# Library for Req
import { User } from "../../model/user";

@Injectable({
  providedIn: "root"
})


export class UserService {
  private baseURL: string;

  constructor(private http: HttpClient, @Inject('BASE URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  public checkUser(user: User): Observable<User> {

    const headers = new HttpHeaders().set('content-type', 'applicarion/json');

    var body = {
      email: user.email,
      password: user.password
    }

    return this.http.post<User>(this.baseURL + "api/user", body, { headers })
  }
}


