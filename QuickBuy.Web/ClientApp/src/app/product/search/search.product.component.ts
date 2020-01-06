import { Component, OnInit } from "@angular/core"
import { Product } from "../../model/product"
import { ProductService } from "../../services/product/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "search-product",
  templateUrl: "./search.product.component.html",
  styleUrls: ["./search.product.component.css"]
})


export class SearchProductComponent implements OnInit {

  public products: Product[];

  ngOnInit(): void {

  }

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe(
      products => {
        this.products = products
      },
      err => {
        console.log(err.error)
      }
    )
  }

  addProduct() {
    this.router.navigate(['/product'])
  }

}
