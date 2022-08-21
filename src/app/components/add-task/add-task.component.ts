import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor } from 'src/app/models/contractors.models';
import { Project } from 'src/app/models/project.models';
import { ContractorsService } from 'src/app/services/contractors.service';
import { ProjectService } from 'src/app/services/project.service';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/activity.model';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { Task } from 'src/app/models/task.models';
import { TaskService } from 'src/app/services/task.service';
import { map } from 'rxjs';
import { Products } from 'src/app/models/products.models';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  contractors: Contractor[] = [];
  projects: Project[] = [];
  activities: Activity[] = [];
  clients: Client[] = [];
  products: Products[] = [];
  category: Category[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly projectService: ProjectService,
    private readonly taskService: TaskService,
    private readonly contractorService: ContractorsService,
    private readonly clientsService: ClientService,
    private readonly activityService: ActivityService,
    private readonly productService: ProductsService,
    private readonly categoryService: CategoryService
  ) {
    this.addTaskForm = this.fb.group({
      project: ['', [Validators.required]],
      contractor: ['', [Validators.required]],
      client: ['', [Validators.required]],
      activity: ['', [Validators.required]],
      billable_flag: [true, [Validators.required]],
      date: [new Date(), [Validators.required]],
      duration: ['', [Validators.required]],
      product: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      //active: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.addTaskForm
      .get('project')
      ?.valueChanges.pipe<Project | undefined>(
        map((projectId: string) =>
          this.projects.find((project) => project.id === projectId)
        )
      )
      .subscribe((value?: Project) => {
        if (!value) return this.addTaskForm.get('client')?.setValue(null);
        this.addTaskForm.get('client')?.setValue(value.client.id);
      });

    //get all contractors to show them in a dropdown
    this.contractorService.fetchContractor();
    this.contractorService.getContractors().subscribe({
      next: (res) => ((this.contractors = res), console.log(res)),
      error: (err) => console.log(err),
    });
    //get all projects to show them in a dropdown
    this.projectService.fetchProjects();
    this.projectService.getProjects().subscribe({
      next: (res) => ((this.projects = res), console.log(res)),
      error: (err) => console.log(err),
    });

    // get all clients to show then in a dropdown
    this.clientsService.fetchClients();
    this.clientsService.getClients().subscribe({
      next: (res) => (this.clients = res),
    });

    //get all Activities to show them in a dropdown
    this.activityService.fetchActivity();
    this.activityService.getActivitiy().subscribe({
      next: (res) => ((this.activities = res), console.log(res)),
      error: (err) => console.log(err),
    });

    //get all product to show them in a dropdown
    this.productService.fetchProducts();
    this.productService.getProducts().subscribe({
      next: (res) => ((this.products = res), console.log(res)),
      error: (err) => console.log(err),
    });

    //get all categories to show them in a dropdown
    this.categoryService.fetchCategory();
    this.categoryService.getCategory().subscribe({
      next: (res) => ((this.category = res), console.log(res)),
      error: (err) => console.log(err),
    });
  }

  AddTask() {
    console.log(this.addTaskForm.value);
    const taskToSave: Task = {
      ...this.addTaskForm.value,
    };

    this.taskService.createTask(taskToSave).subscribe({
      next: (res) => {
        this.addTaskForm.reset();
      },
      error: (err) => console.error(err),
    });
  }
}
