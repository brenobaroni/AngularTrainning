import { Component, OnInit, Input } from '@angular/core'
import { ShopCart } from '../cart/shop.cart'
import { Product } from '../../model/product';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Target } from '@angular/compiler';
import { element } from 'protractor';
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Order } from '../../model/order';
import { UserService } from '../../services/user/user.service';
import { OrderItem } from '../../model/orderItem';

@Component({
  selector: "shop-makePurshase",
  templateUrl: './shop.makePurshase.component.html',
  styleUrls: ['shop.makePurshase.component.css'],
})

export class ShopMakePurshase implements OnInit {
  faTrashAlt = faTrashAlt;
  faTimes = faTimes;
  public shopCart: ShopCart;
  public products: Product[];
  public quantity: number = 1;
  public total: number;

  ngOnInit(): void {
    this.shopCart = new ShopCart();
    this.products = this.shopCart.getProducts();
    this.updateTotal();
  }

  public updatePrice(product: Product, quantity: number) {
    if (!product.originalPrice) {
      product.originalPrice = product.price;
    }

    if (quantity <= 0) {
      quantity = 1
      product.quantity = quantity;
    }

    product.price = product.originalPrice * quantity;

    this.shopCart.update(this.products);
    this.updateTotal();
  }

  public remove(product: Product) {
    this.shopCart.removeProduct(product);
    this.products = this.shopCart.getProducts();
    this.updateTotal();
  }

  public checkPrice(quantity: number) {

  }

  constructor(private userService: UserService) {

  }

  public updateTotal() {
    this.total = this.products.reduce((acm, product) => acm + product.price, 0);
  }

  public makeBuy() {
    let order = new Order();
  }

  public makeOrder(): Order {
    let order = new Order();
    order.userId = this.userService.user.id;
    this.products = this.shopCart.getProducts();

    for (let product of this.products) {
      let orderItem = new OrderItem();
      orderItem.productId = product.id;
      orderItem.Quantity = product.quantity;

      if (!product.quantity)
        orderItem.Quantity = 1;

      order.orderItems.push(orderItem);
    }

    return order;

  }


}
