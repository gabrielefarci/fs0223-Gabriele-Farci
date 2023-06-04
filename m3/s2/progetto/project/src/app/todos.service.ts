import { Injectable } from '@angular/core';
import { Itodo } from './itodo';
import { todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiURL:string = 'http://localhost:3000/todos';

  constructor() {}

  getTodos():Promise<Itodo[]> {
    return fetch(this.apiURL).then(res => res.json());
  }

  addTodo(todo:Itodo):Promise<Itodo> {
    return fetch(this.apiURL, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(res => res.json())
  }

  updateTodo(todo:Itodo) {
    return fetch(this.apiURL + '/' + todo.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(data => todo.completed = true)
  }

}
