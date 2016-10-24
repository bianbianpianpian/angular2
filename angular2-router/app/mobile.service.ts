import {Injectable} from 'angular2/core';

export class Mobile {
	constructor(
		public id: number,
		public name: string
	){}
}
@Injectable()
export class MobileService {
	getMobiles() {
		return mobilesPromise;
	}
	getMobile(id: number | string) {
		return mobilesPromise.then(
			mobiles => mobiles.filter(h => h.id === +id)[0]
		);
	}
}
var MobileArray = [
	new Mobile(11, '苹果'),
	new Mobile(12, '三星'),
	new Mobile(13, '小米'),
	new Mobile(14, '华为'),
	new Mobile(15, '乐视'),
	new Mobile(16, '魅族')
];
var mobilesPromise = Promise.resolve(MobileArray);