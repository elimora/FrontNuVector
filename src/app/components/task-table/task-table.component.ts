import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  @Output('editTask') onEditTask = new EventEmitter<Task>();

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.fetchTasks();
    this.taskService.getTasks().subscribe({
      next: (res) => ((this.tasks = res), console.log(res)),
      error: (err) => console.log(err),
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe({
      next: () => this.taskService.fetchTasks(),
      error: (err) => console.error(err),
    });
  }
}
