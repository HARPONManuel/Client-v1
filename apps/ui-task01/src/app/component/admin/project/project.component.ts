import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'task01-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService)
  {
  }

  ngOnInit()
  {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) =>
      {
        this.projects = response;
      }
    );
  }

}
