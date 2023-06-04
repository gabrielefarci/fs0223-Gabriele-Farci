import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/itodo';
import { todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // funziona però non sono riuscito a capire perchè devo premere due volte sulla checkbox per cambiare lo stato completed in true

  todo:todo = new todo('',false,0);

  todos:Itodo[] = [];

  loading:boolean = true;

  constructor(private todosSvc:TodosService) {}

  ngOnInit() {
    this.todosSvc.getTodos().then(todosResponse => {
      this.todos = todosResponse.filter(t => !t.completed); this.loading = false;
    });
  }

  changeStatus(todo:Itodo) {
    this.todosSvc.updateTodo(todo);
  }

  create() {
    this.todosSvc.addTodo(this.todo)
    .then(res => console.log(res)
    )
  }

}
