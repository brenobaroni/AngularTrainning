import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Country } from "../../model/country";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CountryService implements OnInit {
  private _baseUrl: string;
  private countrys: Country[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.countrys = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this._baseUrl + "api/country/getall");
  }


}

