import { Component } from "@angular/core";
import { User } from "../../model/user";
import { Router } from "@angular/router"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {

  public user;
  public enderecoImg = "../assets/img/logo.png";

  constructor(private router: Router) {
    this.user = new User();
  }


  enter() {
    if (this.user.email == "breno_baroni@hotmail.com" && this.user.password == "123Senha") {
      sessionStorage.setItem("user-authenticated", "1");
      this.router.navigate(['/'])
    }
  }
}


