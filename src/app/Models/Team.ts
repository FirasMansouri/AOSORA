import { Player } from "./Player";

export class Team{
    id:number
    name: string;
    image: string;
    about: string;
    wins: number;
    loses: number;
    plays: number;
    fbPath: string;
    twichPath: string;
    twitterPath: string;
    youtube: string;
    players:Player[]=[];
}