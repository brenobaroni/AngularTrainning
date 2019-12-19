import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { Router, ActivatedRoute } from "@angular/router"
import { UserService } from "../../services/user/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public user;
  public returnUrl: string;
  public enderecoImg = "../assets/img/logo.png";

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.user = new User();
  }

  enter() {

    this.userService.checkUser(this.user).subscribe(
      data => {

      },
      err => {

      }
    );

  }
}


