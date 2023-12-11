import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../types/todo-list-item.type';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListPage implements OnInit {
  today: Date;
  items: TodoListItem[] = [];

  constructor(private todoService: TodoService) {
    this.today = new Date();
    this.todoService.todoItems$.subscribe((items) => (this.items = items));
  }

  ngOnInit(): void {}
}
