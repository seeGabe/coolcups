import { Component, Inject } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Cup } from "../models/cup";
@Component({
  selector: 'app-cup-dialog',
  templateUrl: './cup-dialog.component.html',
  styleUrls: ['./cup-dialog.component.css']
})
export class CupDialogComponent {

  dialogForm: FormGroup;

  get formControls() {
    return this.dialogForm.controls;
  }

  constructor(
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<CupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Cup) {
      this.dialogForm = this._fb.group({
        name: [data.name, Validators.required],
        type: [data.type, Validators.required]
      });
  }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }
  
}
