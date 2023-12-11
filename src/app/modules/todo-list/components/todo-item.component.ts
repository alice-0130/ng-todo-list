import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() checked!: boolean;
  @Input() description!: string;
  @Input() time!: string;

  // constructor() {}

  ngOnInit(): void {}
}
