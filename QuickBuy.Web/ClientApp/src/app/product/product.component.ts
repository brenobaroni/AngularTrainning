import { Component, OnInit } from "@angular/core"
import { Product } from "../model/product";
import { ProductService } from "../services/product/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})

export class ProductComponent implements OnInit {
  public product: Product

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.product = new Product;
  }

  public register() {
    this.productService.register(this.product).subscribe(
      productJson => {
        console.log(productJson);
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
