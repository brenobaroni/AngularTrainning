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
  public msg: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = new User();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
  }

  enter() {

    this.userService.checkUser(this.user).subscribe(
      user_json => { //provided by .net core;
        this.userService.user = user_json;

        if (this.returnUrl == null)
          this.router.navigate(['/']);
        else
          this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err.error);
        this.msg = err.error;
      }
    );

  }
}


