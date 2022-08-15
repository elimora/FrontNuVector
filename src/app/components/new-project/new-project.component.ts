import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  constructor(private projectservices: ProjectService) {}

  ngOnInit(): void {
    this.projectservices.getProjects().subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }
}
