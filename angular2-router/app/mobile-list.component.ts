import {Component} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {Mobile,MobileService} from './mobile.service';

@Component({
	template: `
    <h3>Mobile List</h3>
    <ul>
      <li *ngFor="#m of mobiles"
        (click)="onSelect(m)" [class.selected]="isSelected(m)">
        <span class="badge">{{m.id}}</span> {{m.name}}
      </li>
    </ul>
    `
})
export class MobileListComponent implements OnInit { 

    mobiles:Mobile[];
    private _selectedId: number;

    constructor(
        private _router: Router,
        private _service: MobileService,
        routeParams: RouteParams
      ) {
        this._selectedId = routeParams.get('id');
    }

    ngOnInit() {
        this._service.getMobiles().then(mobiles => this.mobiles = mobiles)

    }

    onSelect(mobile: Mobile) {
        this._router.navigate( ['MobileDetail', { id:mobile.id }] );
    }

    isSelected(m: Mobile) { 
        return m.id === this._selectedId; 
    }

}