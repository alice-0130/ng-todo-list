import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../types/todo-list-item.type';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListPage implements OnInit {
  today: Date;
  items$: Observable<TodoListItem[]>;
  isInputEmpty = false;
  // items: TodoListItem[] = [];

  alertEmptyData(isEmpty: boolean) {
    this.isInputEmpty = isEmpty;
  }

  constructor(private todoService: TodoService) {
    this.today = new Date();
    this.items$ = this.todoService.todoItems$;
    // this.todoService.todoItems$.subscribe((items) => (this.items = items));
  }

  ngOnInit(): void {}
}
