import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project/project.model';

@Component({
  selector: 'admin-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Input() model: Project;

  @Input() showMetadata: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
