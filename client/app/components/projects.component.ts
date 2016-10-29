import { Component } from '@angular/core';
import { ProjectsService} from '../services/projects.service';
import { Project } from '../../model/project';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    selector: 'projects',
    styleUrls: [ 'projects.component.css' ],
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit{ 
    projects: Project[];
    selectedProject:Project;
    
    constructor(private router: Router, private projectsService: ProjectsService ){       
        
    }
    getProjects():void{
        this.projectsService.getProjects()
        .subscribe(projects =>{
            this.projects = projects;
        });
    }

    // toArray(){
    //     return Array.from(this.projects);
    // }

    ngOnInit():void {
       
        this.getProjects();
         //console.log(this.projects);
    }
    
    addProject(title,description){
        var newProject ={
            title:title,
            description:description
        }
        console.log(newProject.title);
        this.projectsService.addProject(newProject).subscribe(project=>{this.projects.push(project)});
        title='';
        description='';
   }

   deleteProject(id){
        var projects =this.projects
        this.projectsService.deleteProject(id).subscribe(data =>{
       if(data.n == 1){
                for(var i = 0; i < projects.length; i++){
                    if(projects[i]._id == id){
                        projects.splice(i,1);
                    }

                }
            }
        });
    }  

    onSelect(project: Project): void {
        this.selectedProject = project;
        console.log(project.title);
    }
    gotoDetail(){
        this.router.navigate(['/detail',this.selectedProject._id]);
    }

}
    