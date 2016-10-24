import {Component,OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {Mobile,MobileService} from './mobile.service';

@Component({
	template: `
     <h2>Mobile Detail</h2>
      <div *ngIf="mobile">
        <h3>"{{mobile.name}}"</h3>
        <div>
          <label>Id: </label>{{mobile.id}}</div>
        <div>
          <label>Name: </label>
          <input [(ngModel)]="mobile.name" placeholder="name"/>
        </div>
        <button (click)="gotoMobiles()">Back</button>
      </div>
    `
})
export class MobileDetailComponent implements OnInit  {

  mobile: Mobile;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:MobileService){

  }
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getMobile(id).then(mobile => this.mobile = mobile);
  }

  gotoMobiles() {
    let mId = this.mobile ? this.mobile.id : null;
    // Like <a [routerLink]="['MobileList']">MobileList</a>
    this._router.navigate(['MobileList',{id:mId,foo:'foo'}]);
  }
}