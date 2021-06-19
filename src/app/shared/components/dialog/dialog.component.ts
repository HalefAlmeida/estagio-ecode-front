import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export enum DIALOG_MODE {
  ADD = 'Novo',
  EDIT = 'Editar',
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  title: string;

  record: any;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    if (this.data.record) {
      this.record = this.data.record;
    } else {
      this.record = {
        id: null,
      };
    }

    this.form = this.data.form;
  }
}
