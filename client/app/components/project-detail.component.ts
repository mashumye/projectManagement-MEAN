import {Component, OnInit} from '@angular/core';
import { ProjectsService} from '../services/projects.service';
import { Project } from '../../model/project';
import { Task } from '../../model/Task';
import {ActivatedRoute, Params,Router} from "@angular/router";
import { Location }             from '@angular/common';


@Component({
    moduleId:module.id,
    selector: 'my-project-detail',
    styleUrls:['project-detail.component.css'],
    templateUrl: 'project-detail.component.html'

})
export class ProjectDetailComponent implements OnInit{
    project:Project;
    constructor(
        private projectService: ProjectsService,
        private route: ActivatedRoute,private router: Router,
        private location: Location) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            console.log(id);
            this.projectService.getProject(id)
                .subscribe(project => this.project = project);                
        });
        //console.log('Found proj: '+this.project.title);
    }

    goBack(): void {
        this.location.back();
    }
    // save(): void {
    //     this.projectService.updateProject(this.project)
    //         .then(() => this.goBack());
    // }

    addTask(title,employee){        
        
        this.project.tasks.push({title:title,isDone:false,employee:employee});        
        
        console.log('from component: '+this.project.tasks);

        this.projectService.updateProject(this.project).subscribe(project=>{
            this.project = project});
        //this.gotoDetail();  
    }

    gotoDetail(){
        this.router.navigate(['/detail',this.project._id]);
    }
    
}