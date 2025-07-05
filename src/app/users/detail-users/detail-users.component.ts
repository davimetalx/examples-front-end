import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.scss']
})
export class DetailUsersComponent implements OnInit {

  id: string | null = null;

  constructor(
    private activatedroute:ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    if (this.id) {
      this.userService.getUser(parseInt(this.id)).subscribe(user => {
        console.log(user);
      });
    }
  }

}
