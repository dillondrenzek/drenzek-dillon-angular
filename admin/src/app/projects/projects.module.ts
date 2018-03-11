import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProjectService } from './project/project.service';
import { ProjectFormComponent } from './project-form/project-form.component';
import { NewProjectViewComponent } from './new-project-view/new-project-view.component';
import { EditProjectViewComponent } from './edit-project-view/edit-project-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectListComponent } from './project-list/project-list.component';

const projectRoutes: Routes = [
  { path: 'projects/new',       component: NewProjectViewComponent },
  { path: 'projects/:id/edit',  component: EditProjectViewComponent },
  { path: 'projects/:id',       component: ProjectViewComponent },
  { path: 'projects',           component: ProjectListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [
    NewProjectViewComponent,
    EditProjectViewComponent,
    ProjectViewComponent,
    ProjectListComponent,
    ProjectFormComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectsModule { }
