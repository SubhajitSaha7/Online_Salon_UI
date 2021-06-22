import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { ViewbankaccbyidComponent } from './viewbankaccbyid/viewbankaccbyid.component';

const routes: Routes = [{path:'viewbankacc',component:BankComponent,
                           children:[{path:'byid',component:ViewbankaccbyidComponent}]},
                              ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
