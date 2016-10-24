import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import { Student } from './student';

@Component({
	selector: 'student-form',
	templateUrl: 'app/student-form.component.html'
})

export class StudentFormComponent {
	names = ['马云', '马化腾', '刘强东', '周鸿祎'];
	model = new Student(1880,  this.names[0], 25,"北京市花神街39号");
	submitted = false;
	onSubmit() {
		this.submitted = true;
	}
}