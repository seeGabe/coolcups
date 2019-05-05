import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from '../services/authenticate.service';
import { StorageService } from '../services/storage.service';
import { Cup } from '../models/cup';

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
              private _router: Router) { }

  ngOnInit() {
    this.getCups();
    this.countMyCups();
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
