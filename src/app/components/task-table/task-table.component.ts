import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];

  //@Output('editClient') onEditClient = new EventEmitter<Client>();

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    //this.clientService.fetchClients();
    this.taskService.fetchTasks();
    this.taskService.getTasks().subscribe({
      next: (res) => ((this.tasks = res), console.log(res)),
      error: (err) => console.log(err),
    });
  }
}
