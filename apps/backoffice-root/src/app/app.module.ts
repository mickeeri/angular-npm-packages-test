import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'account',
          loadChildren: './lazy.module#LazyModule'
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Copied LazyModule from this link because you cannot lazy load external packages in angular
// https://github.com/angular/angular-cli/issues/6373#issuecomment-453006158
