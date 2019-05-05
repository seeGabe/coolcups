import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  get formControls() {
    return this.loginForm.controls;
  }

  constructor(private _authSvc: AuthenticateService,
              private _router: Router,
              private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this._authSvc.login(this.loginForm.value);
    this._router.navigateByUrl('/cups');
  
  }
}
