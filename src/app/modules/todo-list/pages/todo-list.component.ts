import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListPage implements OnInit {
  today: Date;
  checked = false;
  description = '산책하기';
  time = '11:00 am';

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {}
}
