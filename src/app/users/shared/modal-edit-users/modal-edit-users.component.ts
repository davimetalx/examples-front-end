import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalCreateUsersComponent } from '../modal-create-users/modal-create-users.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-modal-edit-users',
  templateUrl: './modal-edit-users.component.html',
  styleUrls: ['./modal-edit-users.component.scss']
})
export class ModalEditUsersComponent implements OnInit {

  formUser!: FormGroup;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalCreateUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.editUserForm();

    this.userService.getUser(this.data.id).subscribe(user => {
      this.formUser.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone
      });
    });
  }

  editUserForm(): void {
    this.formUser = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formUser.valid) {
      console.log('Form Submitted', this.formUser.value);
      this.dialogRef.close(this.formUser.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onClear(): void {
    this.submitted = false;
    this.formUser.reset();
  }

  onCancel(): void {
    setTimeout(() => {
      this.submitted = false;
      this.formUser.reset();
      this.dialogRef.close();
    });
  }

}
