import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';
import { map } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  addProjectForm: FormGroup;
  projects: Project[] = [];
  clients: Client[] = [];

  selectedProject: Project | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly projectService: ProjectService,
    private readonly clientsService: ClientService
  ) {
    this.addProjectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      client: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  ngOnInit(): void {
    //get all proyects to send them to the dropdpwn
    this.projectService.fetchProjects();
    this.projectService.getProjects().subscribe({
      next: (res) => ((this.projects = res), console.log(res)),
      error: (err) => console.log(err),
    });
    // get all clients to show then in a dropdown
    this.clientsService.fetchClients();
    this.clientsService.getClients().subscribe({
      next: (res) => ((this.clients = res), console.log(res)),
    });
  }

  saveProject() {
    // const { name, city, state, country, industry_code, active } =
    // this.addClientForm.value; idem

    const projectToSave: Project = {
      //idem to project
      ...this.addProjectForm.value,
    };

    const operation = this.selectedProject?.id
      ? this.projectService.updateProject(
          this.selectedProject.id,
          projectToSave
        )
      : this.projectService.createProject(projectToSave);

    operation.subscribe({
      next: () => {
        this.projectService.fetchProjects();
        this.addProjectForm.reset();
        this.selectedProject = null;
      },
      error: (err) => console.error(err),
    });

    // this.projectService.createProject(projectToSave).subscribe({
    //   next: (res) => {
    //     this.addProjectForm.reset();
    //   },
    //   error: (err) => console.error(err),
    // });
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    console.log(project.id);
    this.addProjectForm.reset({
      ...project,
      client: project.client.id,
    });
  }
}
