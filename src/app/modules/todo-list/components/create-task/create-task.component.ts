import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  addTask(inputElem: HTMLInputElement) {
    if (inputElem.value) {
      this.todoService.add(inputElem.value);
      inputElem.value = '';
    }
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
