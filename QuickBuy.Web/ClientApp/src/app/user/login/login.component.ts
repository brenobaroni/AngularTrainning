import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { Router, ActivatedRoute } from "@angular/router"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public user;
  public returnUrl: string;
  public enderecoImg = "../assets/img/logo.png";

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.user = new User();
  }

  enter() {
    if (this.user.email == "breno_baroni@hotmail.com" && this.user.password == "123Senha") {
      sessionStorage.setItem("user-authenticated", "1");
      this.router.navigate([this.returnUrl]);
    }
  }
}


