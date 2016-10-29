"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var projects_service_1 = require('../services/projects.service');
var router_1 = require("@angular/router");
var ProjectsComponent = (function () {
    function ProjectsComponent(router, projectsService) {
        this.router = router;
        this.projectsService = projectsService;
    }
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    // toArray(){
    //     return Array.from(this.projects);
    // }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
        //console.log(this.projects);
    };
    ProjectsComponent.prototype.addProject = function (title, description) {
        var _this = this;
        var newProject = {
            title: title,
            description: description
        };
        console.log(newProject.title);
        this.projectsService.addProject(newProject).subscribe(function (project) { _this.projects.push(project); });
        title = '';
        description = '';
    };
    ProjectsComponent.prototype.deleteProject = function (id) {
        var projects = this.projects;
        this.projectsService.deleteProject(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i]._id == id) {
                        projects.splice(i, 1);
                    }
                }
            }
        });
    };
    ProjectsComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
        console.log(project.title);
    };
    ProjectsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProject._id]);
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projects',
            styleUrls: ['projects.component.css'],
            templateUrl: 'projects.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, projects_service_1.ProjectsService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map