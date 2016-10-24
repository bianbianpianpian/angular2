import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

import {Mobile} from './mobile';

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular 2 App</h1>
    <ul *ngIf="mobiles">
           <li *ngFor="#m of mobiles"><span>{{m.id}}</span> {{m.name}}</li>
    </ul>
    `
})
export class AppComponent implements OnInit { 
	public mobiles: Mobile[];
	constructor(public http: Http){
		console.log(" AppComponent constructor :", "run step constructor ");
		http.get('app/mobile.json').subscribe(response=>this.mobiles=response.json());
	}
	ngOnInit() {
        console.log(" AppComponent ngOnInit :", "run step ngOnInit ");
    }
}