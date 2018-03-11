import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account/account.service';

import { ProjectsModule } from './projects/projects.module';

const appRoutes: Routes = [
  { path: 'accounts', component: AccountListComponent },
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
    ProjectsModule
  ],
  providers: [
    AccountService
  ],
  declarations: [
    AppComponent,
    AccountListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
