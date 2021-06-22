import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankComponent } from './bank/bank.component';
import { ViewbankaccbyidComponent } from './viewbankaccbyid/viewbankaccbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    BankComponent,
    ViewbankaccbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
