import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent }   from './app.component';
import {ProjectsComponent} from './components/projects.component';
import {ProjectSearchComponent} from './components/project-search.component';
import {ProjectDetailComponent} from './components/project-detail.component';
import {HttpModule} from '@angular/http';
//import {RouterModule} from '@angular/router';
@NgModule({
    imports:      [ BrowserModule,HttpModule,AppRoutingModule],
    declarations: [ AppComponent,ProjectsComponent,ProjectDetailComponent,ProjectSearchComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }