import { Component, OnInit } from "@angular/core"
import { Product } from "../../model/product"
import { ProductService } from "../../services/product/product.service";
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "search-product",
  templateUrl: "./search.product.component.html",
  styleUrls: ["./search.product.component.css"]
})


export class SearchProductComponent implements OnInit {

  public products: Product[];

  ngOnInit(): void {

  }

  constructor(private productService: ProductService, private router: Router, private userService: UserService) {
    if (!this.userService.user_isAdmin()) {
      this.router.navigate(['/']);
    } 

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
    sessionStorage.setItem('productSession', "");
    this.router.navigate(['/product']);
  }

  deleteProduct(product: Product) {
    var confirmation = confirm("Confirm Delete?")
    if (confirmation) {
      this.productService.delete(product).subscribe(
        products => {
          this.products = products;
        },
        err => {
          console.log(err.errors)
        }
      )
    }
  }
  
  editProduct(product: Product) {
    sessionStorage.setItem('productSession', JSON.stringify(product));
    this.router.navigate(['/product']);
  }

}
