import {Component} from 'angular2/core';
import {HeroBirthday} from './hero-birthday.component';

@Component({
    selector: 'my-app',
    template: '<hero-birthday></hero-birthday>',
    directives: [HeroBirthday]
})
export class AppComponent { }