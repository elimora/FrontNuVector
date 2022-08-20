import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { Contractor } from 'src/app/models/contractors.models';
import { Project } from 'src/app/models/project.models';
import { ContractorsService } from 'src/app/services/contractors.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addProjectForm: FormGroup;
  contractors: Contractor[] = [];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private contractorService: ContractorsService
  ) {
    this.addProjectForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.contractorService.fetchContractor();

    this.contractorService.getContractors().subscribe({
      next: (res) => ((this.contractors = res), console.log(res)),
      error: (err) => console.log(err),
    });
  }

  AddTask() {
    const { id, name, description, active } = this.addProjectForm.value;

    const PorjectToSave: Project = {
      name,
      description,
      active,
      client: {
        id: '',
      },
    };

    this.projectService.createProject(PorjectToSave).subscribe({
      next: (res) => {
        //this.projectService.fetchClients();
        this.addProjectForm.reset();
      },
      error: (err) => console.error(err),
    });
  }

  AddClient() {}
}
function next(
  next: any,
  arg1: (res: any) => void,
  error: any,
  arg3: (err: any) => void
) {
  throw new Error('Function not implemented.');
}
