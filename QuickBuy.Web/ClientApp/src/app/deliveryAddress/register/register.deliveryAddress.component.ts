import { Component, OnInit } from "@angular/core"
import { DeliveryAddress } from "../../model/deliveryAddress"
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { DeliveryAddressService } from "../../services/deliveryAddress/deliveryAddress.service";

@Component({
  selector: "register-deliveryAddress",
  templateUrl: "./register.deliveryAddress.component.html",
  styleUrls: ["./register.deliveryAddress.component.css",]
})

export class RegisterDeliveryAddressComponent implements OnInit {

  public deliveryAddress: DeliveryAddress;
  public cepforAPi: number;
  public activate_spiner: boolean;
  public cepSend: boolean;

  constructor(private deliveryAddressService: DeliveryAddressService) {

  }

  ngOnInit(): void {
    this.deliveryAddress = new DeliveryAddress();
  }

  
  //ICONS  
  faShippingFast = faShippingFast;

  cepKeyUp(event: any) {
    if (event.target.value.length >= 9) {
      this.cepforAPi = event.target.value;
      this.activateLoading();
      this.deliveryAddressService.getDeliveryAddresFromApiCorreios(this.cepforAPi.toString())
        .subscribe(
          addressFromApi => {
            this.deliveryAddress.publicPlace = addressFromApi['value'].end;
            console.log(this.deliveryAddress.publicPlace);
            this.desactivateLoading();
          },
          err => {
            console.log(err.error);
            this.desactivateLoading();
          }
        );

    }
  }


  public activateLoading() {
    this.activate_spiner = true;
    this.cepSend = true;
  }

  public desactivateLoading() {
    this.activate_spiner = false;
    this.cepSend = true;
  }


}

