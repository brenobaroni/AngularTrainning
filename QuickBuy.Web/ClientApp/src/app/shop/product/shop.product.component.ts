import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
import { ShopCart } from '../cart/shop.cart';


@Component({
  selector: "shop-app-product",
  templateUrl: "./shop.product.component.html",
  styleUrls: ["shop.product.component.css"]
})

export class ShopProductComponent implements OnInit {

  public product: Product
  public shopCart: ShopCart

  ngOnInit(): void {
    this.shopCart = new ShopCart();
    var productDetails = sessionStorage.getItem('productDetails');
    if (productDetails) {
      this.product = JSON.parse(productDetails);
    } else {

    }
  }

  constructor(private productService: ProductService, private router: Router) {

  }

  public buy() {
    this.shopCart.add(this.product);
    this.router.navigate(["/shop-makePurshase"])
  }

}
