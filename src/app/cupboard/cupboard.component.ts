import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";

import { AuthenticateService } from "../services/authenticate.service";
import { StorageService } from "../services/storage.service";
import { Cup } from '../models/cup';
import { CupDialogComponent } from "../cup-dialog/cup-dialog.component";

@Component({
  selector: 'app-cupboard',
  templateUrl: './cupboard.component.html',
  styleUrls: ['./cupboard.component.css']
})
export class CupboardComponent implements OnInit {

  cups: Cup[];
  cupCount: number = 0;
  
  constructor(private _authSvc: AuthenticateService,
              private _storeSvc: StorageService,
              private _dialog: MatDialog,
              private _router: Router) { }

  ngOnInit() {
    this.getCups();
    this.countMyCups();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      cupname: this.cups[0].name,
      cuptype: this.cups[0].type
    };
    this._dialog.open(CupDialogComponent, dialogConfig);
  }

  logout() {
    this._authSvc.logout();
    this._router.navigateByUrl('/login');
  }

  addNew() {
    this._router.navigateByUrl('/newcup');
  }

  getCups() {
    this._storeSvc.getCups()
      .subscribe(cups => this.cups = cups);
  }

  countMyCups() {
    this.cupCount = this.cups.length;
  }


}
