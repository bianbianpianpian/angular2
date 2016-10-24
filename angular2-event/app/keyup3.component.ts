import {Component} from 'angular2/core';

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="onKey(box.value)" (blur)="values=box.value" (focus)="values='请输入您的地址' ">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values='';
  onKey(value:string) {
    this.values = value;
  }
}
