import { Component, OnInit } from "@angular/core"
import { DeliveryAddress } from "../../model/deliveryAddress"
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: "register-deliveryAddress",
  templateUrl: "./register.deliveryAddress.component.html",
  styleUrls: ["./register.deliveryAddress.component.css",]
})

export class RegisterDeliveryAddressComponent implements OnInit {

  public deliveryAddress: DeliveryAddress;

  constructor() {

  }

  ngOnInit(): void {
    this.deliveryAddress = new DeliveryAddress();
  }

  
  //ICONS  
  faShippingFast = faShippingFast;
}

