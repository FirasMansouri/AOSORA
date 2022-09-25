import { Product } from "./Product";
import { User } from "./User";

export class Order{
    id: number;
    date: Date;
    orderProducts : {quantity:number, product:Product}[];
    user:User
}