import { Address } from "./Address";

export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    address: Address;
    role: string;
}