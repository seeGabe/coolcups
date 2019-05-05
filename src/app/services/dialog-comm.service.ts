import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material';
import { CupDialogComponent } from '../cup-dialog/cup-dialog.component';
import { Cup } from '../models/cup';

@Injectable()
export class DialogCommService {
  type: string;
  name: string;
  
  constructor(public dialog: MatDialog) { }
  
  openDialog(cupdata:Cup): Observable<Cup> {
    const dialogRef = this.dialog.open(CupDialogComponent, {
      data: {
        name: cupdata.name,
        type: cupdata.type
         }
    });

    return dialogRef.afterClosed();
  }
}