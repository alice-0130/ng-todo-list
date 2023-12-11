import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../types/todo-list-item.type';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListPage implements OnInit {
  today: Date;
  items: TodoListItem[] = [];

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {}
}
