import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { AccountListComponent } from './containers/account-list/account-list.component';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AccountListComponent }])
  ]
})
export class AccountModule {}
