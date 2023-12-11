import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoListItem } from '../modules/todo-list/types/todo-list-item.type';

@Injectable()
export class MissionService {
  // 문자열 타입의 옵저버블 소스
  private todoListItemsSource = new BehaviorSubject<TodoListItem | null>(null);

  // 문자열 옵저버블 스트림
  missionAnnounced$ = this.todoListItemsSource.asObservable();

  // removeItem() {

  // }

  createItem(item: TodoListItem) {
    this.todoListItemsSource.next(item);
  }
}
