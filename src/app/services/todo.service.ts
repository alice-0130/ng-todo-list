import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoListItem } from '../modules/todo-list/types/todo-list-item.type';

@Injectable()
export class TodoService {
  // 문자열 타입의 옵저버블 소스
  private todoListItemsSource = new BehaviorSubject<TodoListItem[]>([]);
  private id = 1;

  constructor() {
    // get items from localStorage
    const localStorageItems = window.localStorage.getItem('items');
    console.log('실행됨1');
    if (localStorageItems) {
      this.todoListItemsSource.next(JSON.parse(localStorageItems));
    }
  }

  // 문자열 옵저버블 스트림
  todoItems$ = this.todoListItemsSource.asObservable();

  // CRUD
  add(description: string) {
    const currentItems = this.todoListItemsSource.getValue();
    this.todoListItemsSource.next([
      ...currentItems,
      { id: this.id++, checked: false, description },
    ]);
  }

  update(id: number, description: string) {
    const currentItems = this.todoListItemsSource.getValue();
    const itemUpdate = currentItems.find((item) => item.id === id);
    if (itemUpdate) {
      itemUpdate.description = description;
    }
  }

  delete(id: number) {
    const currentItems = this.todoListItemsSource.getValue();
    const itemsWithoutDeleted = currentItems.filter((d) => d.id !== id);
    this.todoListItemsSource.next(itemsWithoutDeleted);
  }
}
