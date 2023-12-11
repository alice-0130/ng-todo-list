import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() id!: number;
  @Input() checked!: boolean;
  @Input() description!: string;

  changeCheck(buttonElem: Element) {
    console.log(buttonElem);
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
