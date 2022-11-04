import { Address } from "./Address";
import { Role } from "./Role";

export class Player{
    userId: number;
    name: string;
    image: string;
    email: string;
    password: string;
    plays:number;
    wins: number;
    loses: number;
    address: Address;
    role: Role;
}