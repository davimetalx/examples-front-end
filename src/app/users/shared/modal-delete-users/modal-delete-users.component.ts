import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-delete-users',
  templateUrl: './modal-delete-users.component.html',
  styleUrls: ['./modal-delete-users.component.scss']
})
export class ModalDeleteUsersComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
