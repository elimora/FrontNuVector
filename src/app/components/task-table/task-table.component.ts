import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.models';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {}
}
