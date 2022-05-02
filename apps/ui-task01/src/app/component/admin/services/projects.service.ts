import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
<<<<<<< HEAD
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]
=======

  
  apiURLProject = environment.apiUrl + 'projects';
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURLProject);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiURLProject}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiURLProject, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiURLProject}/${project.id}`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLProject}/${id}`);
  }

  getProjectCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLProject}/get/count`)
      .pipe(map((objectValue: any) => objectValue.projectCount));
  }

  /* urlPrefix= environment.apiUrl; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]>
  {
<<<<<<< HEAD
/*     var currentUser = { token: "" };
    var headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer ");
    if (sessionStorage['currentUser'] != null)
    {
      currentUser = JSON.parse(sessionStorage['currentUser']);
      headers = headers.set("Authorization", "Bearer " + currentUser.token);
    } */
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject, { responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
=======
    return this.httpClient.get<Project[]>(this.urlPrefix + 'projects', {
      responseType: 'json',
    });
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + 'projects', newProject, {
      responseType: 'json',
    });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + 'projects', existingProject, {
      responseType: 'json',
    });
  }

  deleteProject(id: number): Observable<string>
  {
    return this.httpClient.delete<string>(
      this.urlPrefix + 'projects?ProjectID=' + ProjectID
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + 'projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  } */
}
