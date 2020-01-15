import { Component, OnInit, Input } from '@angular/core'
import { ShopCart } from '../cart/shop.cart'
import { Product } from '../../model/product';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Target } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: "shop-makePurshase",
  templateUrl: './shop.makePurshase.component.html',
  styleUrls: ['shop.makePurshase.component.css'],
})

export class ShopMakePurshase implements OnInit {

  public shopCart: ShopCart;
  public products: Product[];
  public quantity: number = 1;

  ngOnInit(): void {
    this.shopCart = new ShopCart();
    this.products = this.shopCart.getProducts();
  }

  public updatePrice(product: Product, quantity: number, e: Element) {
    if (!product.originalPrice) {
      product.originalPrice = product.price;
    }

    if (quantity > 0) {
      product.price = product.originalPrice * quantity;
    } else {
      this.quantity = 1;
    }
  }

  public checkPrice(quantity: number) {
    
  }

  constructor() {
  }

}
