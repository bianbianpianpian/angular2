import {Component} from 'angular2/core';
@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';
  onClickMe(){
    this.clickMessage ='欢迎来到Angular 2.0 !';
  }
}