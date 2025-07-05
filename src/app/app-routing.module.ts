import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DetailUsersComponent } from './users/detail-users/detail-users.component';

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: 'users/:id', component: DetailUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
