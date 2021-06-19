import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import User from 'src/app/shared/models/user';

export enum DIALOG_MODE {
  ADD = 'Novo',
  EDIT = 'Editar',
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  title: string;

  user: User;
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    if (this.data.user) {
      this.user = this.data.user;
    } else {
      this.user = new User();
    }
    this.userForm = this.fb.group({
      id: [this.user.id],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, Validators.required],
    });
  }
}
