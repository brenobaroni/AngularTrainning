import { Component, OnInit } from "@angular/core"
import { User } from "../../model/user"
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "register-user",
  templateUrl: "./register.user.component.html",
  styleUrls: [
    "./register.user.component.css",
  ]
})

export class RegisterUserComponent implements OnInit {
  public user: User
  public activate_Spiner: boolean;
  public msg: string;
  public userRegistred: boolean;
  public disable_CancelBtn: boolean;


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user = new User();
  }

  public async registerUser() {
    this.activate_Spiner = true;
    this.disable_CancelBtn = true;

    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1500)

    this.userService.registerUser(this.user).subscribe(
      userjson => {
        this.userRegistred = true;
        this.msg = "";
        this.activate_Spiner = false;
        this.disable_CancelBtn = false;
      },
      err => {
        this.userRegistred = false;
        this.msg = err.error;
        this.activate_Spiner = false;
        this.disable_CancelBtn = false;
      }
    );


    
  }

}
