import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from '../project/project';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  urlPrefix= environment.apiUrl; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "projects");
  }
}
