import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {Project} from '../../model/project';

@Injectable()
export class ProjectSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Project[]> {
        return this.http
            .get(`http://localhost:3000/api/project/?title=${term}`)
            .map((r: Response) => r.json() as Project[]);
    }
}