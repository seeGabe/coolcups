import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Cup } from "../models/cup";
@Component({
  selector: 'app-cup-dialog',
  templateUrl: './cup-dialog.component.html',
  styleUrls: ['./cup-dialog.component.css']
})
export class CupDialogComponent implements OnInit {

  dialogForm: FormGroup;

  get formControls() {
    return this.dialogForm.controls;
  }

  constructor(
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<CupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.dialogForm = this._fb.group({
        cupname: [data.cupname, Validators.required],
        cuptype: [data.cuptype, Validators.required]
      });

  }

  ngOnInit() { }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
