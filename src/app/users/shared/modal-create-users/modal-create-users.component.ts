import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create-users',
  templateUrl: './modal-create-users.component.html',
  styleUrls: ['./modal-create-users.component.scss']
})
export class ModalCreateUsersComponent implements OnInit {

  formUser!: FormGroup;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalCreateUsersComponent>
  ) {}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm(): void {
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
