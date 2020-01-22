import { Component, OnInit } from "@angular/core"
import { DeliveryAddress } from "../../model/deliveryAddress"

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

  }

  

}

