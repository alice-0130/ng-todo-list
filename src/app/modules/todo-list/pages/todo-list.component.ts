import { Component, OnInit } from '@angular/core';
import { MOCK_TODO_LIST_ITEMS } from '../todo-list-items.mock';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListPage implements OnInit {
  today: Date;
  items = MOCK_TODO_LIST_ITEMS;

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {}
}
