import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @Input() isEmpty = false;
  @Output() isEmptyChange = new EventEmitter<boolean>();

  addTask(inputElem: HTMLInputElement) {
    if (inputElem.value) {
      this.todoService.add(inputElem.value);
      inputElem.value = '';
      this.isEmptyChange.emit(false);
    } else {
      this.alertInputEmpty();
    }
  }

  alertInputEmpty() {
    this.isEmptyChange.emit(true);
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
