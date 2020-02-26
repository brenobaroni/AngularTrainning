import { Component, OnInit, Input } from "@angular/core"
import { DeliveryAddress } from "../../model/deliveryAddress"
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { DeliveryAddressService } from "../../services/deliveryAddress/deliveryAddress.service";
import { UserService } from "../../services/user/user.service";
import { User } from "../../model/user";
import { CountryService } from "../../services/country/country.service";
import { Country } from "../../model/country";
import { from } from "rxjs/internal/observable/from";

@Component({
  selector: "register-deliveryAddress",
  templateUrl: "./register.deliveryAddress.component.html",
  styleUrls: ["./register.deliveryAddress.component.css",]
})

export class RegisterDeliveryAddressComponent implements OnInit {

  public deliveryAddress: DeliveryAddress;
  public user: User;
  public cepforAPi: number;
  public activate_spinerCep: boolean;
  public activate_spiner: boolean;
  public cepSend: boolean;
  public countryCboSelected: boolean;

  public msgError: string;
  public registerError: string;
  public registerSuccsess: string;

  public countryList: Country[];
  public selectedCountry: Country;
  public listaParaRetorno: string[];

  constructor(
    private deliveryAddressService: DeliveryAddressService,
    private userService: UserService,
    private countryService: CountryService
  ) {

  }

  ngOnInit(): void {
    this.deliveryAddress = new DeliveryAddress();
    this.user = new User();
    this.user = JSON.parse(sessionStorage.getItem("user_authenticated"));
    this.deliveryAddress.userId = this.user.id;
    this.getListcountry();
  }


  //ICONS  
  faShippingFast = faShippingFast;

    getListcountry(): void {
      this.countryService.getAll().subscribe(
        list => {
          this.countryList = list;
          this.listaParaRetorno = list.map(u => u.countryName);
        },err => {
          this.msgError = err.error;
          console.log(err.error);
        }

      )
    }

  cepKeyUp(event: any) {
    if (event.target.value.length >= 9) {
      this.cepforAPi = event.target.value;
      this.activateLoading();
      this.deliveryAddressService.getDeliveryAddresFromApiCorreios(this.cepforAPi.toString())
        .subscribe(
          addressFromApi => {
            //Set Values
            this.deliveryAddress.publicPlace = addressFromApi['value'].end;
            this.deliveryAddress.province = addressFromApi['value'].uf;
            this.deliveryAddress.city = addressFromApi['value'].cidade;
            this.deliveryAddress.neighborhood = addressFromApi['value'].bairro;
            this.deliveryAddress.cep = event.target.value.replace('-', '');


            this.desactivateLoading();
            this.msgError = "";
          },
          err => {
            this.msgError = err.error + " Please input you address.";
            //console.log(err.error);
            this.desactivateLoading();

            //UnSet Values
            this.deliveryAddress.publicPlace = "";
            this.deliveryAddress.province = "";
            this.deliveryAddress.city = "";
            this.deliveryAddress.neighborhood = "";
            this.deliveryAddress.cep = event.target.value.replace('-', '');

          }
        );

    }
  }


  public async registerDeliveryAddress() {
    console.log(JSON.stringify(this.deliveryAddress));
    this.activateLoadingRegister();
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1500)

    this.deliveryAddressService.registerDeliveryAddress(this.deliveryAddress).subscribe(
      deliveryAddress => {
        this.registerSuccsess = "Register Succesful."
      },
      err => {
        this.registerError = err.error;
      }
    );

  }

  reciverFeedback(response) {

    console.log('Foi emitido o evento e chegou no pai >>>> ', response);
    this.selectedCountry = this.countryList.filter(function (e) {
      return e.countryName === response.country;
    })[0];
    console.log(this.selectedCountry.countryCode);
    this.deliveryAddress.country = this.selectedCountry.countryCode;
    this.countryCboSelected = true;
  }


  public activateLoading() {
    this.activate_spinerCep = true;
    this.cepSend = true;
  }

  public desactivateLoading() {
    this.activate_spinerCep = false;
    this.cepSend = true;
  }

  public activateLoadingRegister() {
    this.activate_spiner = true;
  }

  public desactivateLoadingRegister() {
    this.activate_spinerCep = false;
  }


}

