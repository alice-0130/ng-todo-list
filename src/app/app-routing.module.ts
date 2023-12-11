import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./modules/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
  {
    path: '**',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
