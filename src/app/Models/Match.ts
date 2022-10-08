import { Team } from "./Team";

export class Match{
    id:number;
    about:string;
    date:string;
    images:string;
    teamId1:number;
    teamId2:number;
    team1:Team;
    team2:Team;
    scoreTeam1:number;
    scoreTeam2:number;
    tournamentId:number;
}