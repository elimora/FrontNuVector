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
  addProject: FormGroup;
  projects: Project[] = [];
  clients: Client[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly projectService: ProjectService,
    private readonly clientsService: ClientService
  ) {
    this.addProject = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      client: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.addProject
      .get('name')
      ?.valueChanges.pipe<Project | undefined>(
        map((projectId: string) =>
          this.projects.find((project) => project.id === projectId)
        )
      )
      .subscribe((value?: Project) => {
        if (!value) return this.addProject.get('client')?.setValue(null);
        this.addProject.get('client')?.setValue(value.client.id);
      });
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

  CreateProject() {
    console.log(this.addProject.value);
    const projectToSave: Project = {
      ...this.addProject.value,
    };

    this.projectService.createProject(projectToSave).subscribe({
      next: (res) => {
        this.addProject.reset();
      },
      error: (err) => console.error(err),
    });
  }
}
