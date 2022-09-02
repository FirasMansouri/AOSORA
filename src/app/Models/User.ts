import { Address } from "./Address";
import { Role } from "./Role";

export class User{
    userId: number;
    name: string;
    email: string;
    password: string;
    address: Address;
    role: Role;
}