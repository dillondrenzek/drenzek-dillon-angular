import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsModule } from './projects/projects.module';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { appConfigProvider } from './core/appConfig';

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ProjectsModule,
    AccountsModule
  ],
  providers: [
    appConfigProvider
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
