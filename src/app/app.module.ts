import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './modules/todo-list/pages/todo-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'todo-list', component: TodoListComponent },
      { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
