import { Component, OnInit } from '@angular/core'
import { ShopCart } from '../cart/shop.cart'
import { Product } from '../../model/product';

@Component({
  selector: "shop-makePurshase",
  templateUrl: './shop.makePurshase.component.html',
  styleUrls: ['shop.makePurshase.component.css'],
})

export class ShopMakePurshase implements OnInit {

  public shopCart: ShopCart;
  public products: Product[];

  ngOnInit(): void {
    this.shopCart = new ShopCart();
    this.products = this.shopCart.getProducts();
  }

  constructor() {
  }

}
