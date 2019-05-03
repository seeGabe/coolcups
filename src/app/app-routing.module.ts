import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { CupboardComponent } from "./cupboard/cupboard.component";
import { CupGuardGuard } from "./cup-guard.guard";
import { NewcupComponent } from "./newcup/newcup.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'cups', component: CupboardComponent, canActivate: [CupGuardGuard] },
  { path: 'newcup', component: NewcupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
