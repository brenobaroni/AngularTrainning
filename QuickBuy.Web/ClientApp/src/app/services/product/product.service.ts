import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../../model/product";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class ProductService implements OnInit {
  private _baseUrl: string;
  public products: Product[]

  constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
    this._baseUrl = baseURL;
  }
  ngOnInit(): void {
    this.products = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public register(product: Product): Observable<Product> {
    return this.http.post<Product>(this._baseUrl + "api/product", JSON.stringify(product), { headers: this.headers });
  }

  public save(product: Product): Observable<Product> {
    return this.http.post<Product>(this._baseUrl + "api/product/save", JSON.stringify(product), { headers: this.headers });
  }

  public delete(product: Product): Observable<Product> {
    return this.http.post<Product>(this._baseUrl + "api/product/delete", JSON.stringify(product), { headers: this.headers });
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this._baseUrl + "api/product");
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(this._baseUrl + "api/product");
  }
  public sendArchive(selectedFile: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append("selectedArchive", selectedFile, selectedFile.name);
    return this.http.post<string>(this._baseUrl + "api/product/sendArchive", formData);
  }

}
