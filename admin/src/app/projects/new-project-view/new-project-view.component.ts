import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.model';

@Component({
  selector: 'admin-new-project-view',
  templateUrl: './new-project-view.component.html',
  styleUrls: ['./new-project-view.component.css']
})
export class NewProjectViewComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  onClickSave() {
    this.projectService.saveProject(this.project).subscribe((project: Project) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  onClickCancel() {
    this.router.navigate(['projects']);
  }

  ngOnInit() {
  }

}
