import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './project';
import { ProjectsService } from '../services/projects.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'task01-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  form: FormGroup;
  editmode = false;
  currentProjectID: string;
  isSubmitted = false;
  projects: Project[] = [];
  endsubs$: Subject<any> = new Subject();

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._initProjectForm();
    this._checkEditMode();
    this._getProjects();
  }

  ngOnDestroy() {
    this.endsubs$.next();
    this.endsubs$.complete();
  }

  deleteProject(Id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Project?',
      header: 'Delete Project',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.projectsService
          .deleteProject(Id)
          .pipe(takeUntil(this.endsubs$))
          .subscribe(
            () => {
              this._getProjects();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Project is deleted!'
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Project is not deleted!'
              });
            }
          );
      }
    });
  }

  updateProject(id: string) {
    this.router.navigateByUrl(`projects/form/${id}`);
  }

  private _getProjects() {
    this.projectsService
      .getProjects()
      .pipe(takeUntil(this.endsubs$))
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  private _initProjectForm() {
    this.form = this.formBuilder.group({
      projectName: ['', Validators.required],
      dateOfStart: ['', Validators.required],
      teamSize: ['', Validators.required],

    });
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editmode = true;
        this.currentProjectID = params.id;
        this.projectsService.getProject(params.id).subscribe((project) => {
          this.projectForm.projectName.setValue(project.projectName);
          this.projectForm.dateOfStart.setValue(project.dateOfStart);
          this.projectForm.teamSize.setValue(project.teamSize);
        });
      }
    });
  }

  get projectForm() {
    return this.form.controls;
  }

  private _addProject(project: Project) {
    this.projectsService.createProject(project).subscribe(
      (project: Project) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Project ${project.projectName} is created!`
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not created!'
        });
      }
    );
  }

  private _updateProject(project: Project) {
    this.projectsService.updateProject(project).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Project is updated!'
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not updated!'
        });
      }
    );
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const project: Project = {
      id: this.currentProjectID,
      projectName: this.projectForm.projectName.value,
      dateOfStart: this.projectForm.dateOfStart.value,
      teamSize: this.projectForm.teamSize.value,
    };
    if (this.editmode) {
      this._updateProject(project);
    } else {
      this._addProject(project);
    }
  }

  onCancle() {
    this.location.back();
  }


  /*
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;
  searchBy: string = 'ProjectName';
  searchText: string = '';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit()
  {
    this.projectsService.getAllProjects().subscribe((response: Project[]) =>
    {
      this.projects = response;
    });
  }

  onSaveClick()
  {
    this.projectsService.insertProject(this.newProject).subscribe(
      (response) =>
      {
        //Add Project to Grid
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //Clear New Project Dialog - TextBoxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  onEditClick(event: any, index: number)
  {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick()
  {
    this.projectsService.updateProject(this.editProject).subscribe(
      (response: Project) =>
      {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  onDeleteClick(event: any, index: number)
  {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick()
  {
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) =>
      {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  onSearchClick()
  {
    this.projectsService
      .SearchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) =>
        {
          this.projects = response;
        },
        (error) =>
        {
          console.log(error);
        }
      );
  } */
}
