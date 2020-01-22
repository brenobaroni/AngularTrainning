import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShopCart } from '../shop/cart/shop.cart';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  public shopCart: ShopCart;

  ngOnInit(): void {
    this.shopCart = new ShopCart();
  }
  constructor(private router: Router, private userService: UserService) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public userAuthenticated(): boolean {
    return this.userService.user_authenticated();
  }

  public userIsAdmin(): boolean {
    return this.userService.user_isAdmin();
  }


  logOut() {
    this.userService.clean_Session();
    this.router.navigate(['/']);
  }

  get user() {
    return this.userService.user;
  }

  public AnyItensInShopCart(): boolean {
    return this.shopCart.AnyItensInShopCart();
  }

  /*
   * Icons
   */
  faShoppingCart = faShoppingCart;

}
