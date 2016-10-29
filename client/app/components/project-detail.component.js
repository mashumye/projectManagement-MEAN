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
var common_1 = require('@angular/common');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, route, router, location) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            console.log(id);
            _this.projectService.getProject(id)
                .subscribe(function (project) { return _this.project = project; });
        });
        //console.log('Found proj: '+this.project.title);
    };
    ProjectDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // save(): void {
    //     this.projectService.updateProject(this.project)
    //         .then(() => this.goBack());
    // }
    ProjectDetailComponent.prototype.addTask = function (title, employee) {
        var _this = this;
        this.project.tasks.push({ title: title, isDone: false, employee: employee });
        console.log('from component: ' + this.project.tasks);
        this.projectService.updateProject(this.project).subscribe(function (project) {
            _this.project = project;
        });
        //this.gotoDetail();  
    };
    ProjectDetailComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.project._id]);
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-project-detail',
            styleUrls: ['project-detail.component.css'],
            templateUrl: 'project-detail.component.html'
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map