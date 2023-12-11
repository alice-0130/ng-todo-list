import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListPage } from './pages/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const COMPONENTS = [TodoItemComponent, CreateTaskComponent];

const PAGES = [TodoListPage];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, TodoListRoutingModule],
})
export class TodoListModule {}
