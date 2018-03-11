import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account/account.service';

const accountRoutes: Routes = [
  { path: 'accounts', component: AccountListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      accountRoutes
    )
  ],
  declarations: [
    AccountListComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountsModule { }
