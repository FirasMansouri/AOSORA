import { Address } from "./Address";

export class User{
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    address: Address | undefined;
    role: string | undefined;
}