import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DetailUsersComponent } from './detail-users/detail-users.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    DetailUsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    ListUsersComponent
  ]
})
export class UsersModule { }
