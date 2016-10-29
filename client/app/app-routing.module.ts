import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard.component';
import { ProjectsComponent }      from './components/projects.component';
import { ProjectDetailComponent }  from './components/project-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
  //  { path: 'dashboard',  component: DashboardComponen },
    { path: 'detail/:id', component: ProjectDetailComponent },
    { path: 'projects',     component: ProjectsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}