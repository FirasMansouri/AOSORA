import { Match } from "./Match";

export class Tournament{
  id:number;  
  name:string;
  about :string;
  beginDate:Date;
  endDate:Date;
  place:string;
  firstPrice:number;  
  secondPrice:number;  
  thirdPrice:number;  
  streamPath:string;
  platform:string;
  image:string;
  matchs:Match[];
}