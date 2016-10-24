import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
@Component({
	selector: 'hero-birthday',
	template: `
		<p> The hero's birthday is {{ birthday | date }}</p>
		<p> The hero's birthday is {{ birthday | date:"MM/dd/yy" }}</p>
		<p> The hero's birthday is {{ birthday | date:'y'}}-{{ birthday | date:'MM'}}-{{ birthday | date:'d'}}</p>
		<p> The hero's birthday is {{ birthday | date:format }}</p>
  		<button (click)="toggleFormat()">Toggle Format</button>
  		<p> The chained hero's birthday is {{ birthday | date | uppercase}}</p>
  		<h2>Power Booster</h2>
	    <p>
	      Super power boost: {{2 | exponentialStrength: 11}}
	    </p>
	`,
	pipes: [ExponentialStrengthPipe]
})
export class HeroBirthday {
	birthday = new Date(1988,3,15);

	toggle = true; // start with true == shortDate
  	get format() { return this.toggle ? 'shortDate' : 'fullDate'}
  	toggleFormat() { this.toggle = !this.toggle; }


}