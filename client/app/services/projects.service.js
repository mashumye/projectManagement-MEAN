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
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ProjectsService = (function () {
    //private handleError = 'Error: ';
    function ProjectsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log('Project service instantiated.....');
    }
    ProjectsService.prototype.getProjects = function () {
        return this.http.get(this.baseUrl + "/projects")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    ProjectsService.prototype.getProject = function (id) {
        return this.getProjects()
            .map(function (projects) { return projects.find(function (project) { return project._id === id; }); });
    };
    ProjectsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProjectsService.prototype.addProject = function (newProject) {
        return this.http.post(this.baseUrl + "/project", JSON.stringify(newProject), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.deleteProject = function (id) {
        return this.http.delete((this.baseUrl + "/project/") + id)
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.updateProject = function (project) {
        //const url = 'http://localhost:3000/api/project/'+project._id;
        console.log('from service' + project);
        return this.http.put((this.baseUrl + "/project/") + project._id, JSON.stringify(project), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map