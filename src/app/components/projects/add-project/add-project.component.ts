import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  addProject: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly projectService: ProjectService
  ) {
    this.addProject = this.fb.group({});
  }

  ngOnInit(): void {}

  CreateProject() {}
}
