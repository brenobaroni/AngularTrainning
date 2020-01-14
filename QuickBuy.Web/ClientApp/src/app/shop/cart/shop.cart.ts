import { Product } from "../../model/product";

export class ShopCart {

  public products: Product[] = [];

  public add(product: Product) {
    var productLocalStorage = localStorage.getItem("productLocalStorage")
    if (!productLocalStorage) {
      this.products.push(product);   
    } else {
      this.products = JSON.parse(productLocalStorage);
      this.products.push(product);
    }
    localStorage.setItem("productLocalStorage", JSON.stringify(this.products));
  }

  public getProducts() : Product[] {
    var productLocalStorage = localStorage.getItem("productLocalStorage")
    if (productLocalStorage) {
      return JSON.parse(productLocalStorage);
    }
  }

  public removeProduct(product: Product) {

  }
}
