import { Component } from "@angular/core";
import { User } from "../../model/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:[ "./login.component.css"]
})

export class LoginComponent {

  public user = new User();
  public userAuthenticated: boolean;
  public users = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5",]
  constructor() {
    this.user = new User();
  }

  public enderecoImg = "../assets/img/logo.png";
  public titulo = "Título";
  public email = "";
  public password = "";

  enter() {
    if (this.user.email == "breno_baroni@hotmail.com" && this.user.password == "123Senha")
      this.userAuthenticated = true;
  }
}


