import {Component} from 'angular2/core';

@Component({
  selector: 'loopback',
  template: `
   <input #box (keyup)="0">
   <p>{{box.value}}</p>
  `
})
export class LoopbackComponent  {

}