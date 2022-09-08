import { category } from "./Category";

export class Product{
    id : number;
    name: string;
    description: string;
    price: number;
    discount: number;
    quantity: number;
    color: string;
    images: string;
    isavailable: boolean;
    category: category;
}