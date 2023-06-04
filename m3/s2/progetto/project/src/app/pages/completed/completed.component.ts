import { Component, Input } from '@angular/core';
import { Itodo } from 'src/app/itodo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {

  todos:Itodo[] = [];

  loading:boolean = true;

  constructor(private todosSvc:TodosService) {}

  ngOnInit() {
    this.todosSvc.getTodos().then(todosResponse => {
      this.todos = todosResponse.filter(t => t.completed); this.loading = false;
    });
  }

}
