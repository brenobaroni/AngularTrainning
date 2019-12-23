import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user/user.service";

@Injectable({
  providedIn: 'root',
})

export class RouteGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
    //router = new Router();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.userService.user_authenticated()) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }




}
