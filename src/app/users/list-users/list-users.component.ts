import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ModalCreateUsersComponent } from '../shared/modal-create-users/modal-create-users.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditUsersComponent } from '../shared/modal-edit-users/modal-edit-users.component';
import { ModalDeleteUsersComponent } from '../shared/modal-delete-users/modal-delete-users.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  users: User[] = [];

  displayedColumns: string[] = [
    'fullName', 
    'username', 
    'email', 
    'phone',
    'actions'
  ];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  navigateUserDetail(user: User): void {
    this.router.navigate(['/users', user.id]);
  }

  createUser(): void {
    const dialogRef = this.dialog.open(ModalCreateUsersComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  editUser(): void {
    const dialogRef = this.dialog.open(ModalEditUsersComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ModalDeleteUsersComponent, {
      height: '240px',
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(user);
      }
    });
  }

}
