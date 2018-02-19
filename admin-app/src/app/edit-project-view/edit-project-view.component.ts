import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.model';

@Component({
  selector: 'admin-edit-project-view',
  templateUrl: './edit-project-view.component.html',
  styleUrls: ['./edit-project-view.component.css']
})
export class EditProjectViewComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {

    const id = route.snapshot.params['id'];

    this.projectService.getProject(id)
      .subscribe((project: Project) => {
        this.project = project;
      });

  }

  onClickSave() {
    this.projectService.saveProject(this.project).subscribe((project: Project) => {
      this.navigateBack();
    });
  }

  onClickDelete() {
    this.projectService.deleteProject(this.project._id).subscribe(() => {
      this.navigateBack();
    });
  }

  private navigateBack() {
    this.router.navigate(['../'],  { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
