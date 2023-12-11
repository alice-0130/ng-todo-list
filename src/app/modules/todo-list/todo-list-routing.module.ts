import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListPage } from './pages/todo-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: TodoListPage },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
