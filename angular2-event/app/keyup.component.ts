import {Component} from 'angular2/core';

@Component({
  selector: 'key-up',
  template: `
   <input (keyup)="onKey($event)">
   <p>{{values}}</p>
  `
})
export class KeyUpComponent {
  values='';
  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
}