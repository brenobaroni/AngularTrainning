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

  public getProducts(): Product[] {
    var productLocalStorage = localStorage.getItem("productLocalStorage")
    if (productLocalStorage) {
      return JSON.parse(productLocalStorage);
    }
  }

  public removeProduct(product: Product) {
    var productLocalStorage = localStorage.getItem("productLocalStorage");
    if (productLocalStorage) {
      this.products = JSON.parse(productLocalStorage);
      this.products = this.products.filter(p => p.id != product.id);
      localStorage.setItem("productLocalStorage", JSON.stringify(this.products));
    }
  }

  public update(products: Product[]) {
    localStorage.setItem("productLocalStorage", JSON.stringify(products));
  }

  public AnyItensInShopCart(): boolean {
    var itens = this.getProducts();
    if (itens) {
      return true;
    } else {
      return false;
    }
  }



}
