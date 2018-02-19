import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.model';

@Component({
  selector: 'admin-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  constructor( private router: Router, private route: ActivatedRoute, private projectService: ProjectService ) {

    const id = route.snapshot.params['id'];

    this.projectService.getProject(id)
      .subscribe((project: Project) => {
        this.project = project;
      });

  }

  onClickDelete() {
    this.projectService.deleteProject(this.project._id).subscribe(() => {
      this.router.navigate(['projects']);
    });
  }

  ngOnInit() {
  }

}
