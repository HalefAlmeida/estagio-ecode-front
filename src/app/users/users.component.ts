import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import User from '../shared/models/user';
import { DIALOG_MODE, NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: Promise<User[]>;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.users$ = this.userService.findAll();
  }

  add() {
    this.openDialog(DIALOG_MODE.ADD);
  }

  edit(user: User) {
    this.openDialog(DIALOG_MODE.EDIT, user);
  }

  delete(user: User) {
    this.userService.delete(user.id);
  }

  openDialog(title: string, user?: User) {
    const dialogRef = this.dialog.open(NewUserComponent, {
      data: { title: title, user: user },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const transactionRef = this.userService.save(result);
      console.log(transactionRef);

      if (transactionRef.id) {
        console.log(`Succesfully saved`);
      } else {
      }

      // if (transactionRef()) {
      //   console.log(`Succesfully saved`);
      // }
    });
  }
}
