import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.model';

@Component({
  selector: 'admin-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];

  constructor(private projectService: ProjectService) { }

  onClickDelete(id: string) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  ngOnInit() {
    this.loadProjects();
  }

}
