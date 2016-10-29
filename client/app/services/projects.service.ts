import { Injectable } from '@angular/core';
import {Project} from '../../model/project';
import {Headers,Http,Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectsService {
    private baseUrl ='http://localhost:3000/api';
    //private handleError = 'Error: ';
    constructor(private http:Http){
        console.log('Project service instantiated.....');
    }
getProjects(){
    return this.http.get(`${this.baseUrl}/projects`)
    .map(res => res.json())
    .catch((error:any) => Observable.throw('Server error'));
   
}

getProject(id){
    return this.getProjects()
            .map(projects => projects.find(project => project._id ===id));
}
private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
 private headers = new Headers({'Content-Type': 'application/json'});


addProject(newProject){
    
    return this.http.post(`${this.baseUrl}/project`,JSON.stringify(newProject),{headers: this.headers})
    .map(res=>res.json());
}
deleteProject(id){
    return this.http.delete(`${this.baseUrl}/project/`+id)
    .map(res=>res.json());
}


updateProject(project) {
        
//const url = 'http://localhost:3000/api/project/'+project._id;
        console.log('from service'+project);

        return this.http.put(`${this.baseUrl}/project/`+project._id, JSON.stringify(project), {headers: this.headers})
            .map(res=>res.json());
}

    
    
}