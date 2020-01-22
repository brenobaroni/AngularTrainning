import { OrderItem } from "./orderItem";

export class Order {

  public id: number;
  public orderDate: Date;
  public userId: number;
  public deliveryDate: Date;
  public deliveryAddressId: number;
  public paymentMethodId: number;

  public orderItems: OrderItem[];

  constructor() {
    this.orderDate = new Date();
    this.orderItems = [];
  }
}
