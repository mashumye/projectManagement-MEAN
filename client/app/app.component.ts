import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    providers: [ProjectsService]
})
export class AppComponent { 
    
}