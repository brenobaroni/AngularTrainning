import { Component, OnInit } from "@angular/core"
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.search.component.html",
  styleUrls: ["./shop.search.component.css"]
})

export class ShopSearchComponent implements OnInit {

  public products: Product[];


  ngOnInit(): void {
        
  }

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      err => {
        console.log(err.error)
      }
    )
  }

  public openProduct(product: Product) {
    sessionStorage.setItem('productDetails', JSON.stringify(product));
    this.router.navigate(['shop-product']);
  }


}
