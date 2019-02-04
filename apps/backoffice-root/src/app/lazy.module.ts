import { NgModule } from '@angular/core';
import { AccountModule as AccountModuleExternal } from 'mickeeri-account';
import { environment } from '../environments/environment';
import { AccountModule } from '@backoffice/account';

@NgModule({
  imports: [environment.production ? AccountModuleExternal : AccountModule]
})
export class LazyModule {}
