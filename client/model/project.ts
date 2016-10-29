import { Task } from './Task';

export class Project {
    id:string;
    title: string;
    description: string;

    tasks:Task[];
}