import { Component } from "@angular/core"

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})

export class ProductComponent {

  public name: string;
  public releasedForSale: boolean;

  public getName(): string {
    return "Samsung";
  }
}
