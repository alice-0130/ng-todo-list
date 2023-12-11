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

  changeChecked(id: string) {
    this.todoService.updateChecked(Number(id), !this.checked);
  }

  deleteTask(id: string) {
    this.todoService.delete(Number(id));
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
