import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account/account.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project/project.service';
import { ProjectViewComponent } from './project-view/project-view.component';


const appRoutes: Routes = [
  { path:'accounts',      component: AccountListComponent },
  { path:'projects/:id',  component: ProjectViewComponent },
  { path:'projects',      component: ProjectListComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AccountService,
    ProjectService
  ],
  declarations: [
    AppComponent,
    AccountListComponent,
    ProjectListComponent,
    ProjectViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
