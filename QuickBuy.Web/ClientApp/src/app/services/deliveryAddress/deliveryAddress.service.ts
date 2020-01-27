import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeliveryAddress } from '../../model/deliveryAddress';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})

export class DeliveryAddressService implements OnInit {
  private _baseUrl: string;
  public deliveryAddress: DeliveryAddress;
  public deliveryAddresses: DeliveryAddress[];


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.deliveryAddress = new DeliveryAddress;
    this.deliveryAddresses = [];
  }


  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public getDeliveryAddresFromApiCorreios(cep: string): Observable<string> {
    return this.http.get<string>(this._baseUrl + 'api/DeliveryAddress/GetByCep?cep=' + cep.replace('-',''));
  }




}
