import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalCreateUsersComponent } from './shared/modal-create-users/modal-create-users.component';
import { ModalEditUsersComponent } from './shared/modal-edit-users/modal-edit-users.component';
import { ModalDeleteUsersComponent } from './shared/modal-delete-users/modal-delete-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListUsersComponent,
    DetailUsersComponent,
    ModalCreateUsersComponent,
    ModalEditUsersComponent,
    ModalDeleteUsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    ListUsersComponent
  ]
})
export class UsersModule { }
