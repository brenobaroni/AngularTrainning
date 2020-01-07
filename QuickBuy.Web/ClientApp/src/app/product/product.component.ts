import { Component, OnInit } from "@angular/core"
import { Product } from "../model/product";
import { ProductService } from "../services/product/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})

export class ProductComponent implements OnInit {
  public product: Product
  public selectedFile: File;
  public activate_spiner: boolean;
  public msg: string;

  constructor(private productService: ProductService, private router: Router) {

  }


  ngOnInit(): void {
    var productSession = sessionStorage.getItem('productSession');
    if (productSession) {
      this.product = JSON.parse(productSession);
    } else {
      this.product = new Product();
    }
  }

  public register() {
    this.activateLoading();
    this.productService.register(this.product).subscribe(
      productJson => {
        this.desactivateLoading();
        this.router.navigate(['/search-product']);
      },
      err => {
        console.log(err.error);
        this.msg = err.error;
        this.desactivateLoading();
      }
    )
  }
  public inputChange(files: FileList) {
    this.activateLoading();
    this.selectedFile = files.item(0);
    this.productService.sendArchive(this.selectedFile)
      .subscribe(
        archiveName => {
          this.product.archiveName = archiveName;
          console.log(archiveName);
          this.desactivateLoading();
        },
        err => {
          console.log(err.error);
          this.desactivateLoading();
        });
  }

  public activateLoading() {
    this.activate_spiner = true;
  }

  public desactivateLoading() {
    this.activate_spiner = false;
  }


}
