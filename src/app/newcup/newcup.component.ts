import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";

import { StorageService } from "../services/storage.service";
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-newcup',
  templateUrl: './newcup.component.html',
  styleUrls: ['./newcup.component.css']
})
export class NewcupComponent implements OnInit {

  newCupForm:FormGroup;

  get formControls() {
    return this.newCupForm.controls;
  }

  constructor(private _storeSvc: StorageService,
              private _fb:FormBuilder,
              private _router: Router) { }

  ngOnInit() {
    this.newCupForm = this._fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  addNewCup() {
    if (this.newCupForm.invalid) {
      return;
    }
    this._storeSvc.addCup({
      name:this.newCupForm.controls.name.value,
      type:this.newCupForm.controls.type.value,
      full: true
    });
    this.newCupForm.reset();
    return false;
  }

  toDashboard(){
    this._router.navigateByUrl('/cups');
  }
}
