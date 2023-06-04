import { Itodo } from "./itodo";

export class todo implements Itodo {
  id?: number;
  title: string;
  completed: boolean;

  constructor(title:string, completed:boolean, id?:number, ) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }
}
