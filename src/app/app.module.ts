import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CupboardComponent } from './cupboard/cupboard.component';
import { CupComponent } from './cup/cup.component';
import { NewcupComponent } from './newcup/newcup.component';
import { CupDialogComponent } from './cup-dialog/cup-dialog.component';
import { DialogCommService } from './services/dialog-comm.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CupboardComponent,
    CupComponent,
    CupDialogComponent,
    NewcupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [DialogCommService],
  entryComponents: [CupDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
