export class Product{
    id !: number;
    name: string | undefined;
    description: string | undefined;
    price!: number;
    discount: number | undefined;
    quantity: number | undefined;
    color: string | undefined;
    images: string | undefined;
    isavailable: boolean | undefined;
    cartQuantity!: number;
    totalPrice!:number;
}