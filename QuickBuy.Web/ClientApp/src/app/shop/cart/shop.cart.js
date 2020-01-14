"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShopCart = /** @class */ (function () {
    function ShopCart() {
        this.products = [];
    }
    ShopCart.prototype.add = function (product) {
        var productLocalStorage = localStorage.getItem("productLocalStorage");
        if (!productLocalStorage) {
            this.products.push(product);
        }
        else {
            this.products = JSON.parse(productLocalStorage);
            this.products.push(product);
        }
        localStorage.setItem("productLocalStorage", JSON.stringify(this.products));
    };
    ShopCart.prototype.getProducts = function () {
        var productLocalStorage = localStorage.getItem("productLocalStorage");
        if (productLocalStorage) {
            return JSON.parse(productLocalStorage);
        }
    };
    ShopCart.prototype.removeProduct = function (product) {
    };
    return ShopCart;
}());
exports.ShopCart = ShopCart;
//# sourceMappingURL=shop.cart.js.map