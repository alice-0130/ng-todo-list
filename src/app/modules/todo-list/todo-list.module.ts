import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListPage } from './pages/todo-list.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListRoutingModule } from './todo-list-routing.module';

const COMPONENTS = [TodoItemComponent];

const PAGES = [TodoListPage];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, TodoListRoutingModule],
})
export class TodoListModule {}
