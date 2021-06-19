import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogComponent,
  DIALOG_MODE,
} from '../shared/components/dialog/dialog.component';
import User from '../shared/models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: Promise<User[]>;

  form: FormGroup;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm();
    this.fetch();
  }

  private buildForm(user?: User): FormGroup {
    if (user) {
      return this.fb.group({
        id: [user.id],
        email: [user.email, [Validators.email, Validators.required]],
        password: [user.password, [Validators.required]],
      });
    }
    return this.fb.group({
      id: [null],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
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

  openDialog(title: string, record?: User) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: title, record: record, form: this.buildForm(record) },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const transactionRef = this.userService.save(result);
      console.log(transactionRef);

      if (transactionRef.id) {
        console.log(`Succesfully saved`);
      }
    });
  }
}
