import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account/account.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
